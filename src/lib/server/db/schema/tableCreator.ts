import env from '@/env';
import { pgTableCreator } from 'drizzle-orm/pg-core';

export const customPgTable = pgTableCreator((name) => `${env.DB_PREFIX}_${name}`);
