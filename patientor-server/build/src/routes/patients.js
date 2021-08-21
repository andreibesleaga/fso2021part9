"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientsService_1 = __importDefault(require("../services/patientsService"));
const utils_1 = __importDefault(require("../utils"));
const patientsRouter = express_1.default.Router();
patientsRouter.get('/api/patients', (_req, res) => {
    res.send(patientsService_1.default.getEntries());
});
patientsRouter.get('/api/patients/:id', (req, res) => {
    const patient = patientsService_1.default.findById(req.params.id);
    if (patient) {
        res.send(patient);
    }
    else {
        res.sendStatus(404);
    }
});
patientsRouter.post('/api/patients', (_req, res) => {
    try {
        const newPatientEntry = utils_1.default(_req.body);
        const addedEntry = patientsService_1.default.addEntry(newPatientEntry);
        res.json(addedEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
        console.log(e.message);
    }
});
exports.default = patientsRouter;
