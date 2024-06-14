import { defineConfig } from 'drizzle-kit';
import env from './src/env';

export default defineConfig({
	schema: './src/lib/server/db/schema/index.ts',
	out: './src/lib/server/db/migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: env.DB_URL,
	},
	verbose: true,
	strict: true,
	tablesFilter: [`${env.DB_PREFIX}_*`],
});
