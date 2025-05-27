## Create Events

### Prompt

## For Events

- Retrieve only 5 rows in Events DB by ascending order of startDateTime in Notion through notionGeodeworkApi in MCP settings.
- Generate the payload for the events table that meets the schema definition written in @schema.ts
- Use the following API to fetch country data:

  API Endpoint: {NEXT_PUBLIC_SUPABASE_URL}/rest/v1/countries
  API Key: {NEXT_PUBLIC_SUPABASE_ANON_KEY}

  Sample curl:
  curl -H "apikey: <API_KEY>" "<API_ENDPOINT>"

### For EventCategories

- Extract Category from each event row, and put the data in format as number[] in each event row.
- Use the following API to fetch country data:

  API Endpoint: {NEXT_PUBLIC_SUPABASE_URL}/rest/v1/event_categories
  API Key: {NEXT_PUBLIC_SUPABASE_ANON_KEY}

  Sample curl:
  curl -H "apikey: <API_KEY>" "<API_ENDPOINT>"

### For EventDomains

- Extract Domain from each event row, and put the data in format as number[] in each event row.
- Use the following API to fetch country data:

  API Endpoint: {NEXT_PUBLIC_SUPABASE_URL}/rest/v1/event_domains
  API Key: {NEXT_PUBLIC_SUPABASE_ANON_KEY}

  Sample curl:
  curl -H "apikey: <API_KEY>" "<API_ENDPOINT>"

### For EventCategories and EventDomains

- Put the payload in events.json file under db/output directory
- If the master data do not exist in each API response, summarise the what's missing in the prompt so that we can stop the process and fix it.

### Other

- Omit createdAt and updatedAt in the payload.
- Call API with curl cmd.
- Don't try to install any package.
- Don't create any script file.
- You don't have to fetch the data from the API when the data is already in the output directory except events.json file.
- Iterate the process utilizing the start_cursor parameter in the MCP to fetch the data in small chunks at each iteration.
