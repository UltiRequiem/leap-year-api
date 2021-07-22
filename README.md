# Leap Year API

A leap year is a calendar year that contains an additional day added to
keep the calendar year synchronized with the astronomical year or seasonal year

![Cover](./assets/cover.jpg)

## Usage

You can see an example of usage with Nodejs on [test.js](./test.js)

```javascript
const API = 'https://leap-year.ultirequiem.repl.co';

async function getData(url, year) {
  const data = await fetch(`${url}/${year}`);
  return data.json();
}

function init() {
  getData(API, 2024).then((data) => console.log(data));
}
```
