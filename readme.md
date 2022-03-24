# Leap Year API

[![CI](https://github.com/UltiRequiem/leap-year-api/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/leap-year-api/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/ultirequiem/leap-year-api/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/leap-year-api)

A leap year is a calendar year that contains an additional day added to keep the
calendar year synchronized with the astronomical year or seasonal year.

## Endpoints

### `GET /`

> https://leap.deno.dev

Returns if the current year is leap.

Currently(2022) it returns 👇

```json
{
  "result": false
}
```

### `GET /:year`

> https://leap.deno.dev/2004

Returns is `${YEAR}` is a leap year.

```json
{
  "result": true
}
```

## Usage

You can see usage examples (in different languages) in [examples/](./examples)
and in the [tests](./server_test.ts).

## Related

- [leap_year](https://deno.land/x/leap_year): Contains the core logic of this
  API

- [leap_years_utils](https://deno.land/x/leap_years_utils): The logic for the in
  Range Section

## Changelog

- Jul 21, 2021: Start, using [Express](https://expressjs.com/) and CommonJS 🎉

> The logic to calculate if the year was a leap year was in the router.

- Dec 23, 2021: Move to ESM 🚀

> The logic where moved to an NPM package,
> [check-leap-year](https://www.npmjs.com/package/check-leap-year).

- Jan 31, 2022: Add usage example in different languages 👀

> Especially Go, Ruby and Python.

- 24 Mar, 2022: Moved to [Deno](https://deno.land), using
  [Oak](https://github.com/oakserver/oak) 🐿

> The NPM package was deprecated in favor of
> [@ultirequiem/leap-year](https://www.npmjs.com/package/@ultirequiem/leap-year),
> which is Deno first but works on Node.js and the browser too 😆

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/intent/tweet?text=%40UltiRequiem%20) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🚀

Don't forget to start the repo ⭐

## Licence

Released under the MIT Licence.
