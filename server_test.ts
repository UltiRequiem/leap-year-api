import { superoak } from "https://deno.land/x/superoak@4.7.0/mod.ts";

import { isLeapYear } from "./deps.ts";

import { app } from "./app.ts";

Deno.test("Main", async (t) => {
  await t.step("True case", async () => {
    const request = await superoak(app);
    await request.get("/2020").expect(`{"leapYear":true}`);
  });

  await t.step("False case", async () => {
    const request = await superoak(app);
    await request.get("/2000").expect(`{"leapYear":false}`);
  });

  await t.step("Docs", async () => {
    const request = await superoak(app);
    await request
      .get("/docs")
      .expect(
        "Redirecting to https://github.com/UltiRequiem/leap-year-api#endpoints.",
      );
  });

  await t.step("Library Case", async () => {
    const request = await superoak(app);
    await request.get("/").expect(`{"leapYear":${isLeapYear()}}`);
  });
});
