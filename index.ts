const express = require('express');
const app = express();

import calculateBmi from "./bmi";
import calculateExercises from "./exercise";


app.get('/hello', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Please send weight/height/ parameters!');
});

app.get('/bmi/:weight/:height', (_req: any, res: { send: (arg0: string) => void; }) => {
  let bmi = '';
  if (_req.params.weight && _req.params.height) {
    bmi = calculateBmi ( _req.params.weight , _req.params.height);
  } else {
    bmi = 'malformatted parameters';
  }
  res.send(bmi);
});

app.post('/exercises', (_req: any, res: { send: (arg0: string) => void; }) => {
  const result = calculateExercises(_req.params.target, _req.params.daily_exercises);
  res.send(result.toString());
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});