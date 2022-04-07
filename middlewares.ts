import {
  isLeapYear,
  leapYearsInRange,
  type Middleware,
  type RouterContext,
} from "./deps.ts";

export const RootMiddleware: Middleware = (ctx) => {
  ctx.response.body = { result: isLeapYear() };
};

export const DocsMiddleware: Middleware = (context) => {
  context.response.redirect(
    "https://github.com/UltiRequiem/leap-year-api#endpoints"
  );
};

export const YearMiddleware = (context: RouterContext<"/:year">) => {
  context.response.body = { result: isLeapYear(context.params.year) };
};

export const RangeMiddleware = (
  context: RouterContext<"/range/:start/:end">
) => {
  context.response.body = {
    result: leapYearsInRange({
      min: parseInt(context.params.start),
      max: parseInt(context.params.end),
    }),
  };
};
