import test from 'ava';
import request from 'supertest';
import app from './app.js';

const RANDOM_YEAR = Math.floor((Math.random() * (9999 - 1001)) + 1001);

test(`GET /${RANDOM_YEAR}`, async t => {
	const response = await request(app).get(`/${RANDOM_YEAR}`).send();

	t.is(response.status, 200);

	const data = JSON.parse(response.text);

	t.assert('leapYear' in data);
});
