//import {  NonSensitivePatient as Patient } from '../types';
//import patientsData from '../../data/patients.json';
//const patients: Array<Patient> = patientsData as Array<Patient>;

import { Patient, Entry } from '../types';
import  patients  from '../patients'

const getEntries = (): Array<Patient> => {
  return patients;
};

const addEntry = (entry : Patient) : Patient => {
    const newPatientEntry = {  ...entry  }
    patients.push(newPatientEntry);
    return newPatientEntry;
};

const addOnlyEntry = (id : string, entry : Entry) : Entry => {
  var patient = findById(id);
  if(patient!==undefined) {
    patient.entries.push(entry);
    patients.map(patient => patients.find(o => o.id === patient.id) || patient);
  }
  return entry;
};

const findById = (id: string): Patient | undefined => {
  const entry = patients.find(p => p.id === id);
  return entry;
};

export default {
  getEntries,
  addEntry,
  addOnlyEntry,
  findById
};