CREATE TABLE "event_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "event_types" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE POLICY "policy" ON "event_types" AS PERMISSIVE FOR SELECT TO "anon", "authenticated" USING (true);