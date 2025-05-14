import { db } from '../index';

// Usage: pnpm tsx db/script/insert-data.ts schemaName dataFilePath
const [, , schemaName, dataFilePath] = process.argv;

if (!schemaName || !dataFilePath) {
  console.error(
    'Usage: pnpm tsx db/script/insert-data.ts <schemaName> <dataFilePath>'
  );
  process.exit(1);
}

(async () => {
  // Dynamically import the schema and data
  const schemaModule = await import('../schema');
  const schema = (schemaModule as Record<string, any>)[schemaName];
  if (!schema) {
    console.error(`Schema "${schemaName}" not found in ../schema`);
    process.exit(1);
  }
  console.log(`Schema "${schemaName}" processing...`);
  const data = (await import(dataFilePath)).default;
  console.log(data);
  const result = await db.insert(schema).values(data);
  console.log('result', result);
  console.log('Database inserted');
})().catch(console.error);
