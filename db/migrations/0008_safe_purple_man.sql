CREATE TABLE "event_domain_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" integer NOT NULL,
	"domain_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "event_domain_events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "event_domain_events" ADD CONSTRAINT "event_domain_events_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event_domain_events" ADD CONSTRAINT "event_domain_events_domain_id_event_domains_id_fk" FOREIGN KEY ("domain_id") REFERENCES "public"."event_domains"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE POLICY "policy" ON "event_domain_events" AS PERMISSIVE FOR SELECT TO public USING (true);