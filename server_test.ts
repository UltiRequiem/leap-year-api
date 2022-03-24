import { superoak } from "https://deno.land/x/superoak@4.7.0/mod.ts";

import { app } from "./server.ts";

Deno.test("Main", async (t) => {
  await t.step("True case", async () => {
    const request = await superoak(app);
    await request.get("/2020").expect(`{"leapYear":true}`);
  });

  await t.step("False case", async () => {
    const request = await superoak(app);
    await request.get("/2000").expect(`{"leapYear":false}`);
  });
});
