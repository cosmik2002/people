/*
PostgreSQL Backup
Database: people/public
Backup Time: 2019-10-02 13:33:08
*/

DROP SEQUENCE IF EXISTS "public"."education_id_seq";
DROP SEQUENCE IF EXISTS "public"."people_id_seq";
DROP TABLE IF EXISTS "public"."cities";
DROP TABLE IF EXISTS "public"."education";
DROP TABLE IF EXISTS "public"."people";
CREATE SEQUENCE "education_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;
CREATE SEQUENCE "people_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE TABLE "cities" (
  "person_id" int4 NOT NULL,
  "city" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "cities" OWNER TO "postgres";
CREATE TABLE "education" (
  "education" varchar(255) COLLATE "pg_catalog"."default",
  "id" int2 NOT NULL DEFAULT nextval('education_id_seq'::regclass)
)
;
ALTER TABLE "education" OWNER TO "postgres";
CREATE TABLE "people" (
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "id" int4 NOT NULL DEFAULT nextval('people_id_seq'::regclass),
  "education_id" int2
)
;
ALTER TABLE "people" OWNER TO "postgres";
BEGIN;
LOCK TABLE "public"."cities" IN SHARE MODE;
DELETE FROM "public"."cities";
INSERT INTO "public"."cities" ("person_id","city") VALUES (1, 'Москва'),(1, 'Долгопрудный'),(1, 'Чехов'),(2, 'Васюки');
COMMIT;
BEGIN;
LOCK TABLE "public"."education" IN SHARE MODE;
DELETE FROM "public"."education";
INSERT INTO "public"."education" ("education","id") VALUES ('Среднее', 1),('Высшее', 2),('Бакалавр', 3),('Магистр', 4);
COMMIT;
BEGIN;
LOCK TABLE "public"."people" IN SHARE MODE;
DELETE FROM "public"."people";
INSERT INTO "public"."people" ("name","id","education_id") VALUES ('Рачек Николай', 1, 2),('Василий Пупкин', 2, 1);
COMMIT;
ALTER TABLE "cities" ADD CONSTRAINT "cities_pkey" PRIMARY KEY ("person_id", "city");
ALTER TABLE "education" ADD CONSTRAINT "education_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE "education_id_seq"
OWNED BY "education"."id";
SELECT setval('"education_id_seq"', 5, true);
ALTER SEQUENCE "education_id_seq" OWNER TO "postgres";
ALTER SEQUENCE "people_id_seq"
OWNED BY "people"."id";
SELECT setval('"people_id_seq"', 3, true);
ALTER SEQUENCE "people_id_seq" OWNER TO "postgres";
