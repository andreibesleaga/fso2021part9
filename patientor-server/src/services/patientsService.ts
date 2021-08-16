import {  NonSensitivePatientEntry as PatientEntry } from '../types';
import patientsData from '../../data/patients.json';

const patients: Array<PatientEntry> = patientsData as Array<PatientEntry>;

const getEntries = (): Array<PatientEntry> => {
  return patients;
};

const addEntry = (entry : PatientEntry) : PatientEntry => {
    const newPatientEntry = {  ...entry  }
    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default {
  getEntries,
  addEntry
};