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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merchantRoutes = void 0;
const express_1 = __importDefault(require("express"));
const merchantController_1 = require("../controllers/merchantController");
const router = express_1.default.Router();
exports.merchantRoutes = router;
router.post('/account', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, merchantController_1.addAccount)(req, res); }));
router.get('/account', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, merchantController_1.getAccount)(req, res); }));
router.put('/account', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, merchantController_1.updateAccount)(req, res); }));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, merchantController_1.removeAccount)(req, res); }));
router.post('/contract', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, merchantController_1.addContract)(req, res); }));
router.get('/contract', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, merchantController_1.getContract)(req, res); }));
router.post('/mandate', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, merchantController_1.createMandateFlowForAllContracts)(req, res); }));
router.post('/payment', (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, merchantController_1.createPayment)(req, res); }));
//# sourceMappingURL=merchantRoute.js.map