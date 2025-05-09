CREATE TABLE "countries" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"continent_id" integer
);
--> statement-breakpoint
ALTER TABLE "countries" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "countries" ADD CONSTRAINT "countries_continent_id_continents_id_fk" FOREIGN KEY ("continent_id") REFERENCES "public"."continents"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE POLICY "policy" ON "countries" AS PERMISSIVE FOR SELECT TO public USING (true);