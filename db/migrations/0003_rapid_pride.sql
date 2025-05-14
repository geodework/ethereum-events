CREATE TABLE "continents" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "continents" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE POLICY "policy" ON "continents" AS PERMISSIVE FOR SELECT TO public USING (true);