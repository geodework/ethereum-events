ALTER TABLE "events" RENAME COLUMN "start_date" TO "start_date_time";--> statement-breakpoint
ALTER TABLE "events" RENAME COLUMN "end_date" TO "end_date_time";--> statement-breakpoint
ALTER TABLE "events" ADD COLUMN "has_timezone" boolean DEFAULT false NOT NULL;