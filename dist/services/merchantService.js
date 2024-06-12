"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountById = exports.CreateMandate = exports.CreateMandateForContract = exports.getContracts = exports.createContract = exports.deleteAccount = exports.ModifyAccount = exports.getAccounts = exports.createAccount = exports.initiatePayment = exports.GetBankAccountById = exports.getAddressById = void 0;
const accountModel_1 = require("../models/accountModel");
const addressModel_1 = require("../models/addressModel");
const bankDetailsModel_1 = require("../models/bankDetailsModel");
const contractModel_1 = require("../models/contractModel");
const paymentModel_1 = require("../models/paymentModel");
const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
const client = gocardless('sandbox_GJuQNPbaMYIA71Y-1VGPdcuTa800vTDFfYivNQMq', constants.Environments.Sandbox);
function createAccount(account) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { address, bankDetails } = account, accountDetails = __rest(account, ["address", "bankDetails"]);
            const addressRecord = yield addressModel_1.Address.create(address);
            const bankDetailsRecord = yield bankDetailsModel_1.BankDetails.create(bankDetails);
            const newAccount = yield accountModel_1.Account.create(Object.assign(Object.assign({}, accountDetails), { addressUId: addressRecord.id, bankDetailsUId: bankDetailsRecord.id }));
            if (newAccount) {
                return newAccount;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createAccount = createAccount;
function getAccountById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield accountModel_1.Account.findByPk(id, {
            include: [addressModel_1.Address, bankDetailsModel_1.BankDetails],
        });
    });
}
exports.getAccountById = getAccountById;
;
// Read
function getAccounts() {
    return __awaiter(this, void 0, void 0, function* () {
        // const query = 'SELECT * FROM users';
        // const result = await pool.query(query);
        // return result.rows;
        const users = yield accountModel_1.Account.findAll();
        return users;
    });
}
exports.getAccounts = getAccounts;
const getAddressById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield addressModel_1.Address.findByPk(id);
});
exports.getAddressById = getAddressById;
const GetBankAccountById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bankDetailsModel_1.BankDetails.findByPk(id);
});
exports.GetBankAccountById = GetBankAccountById;
// Update
function ModifyAccount(accountData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { address, bankDetails } = accountData, accountDetails = __rest(accountData, ["address", "bankDetails"]);
        const account = yield accountModel_1.Account.findByPk(accountData.id);
        if (!account)
            throw new Error('Account not found');
        if (address) {
            const addressRecord = yield addressModel_1.Address.findByPk(account.addressUId);
            if (addressRecord) {
                yield addressRecord.update(address);
            }
        }
        if (bankDetails) {
            const bankDetailsRecord = yield bankDetailsModel_1.BankDetails.findByPk(account.bankDetailsUId);
            if (bankDetailsRecord) {
                yield bankDetailsRecord.update(bankDetails);
            }
        }
        yield account.update(accountDetails);
        return account;
    });
}
exports.ModifyAccount = ModifyAccount;
// Delete
function deleteAccount(id) {
    return __awaiter(this, void 0, void 0, function* () {
        // const query = 'DELETE FROM users WHERE id = $1';
        // await pool.query(query, [id]);
        try {
            const accountEntity = yield accountModel_1.Account.findByPk(id);
            if (!accountEntity) {
                return "Account not found !";
            }
            yield accountEntity.destroy();
            return "User deleted successfully";
        }
        catch (err) {
            return `Error updating user due to ${err.message}`;
        }
    });
}
exports.deleteAccount = deleteAccount;
function createContract(contract) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            delete contract.id;
            delete contract.uid;
            const addressRecord = yield contractModel_1.Contract.create(contract);
            if (addressRecord) {
                return addressRecord;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createContract = createContract;
function getContracts() {
    return __awaiter(this, void 0, void 0, function* () {
        // const query = 'SELECT * FROM users';
        // const result = await pool.query(query);
        // return result.rows;
        const users = yield contractModel_1.Contract.findAll();
        return users;
    });
}
exports.getContracts = getContracts;
function CreateMandate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var contracts = yield getContracts();
            for (const contract of contracts) {
                yield CreateMandateForContract(contract);
            }
            return true;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.CreateMandate = CreateMandate;
function CreateMandateForContract(contract) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch all accounts and filter the one matching the contract's accountUId
            const accounts = yield getAccounts();
            const account = accounts.find(c => contract.accountUId === c.id);
            if (!account) {
                throw new Error(`Account with UId ${contract.accountUId} not found`);
            }
            // Fetch address and bank account details
            const address = yield (0, exports.getAddressById)(account.addressUId);
            const bankAccount = yield (0, exports.GetBankAccountById)(account.bankDetailsUId);
            if (!address) {
                throw new Error(`Address with UId ${account.addressUId} not found`);
            }
            if (!bankAccount) {
                throw new Error(`Bank account with UId ${account.bankDetailsUId} not found`);
            }
            // Create a customer in GoCardless
            const gclCustomer = yield client.customers.create({
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
            const customerBankAccount = yield client.customerBankAccounts.create({
                account_number: bankAccount.accountNumber, // DummyData - 55779911
                branch_code: bankAccount.sortCode, ///DummyData - 200000
                account_holder_name: account.name,
                country_code: "GB",
                links: {
                    customer: gclCustomer.id
                }
            });
            // Create a mandate
            const mandate = yield client.mandates.create({
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
        }
        catch (err) {
            console.error('Error creating mandate:', err);
            throw err;
        }
    });
}
exports.CreateMandateForContract = CreateMandateForContract;
const initiatePayment = (paymentDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield client.payments.create({
            amount: paymentDetails.amount,
            currency: paymentDetails.currency,
            charge_date: paymentDetails.charge_date,
            reference: paymentDetails.reference,
            metadata: paymentDetails.metadata,
            links: {
                mandate: paymentDetails.mandateId,
            },
        });
        const newPayment = yield paymentModel_1.Payment.create({
            amount: parseInt(payment.amount, 10), // Ensure this is a number
            currency: payment.currency,
            charge_date: payment.charge_date,
            reference: payment.reference,
            metadata: payment.metadata,
            mandateId: payment.links.mandate,
        });
        return newPayment;
    }
    catch (error) {
        throw error;
    }
});
exports.initiatePayment = initiatePayment;
//# sourceMappingURL=merchantService.js.map