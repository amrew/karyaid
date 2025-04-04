import schema from "@/instant.schema";
import { init } from "@instantdb/react";

export const dbClient = init({
  appId: process.env.NEXT_PUBLIC_INSTANT_APP_ID!,
  schema: schema,
});
