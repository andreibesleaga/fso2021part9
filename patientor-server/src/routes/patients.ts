import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientEntry from '../utils';

const patientsRouter = express.Router();

patientsRouter.get('/api/patients', (_req, res) => {
  res.send(patientsService.getEntries());
});

patientsRouter.post('/api/patients', (_req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(_req.body);
    const addedEntry = patientsService.addEntry(newPatientEntry);
    res.json(addedEntry);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(e.message);
  }
  
});

export default patientsRouter;