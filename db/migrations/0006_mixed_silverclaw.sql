CREATE TYPE "public"."venue_type_enum" AS ENUM('in_person', 'virtual', 'hybrid');--> statement-breakpoint
CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"city_id" integer,
	"location" text,
	"venue_type" "venue_type_enum",
	"start_date" timestamp NOT NULL,
	"end_date" timestamp NOT NULL,
	"links" text[],
	"socials" text[],
	"contacts" text[],
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_city_id_cities_id_fk" FOREIGN KEY ("city_id") REFERENCES "public"."cities"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE POLICY "policy" ON "events" AS PERMISSIVE FOR SELECT TO public USING (true);