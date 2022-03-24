import { app } from "./app.ts";

if (import.meta.main) {
  await app.listen({ port: 3000 });
}
