import { Application, Router } from "./deps.ts";

import { isLeapYear, leapYearsInRange } from "./deps.ts";

import { DocsMiddleware, RootMiddleware } from "./middlewares.ts";

const app = new Application();
const router = new Router();

router.get("/", RootMiddleware);
router.get("/docs", DocsMiddleware);

// TODO: Move to external middleware when know how to type it
router.get("/:year", (context) => {
  context.response.body = { result: isLeapYear(context.params.year) };
});

// TODO: Same as the router of before
router.get("/range/:start/:end", (context) => {
  context.response.body = {
    result: leapYearsInRange({
      min: parseInt(context.params.start),
      max: parseInt(context.params.end),
    }),
  };
});

// simple cors
app.use((ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  return next();
});

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
