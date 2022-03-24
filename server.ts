import { Application, Router } from "https://deno.land/x/oak@v10.4.0/mod.ts";
import { isLeapYear } from "https://deno.land/x/leap_year@v2.0.0/mod.ts";

const app = new Application();

const router = new Router();

router.get("/", (context) => {
  context.response.body = { leapYear: isLeapYear() };
});

router.get("/:year", (context) => {
  context.response.body = { leapYear: isLeapYear(context.params.year) };
});

app.use(router.routes());
app.use(router.allowedMethods());

if (import.meta.main) {
  await app.listen({ port: 3000 });
}

export { app };
