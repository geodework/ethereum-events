CREATE TABLE "event_domains" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "event_domains" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE POLICY "policy" ON "event_domains" AS PERMISSIVE FOR SELECT TO public USING (true);