# Leap Year API

A leap year is a calendar year that contains an additional day added to
keep the calendar year synchronized with the astronomical year or seasonal year.

This API is made with express and is deployed on [Replit](http://repl.it).

![Cover](./assets/cover.jpg)

## Usage

You can see an example of usage with Nodejs on [test.js](./test.js)

```javascript
async function getData(url) {
  const data = await fetch(url);
  return data.json();
}

getData('https://leap-year.ultirequiem.repl.co/2024').then((data) =>
  console.log(data)
);
```

Or another one with Python on [test.py](./test.py)

```python
import requests

data = requests.get("https://leap-year.ultirequiem.repl.co/2024").json()

print(data)
```

### License

[MIT](./LICENSE)
