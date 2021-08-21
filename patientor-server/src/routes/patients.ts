import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientEntry from '../utils';

const patientsRouter = express.Router();

patientsRouter.get('/api/patients', (_req, res) => {
  res.send(patientsService.getEntries());
});

patientsRouter.get('/api/patients/:id', (req, res) => {
  const patient = patientsService.findById(req.params.id);
  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
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

patientsRouter.post('/api/patients/:id/entries', (_req, res) => {
  try {
    const id = _req.params.id;
    const newEntry = _req.body;
    const addedEntry = patientsService.addOnlyEntry(id, newEntry);
    res.json(addedEntry);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(e.message);
  }
});

export default patientsRouter;