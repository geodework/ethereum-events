# Events Data Operation Guide

This document describes the step-by-step process for integrating Notion, generating event data, and inserting it into the database for the Ethereum Events project.

---

## 1. Integrate Notion API (MCP Secret Key)

1. **Obtain your Notion API Secret Key**
   - Go to your Notion integration settings and generate a new internal integration token.
2. **Update the MCP configuration**
   - Open `.cursor/mcp.json`.
   - Replace the value of `Authorization` in the `OPENAPI_MCP_HEADERS` with your Notion API Secret Key:
     ```json
     "Authorization": "Bearer <YOUR_NOTION_SECRET_KEY>"
     ```
   - Save the file.

---

## 2. Generate Events Data (with Cursor Agent)

1. **Replace all secret values**

   - In any config or prompt, replace placeholder secrets (e.g., `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) with your actual values, using capital letters as shown.

2. **Use Cursor Agent**

   - In Cursor, run the following prompt:

     ```
     Read @create-events.md to the end first and follow the instruction.
     ```

   - This will generate the formatted events data and output it to `db/output/events.json` as specified.

#### Example Output (`db/output/events.json`)

```json
[
  {
    "name": "FarCon",
    "countryId": 1,
    "location": "New York, NYC, USA",
    "venueType": null,
    "startDateTime": "2025-05-01T00:00:00.000Z",
    "endDateTime": "2025-05-04T00:00:00.000Z",
    "hasTimezone": false,
    "links": ["https://farcon.nyc/"],
    "socials": ["https://warpcast.com/~/channel/farcon-nyc"],
    "contacts": [],
    "categories": [2, 3],
    "domains": [2]
  }
  // ... more events
]
```

---

## 3. Insert Events Data into the Database

1. **Ensure the output file exists**
   - Confirm that `db/output/events.json` is present and contains the expected data.
2. **Run the insertion script**
   - Use pnpm and tsx to run the script:
     ```sh
     pnpm tsx db/script/create-events-with-relations.ts
     ```
   - This script will:
     - Insert event records into the `events` table.
     - Create bridging records in `event_category_events` and `event_domain_events` tables for category and domain relations.
   - If the script throws an error about missing data, return to step 2 and ensure the output is correct.

---

## Troubleshooting & Notes

- **Missing Master Data:**
  - If any referenced country, category, or domain is missing from the master data, the process should stop and summarize what is missing. Update the master data as needed before retrying.
- **No Global Installs:**
  - Always use `pnpm` and `npx` for any package or CLI usage. Do not install npm packages globally.
- **No Extra Scripts:**
  - Do not create additional scripts for this workflow. Use only the provided scripts and manual steps.
- **Schema Reference:**
  - See [`db/schema.ts`](../db/schema.ts) for the full schema definition.
- **Prompt Reference:**
  - See [`db/prompt/create-events.md`](../db/prompt/create-events.md) for the full data generation instructions.

---

For further questions, contact the project maintainer or check the repository documentation.
