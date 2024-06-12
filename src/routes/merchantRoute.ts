import express from 'express';
import { addAccount, getAccount, updateAccount, removeAccount, addContract, getContract, createMandateFlowForAllContracts, createPayment } from '../controllers/merchantController';



const router = express.Router();

router.post('/account', async (req, res) => addAccount(req, res));

router.get('/account', async (req, res) => getAccount(req, res));

router.put('/account', async (req, res) => updateAccount(req, res));

router.delete('/:id', async (req, res) => removeAccount(req, res));

router.post('/contract', async (req, res) => addContract(req, res));

router.get('/contract', async (req, res) => getContract(req, res));

router.post('/mandate', async (req, res) => createMandateFlowForAllContracts(req, res));

router.post('/payment', async (req, res) => createPayment(req, res));




export { router as merchantRoutes };

