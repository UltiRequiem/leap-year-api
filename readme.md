# Leap Year API

A leap year is a calendar year that contains an additional day added to keep the
calendar year synchronized with the astronomical year or seasonal year.

## Endpoints

### `GET /`

> https://leap.deno.dev

Returns if the current year is leap.

Currently it returns 👇

```json
{
  "leapYear": false
}
```

### `GET /:year`

> https://leap.deno.dev/2004

```json
{
  "leapYear": true
}
```

## Usage

You can see usage examples (in different languages) in [examples/](./examples)
and in the [tests](./server_test.ts).

## Changelog

- Jul 21, 2021: Start, using [Express](https://expressjs.com/) and CommonJS 🎉

> The logic to calculate if the year was leap year was in the router.

- Dec 23, 2021: Move to ESM 🚀

> The logic where moved to an NPM package,
> [check-leap-year](https://www.npmjs.com/package/check-leap-year).

- Jan 31, 2022: Add usage example in different languages 👀

- 24 Mar, 2022: Changed Node.js by [Deno](https://deno.land), using
  [Oak](https://github.com/oakserver/oak) 🐿

> The NPM package was deprecated in favor of
> [@ultirequiem/leap-year](https://www.npmjs.com/package/@ultirequiem/leap-year),
> which is Deno first but works on Node.js and the browser too 😆

## Licence

Released under the MIT Licence.
