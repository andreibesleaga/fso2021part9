import diagnosesData from '../../data/diagnoses.json';
import { DiagnosisEntry } from '../types';

const diagnoses: Array<DiagnosisEntry> = diagnosesData as Array<DiagnosisEntry>;

const getEntries = (): Array<DiagnosisEntry> => {
  return diagnoses;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry
};