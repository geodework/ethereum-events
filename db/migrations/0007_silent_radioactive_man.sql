CREATE TABLE "event_category_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" integer NOT NULL,
	"category_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "event_category_events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "event_category_events" ADD CONSTRAINT "event_category_events_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_category_events" ADD CONSTRAINT "event_category_events_category_id_event_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."event_categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE POLICY "policy" ON "event_category_events" AS PERMISSIVE FOR SELECT TO public USING (true);