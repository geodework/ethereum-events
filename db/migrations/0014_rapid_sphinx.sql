ALTER TABLE "events" RENAME COLUMN "city_id" TO "country_id";--> statement-breakpoint
ALTER TABLE "events" DROP CONSTRAINT "events_city_id_cities_id_fk";
--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_country_id_countries_id_fk" FOREIGN KEY ("country_id") REFERENCES "public"."countries"("id") ON DELETE no action ON UPDATE no action;