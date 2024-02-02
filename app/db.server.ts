import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | { $connect: null; post: [] };

declare const global: Global & { prisma?: PrismaClient };

// This is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
// In production, we'll have a single connection to the DB.
if (process.env.IS_STORYBOOK) {
  prisma = { $connect: null, post: [] };
} else if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
  prisma.$connect();
}

export { prisma };
