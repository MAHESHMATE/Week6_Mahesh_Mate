import { Account } from '../models/accountModel';
import { Address } from '../models/addressModel';
import { BankDetails } from '../models/bankDetailsModel';
import { Contract } from '../models/contractModel';
import { Payment, PaymentAttributes } from '../models/paymentModel';


const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
const client = gocardless('sandbox_GJuQNPbaMYIA71Y-1VGPdcuTa800vTDFfYivNQMq', constants.Environments.Sandbox)



async function createAccount(account: any): Promise<any> {
    try {
        const { address, bankDetails, ...accountDetails } = account;
        const addressRecord = await Address.create(address);
        const bankDetailsRecord = await BankDetails.create(bankDetails);

        const newAccount = await Account.create({
            ...accountDetails,
            addressUId: addressRecord.id,
            bankDetailsUId: bankDetailsRecord.id,
        });

        if (newAccount) {
            return newAccount;
        }

    } catch (err: any) {
        throw err
    }

}

async function getAccountById(id: string): Promise<any> {
    return await Account.findByPk(id, {
        include: [Address, BankDetails],
    });
};

// Read
async function getAccounts(): Promise<any[]> {
    // const query = 'SELECT * FROM users';
    // const result = await pool.query(query);
    // return result.rows;
    const users = await Account.findAll();
    return users;
}

export const getAddressById = async (id: string) => {
    return await Address.findByPk(id
    );
};

export const GetBankAccountById = async (id: string) => {
    return await BankDetails.findByPk(id
    );
};

// Update
async function ModifyAccount(accountData: any): Promise<any> {
    const { address, bankDetails, ...accountDetails } = accountData;

    const account = await Account.findByPk(accountData.id);
    if (!account) throw new Error('Account not found');

    if (address) {
        const addressRecord = await Address.findByPk(account.addressUId);
        if (addressRecord) {
            await addressRecord.update(address);
        }
    }
    if (bankDetails) {
        const bankDetailsRecord = await BankDetails.findByPk(account.bankDetailsUId);
        if (bankDetailsRecord) {
            await bankDetailsRecord.update(bankDetails);
        }
    }
    await account.update(accountDetails);

    return account;

}

// Delete
async function deleteAccount(id: string): Promise<any> {
    // const query = 'DELETE FROM users WHERE id = $1';
    // await pool.query(query, [id]);
    try {
        const accountEntity = await Account.findByPk(id);
        if (!accountEntity) {
            return "Account not found !"
        }
        await accountEntity.destroy();
        return "User deleted successfully";
    } catch (err: any) {
        return `Error updating user due to ${err.message}`;
    }

}


async function createContract(contract: any): Promise<any> {
    try {
        delete contract.id;
        delete contract.uid;

        const addressRecord = await Contract.create(contract);

        if (addressRecord) {
            return addressRecord;
        }

    } catch (err: any) {
        throw err
    }

}

async function getContracts(): Promise<any[]> {
    // const query = 'SELECT * FROM users';
    // const result = await pool.query(query);
    // return result.rows;
    const users = await Contract.findAll();
    return users;
}


async function CreateMandate(): Promise<any> {
    try {

        var contracts = await getContracts();
        for (const contract of contracts) {
            await CreateMandateForContract(contract);
        }
        return true;
    }
    catch (err: any) {
        throw err;
    }
}

async function CreateMandateForContract(contract: any) {
    try {
        // Fetch all accounts and filter the one matching the contract's accountUId
        const accounts = await getAccounts();
        const account = accounts.find(c => contract.accountUId === c.id);

        if (!account) {
            throw new Error(`Account with UId ${contract.accountUId} not found`);
        }

        // Fetch address and bank account details
        const address = await getAddressById(account.addressUId);
        const bankAccount = await GetBankAccountById(account.bankDetailsUId);

        if (!address) {
            throw new Error(`Address with UId ${account.addressUId} not found`);
        }

        if (!bankAccount) {
            throw new Error(`Bank account with UId ${account.bankDetailsUId} not found`);
        }

        // Create a customer in GoCardless
        const gclCustomer = await client.customers.create({
            email: account.email,
            given_name: account.name,
            family_name: "Test",
            address_line1: address.line1,
            address_line2: address.line2,
            city: address.city,
            postal_code: address.postalCode,
            country_code: "GB",
            metadata: {
                contract_id: contract.id
            }
        });

        // Use credentials from GetBankAccountById to create customer bank account
        const customerBankAccount = await client.customerBankAccounts.create({
            account_number: bankAccount.accountNumber, // DummyData - 55779911
            branch_code: bankAccount.sortCode,  ///DummyData - 200000
            account_holder_name: account.name,
            country_code: "GB",
            links: {
                customer: gclCustomer.id
            }
        });

        // Create a mandate
        const mandate = await client.mandates.create({
            scheme: "bacs",
            metadata: {
                contract_id: contract.id
            },
            links: {
                customer_bank_account: customerBankAccount.id,
                creditor: "CR123"
            }
        });

        return mandate;
    } catch (err: any) {
        console.error('Error creating mandate:', err);
        throw err;
    }
}

export const initiatePayment = async (paymentDetails: PaymentAttributes): Promise<Payment> => {
    try {
        const payment = await client.payments.create({
            amount: paymentDetails.amount,
            currency: paymentDetails.currency,
            charge_date: paymentDetails.charge_date,
            reference: paymentDetails.reference,
            metadata: paymentDetails.metadata,
            links: {
                mandate: paymentDetails.mandateId,
            },
        });

        const newPayment = await Payment.create({
            amount: parseInt(payment.amount, 10), // Ensure this is a number
            currency: payment.currency,
            charge_date: payment.charge_date,
            reference: payment.reference,
            metadata: payment.metadata,
            mandateId: payment.links.mandate,
        });

        return newPayment;
    } catch (error) {
        throw error;
    }
};

export { createAccount, getAccounts, ModifyAccount, deleteAccount, createContract, getContracts, CreateMandateForContract, CreateMandate, getAccountById };





