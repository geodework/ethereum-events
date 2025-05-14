ALTER TABLE "countries" ADD COLUMN "official_name" varchar(80) NOT NULL;--> statement-breakpoint
ALTER TABLE "countries" ADD CONSTRAINT "countries_official_name_unique" UNIQUE("official_name");