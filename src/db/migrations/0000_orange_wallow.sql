CREATE TYPE "public"."accommodation-type" AS ENUM('cabin', 'room');--> statement-breakpoint

CREATE TABLE "cottages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"createdAt" timestamp with time zone,
	"updatedAt" timestamp with time zone,
	"title" varchar NOT NULL,
	"type" "accommodation-type" NOT NULL,
	"capacity" smallint NOT NULL,
	"price" smallint NOT NULL,
	"rating" real,
	"description" text NOT NULL,
	"photos" varchar[] NOT NULL
);
