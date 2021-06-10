CREATE TABLE "nativemobile$record" (
	"id" BIGINT NOT NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"superentity_id", 
"remote", 
"remote_primary_key")
 VALUES ('52ea2335-c524-4b7d-af36-b808869e7835', 
'NativeMobile.Record', 
'nativemobile$record', 
'170ce49d-f29c-4fac-99a6-b55e8a3aeb39', 
false, 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20210127 15:03:56';
