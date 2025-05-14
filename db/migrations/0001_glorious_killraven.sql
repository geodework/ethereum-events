CREATE TABLE "event_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "event_categories" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE POLICY "policy" ON "event_categories" AS PERMISSIVE FOR SELECT TO public USING (true);