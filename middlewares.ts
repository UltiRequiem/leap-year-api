import { isLeapYear, leapYearsInRange, type RouterMiddleware } from "./deps.ts";

export const RootMiddleware: RouterMiddleware<"/"> = (ctx) => {
  ctx.response.body = { result: isLeapYear() };
};

export const DocsMiddleware: RouterMiddleware<"/docs"> = (context) => {
  context.response.redirect(
    "https://github.com/UltiRequiem/leap-year-api#endpoints"
  );
};

export const YearMiddleware: RouterMiddleware<"/:year"> = (context) => {
  context.response.body = { result: isLeapYear(context.params.year) };
};

export const RangeMiddleware: RouterMiddleware<"/range/:start/:end"> = (
  context
) => {
  context.response.body = {
    result: leapYearsInRange({
      min: parseInt(context.params.start),
      max: parseInt(context.params.end),
    }),
  };
};
