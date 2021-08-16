import express from 'express';
import diagnosesRouter from './src/routes/diagnoses';
import patientsRouter from './src/routes/patients';

const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

const PORT = 3001;

app.use('/', diagnosesRouter);
app.use('/', patientsRouter);

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged');
  res.send('pong, pinger!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});