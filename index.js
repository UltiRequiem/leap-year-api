/* eslint-disable no-unused-expressions */
const express = require('express');
const isLeapYear = require('check-leap-year');

const app = express();

app.get('/', (_req, res) => {
  res.send(
    'Introduce the year in the url. Example: https://leap-year.ultirequiem.repl.co/2024'
  );
});

app.get('/:year', (req, res) => {
  isLeapYear(parseInt(req.params.year, 10))
    ? res.json({ leapYear: true })
    : res.json({ leapYear: false });
});

app.listen(3000, () => console.log('Running!'));
