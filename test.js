const fetch = require('node-fetch');

const API = 'https://leap-year.ultirequiem.repl.co';
const RANDOM_YEAR = Math.floor(Math.random() * (9999 - 1001) + 1001);

async function getData(url, year) {
  const urlToFetch = `${url}/${year}`;
  console.log(`Fetching ${urlToFetch} ...`);
  const data = await fetch(urlToFetch);
  return data.json();
}

function init() {
  getData(API, RANDOM_YEAR).then((data) => console.log(data));
}

init();
