import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// globalThis.prisma This gloabal variable ensures that the Prisma client instance is reused across hot reloads during development. Without this, each time your application reloads, new instance of the Prisma client would be created, potentially leading to connection issues.