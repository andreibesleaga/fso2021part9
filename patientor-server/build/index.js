"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diagnoses_1 = __importDefault(require("./src/routes/diagnoses"));
const patients_1 = __importDefault(require("./src/routes/patients"));
const app = express_1.default();
app.use(express_1.default.json());
var cors = require('cors');
app.use(cors());
const PORT = 3001;
app.use('/', diagnoses_1.default);
app.use('/', patients_1.default);
app.get('/api/ping', (_req, res) => {
    console.log('someone pinged');
    res.send('pong, pinger!');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
