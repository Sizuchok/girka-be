CREATE TYPE "public"."accommodation-type" AS ENUM('Cabin', 'Room');--> statement-breakpoint
CREATE TABLE "accommodations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	"title" varchar(100) NOT NULL,
	"type" "accommodation-type" NOT NULL,
	"capacity" smallint NOT NULL,
	"price" integer NOT NULL,
	"rating" real,
	"description" text NOT NULL,
	"photos" varchar[] NOT NULL,
	CONSTRAINT "min_title_length" CHECK (char_length("accommodations"."title") >= 3),
	CONSTRAINT "capacity_positive" CHECK ("accommodations"."capacity" > 1 AND "accommodations"."capacity" <= 100),
	CONSTRAINT "price_positive" CHECK ("accommodations"."price" > 0),
	CONSTRAINT "rating_valid" CHECK ("accommodations"."rating" IS NULL OR ("accommodations"."rating" >= 0 AND "accommodations"."rating" <= 5))
);
