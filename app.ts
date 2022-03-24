import { Application, isLeapYear, Router } from "./deps.ts";

const app = new Application();

const router = new Router();

router.get("/", (context) => {
  context.response.body = { leapYear: isLeapYear() };
});

router.get("/docs", (context) => {
  context.response.redirect(
    "https://github.com/UltiRequiem/leap-year-api#endpoints",
  );
});

router.get("/:year", (context) => {
  context.response.body = { leapYear: isLeapYear(context.params.year) };
});

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
