import express from 'express';
import isLeapYear from 'check-leap-year';

import { PORT, URL } from './config.js';

const app = express();

app.get('/', (_request, response) => {
  response.send(`Introduce the year in the url. Example: ${URL}/2024`);
});

app.get('/:year', ({ params: { year } }, response) => {
  response.json({ leapYear: isLeapYear(parseInt(year, 10)) });
});

app.listen(PORT, () => console.log('Running!'));
