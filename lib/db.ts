import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

/*
  During the developing stage, when the app first run,
  db = new PrismaClient() will be executed.
  because globalThis.prisma is undefined.
  Then globalThis.prisma = db will be executed.
  So whenever hot reload happens,
  db = globalThis.prisma will be executed
  instead of db = new PrismaClient()
*/

// This will be executed in every hot reload
export const db = globalThis.prisma || new PrismaClient();

// This will store the current db into the globalThis.prisma,
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}
