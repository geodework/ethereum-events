import { config } from 'dotenv';
import { exec } from 'child_process';
import path from 'path';

config();

const SUPABASE_ID = process.env.SUPABASE_ID;
if (!SUPABASE_ID) {
  console.error('Error: SUPABASE_ID environment variable is not set.');
  process.exit(1);
}

const outputPath = path.resolve(__dirname, '../database.types.ts');
const command = `npx supabase gen types typescript --project-id ${SUPABASE_ID} > ${outputPath}`;

exec(command, (error, _, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    process.exit(1);
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(`Types generated and written to ${outputPath}`);
});
