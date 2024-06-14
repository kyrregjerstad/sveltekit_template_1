import { serial, varchar } from 'drizzle-orm/pg-core';
import { customPgTable } from './tableCreator';

/* 
Always use the customPgTable function to create your tables.
This will prefix your table name with the value of the DB_PREFIX environment variable.
*/

const example = customPgTable('example', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).notNull().unique(),
});

export default example;
