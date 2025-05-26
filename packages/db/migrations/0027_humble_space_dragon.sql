ALTER TABLE "mail0_connection" ADD COLUMN "imap_host" text;
ALTER TABLE "mail0_connection" ADD COLUMN "imap_port" integer;
ALTER TABLE "mail0_connection" ADD COLUMN "imap_secure" boolean;
ALTER TABLE "mail0_connection" ADD COLUMN "smtp_host" text;
ALTER TABLE "mail0_connection" ADD COLUMN "smtp_port" integer;
ALTER TABLE "mail0_connection" ADD COLUMN "smtp_secure" boolean;
ALTER TABLE "mail0_connection" ADD COLUMN "username" text;
ALTER TABLE "mail0_connection" ADD COLUMN "password" text;

