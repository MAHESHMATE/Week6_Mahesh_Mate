import { Request, Response } from "express";
import { Payment, PaymentAttributes } from "../models/paymentModel";
import { initiatePayment } from '../services/merchantService';
import { createAccount, getAccounts, deleteAccount, ModifyAccount, createContract, getContracts, CreateMandate } from '../services/merchantService';


export const addAccount = async (req: Request, res: Response) => {

    await createAccount(req.body); // Create one api for calling 
    res.send("Account created successfully");
}


export const getAccount = async (req: Request, res: Response) => {
    const users = await getAccounts();
    res.json(users);
}

export const removeAccount = async (req: Request, res: Response) => {
    const users = await deleteAccount(req.params.id);
    res.json(users);
}

export const updateAccount = async (req: Request, res: Response) => {
    const users = await ModifyAccount(req.body);
    res.json(users);
}

export const addContract = async (req: Request, res: Response) => {

    await createContract(req.body); // Create one api for calling 
    res.send("Account created successfully");
}

export const getContract = async (req: Request, res: Response) => {
    const users = await getContracts();
    res.json(users);
}

export const createMandateFlowForAllContracts = async (req: Request, res: Response) => {
    const users = await CreateMandate();
    if (users) {
        res.send("Mandates created for all contracts");
    }
}

export const createPayment = async (req: Request, res: Response): Promise<void> => {
    try {
        const paymentDetails: PaymentAttributes = {
            amount: req.body.amount,
            currency: req.body.currency,
            charge_date: req.body.charge_date,
            reference: req.body.reference,
            metadata: req.body.metadata,
            mandateId: req.body.links.mandate,
        };

        const payment = await initiatePayment(paymentDetails);
        res.json(payment);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
