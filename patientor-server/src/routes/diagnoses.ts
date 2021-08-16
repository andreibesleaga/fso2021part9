import express from 'express';
import diagnosesService from '../services/diagnosesService';

const diagnosesRouter = express.Router();

diagnosesRouter.get('/api/diagnoses', (_req, res) => {
  res.send(diagnosesService.getEntries());
});

diagnosesRouter.post('/api/diagnoses', (_req, res) => {
  res.send('Saving diagnostic!');
});

export default diagnosesRouter;