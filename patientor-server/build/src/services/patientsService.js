"use strict";
//import {  NonSensitivePatient as Patient } from '../types';
//import patientsData from '../../data/patients.json';
//const patients: Array<Patient> = patientsData as Array<Patient>;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
const getEntries = () => {
    return patients_1.default;
};
const addEntry = (entry) => {
    const newPatientEntry = Object.assign({}, entry);
    patients_1.default.push(newPatientEntry);
    return newPatientEntry;
};
const findById = (id) => {
    const entry = patients_1.default.find(p => p.id === id);
    return entry;
};
exports.default = {
    getEntries,
    addEntry,
    findById
};
