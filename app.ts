import { Application, Router } from "./deps.ts";

import {
  DocsMiddleware,
  RangeMiddleware,
  RootMiddleware,
  YearMiddleware,
} from "./middlewares.ts";

const app = new Application();
const router = new Router();

router.get("/", RootMiddleware);
router.get("/docs", DocsMiddleware);
router.get("/:year", YearMiddleware);
router.get("/range/:start/:end", RangeMiddleware);

app.use((ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  return next();
});

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
