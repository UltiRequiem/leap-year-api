import express from 'express';
import isLeapYear from 'check-leap-year';

const app = express();

app.get('/', (_request, response) => {
	response.redirect('https://github.com/UltiRequiem/leap-year-api#endpoints');
});

app.get('/:year', ({params: {year}}, response) => {
	response.json({leapYear: isLeapYear(Number.parseInt(year, 10))});
});

export default app;
