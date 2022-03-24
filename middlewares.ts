import { isLeapYear } from "./deps.ts";

import type { Middleware } from "./deps.ts";

export const RootMiddleware: Middleware = (ctx) => {
  ctx.response.body = { result: isLeapYear() };
};

export const DocsMiddleware: Middleware = (context) => {
  context.response.redirect(
    "https://github.com/UltiRequiem/leap-year-api#endpoints",
  );
};
