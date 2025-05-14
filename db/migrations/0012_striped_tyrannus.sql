ALTER TABLE "countries" ALTER COLUMN "name" SET DATA TYPE varchar(80);--> statement-breakpoint
ALTER TABLE "countries" ADD COLUMN "country_code" varchar(2) NOT NULL;--> statement-breakpoint
ALTER TABLE "countries" ADD CONSTRAINT "countries_country_code_unique" UNIQUE("country_code");