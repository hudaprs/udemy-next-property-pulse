-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PropertyImages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertyImages_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PropertyImages" ("id", "name", "propertyId") SELECT "id", "name", "propertyId" FROM "PropertyImages";
DROP TABLE "PropertyImages";
ALTER TABLE "new_PropertyImages" RENAME TO "PropertyImages";
CREATE UNIQUE INDEX "PropertyImages_propertyId_key" ON "PropertyImages"("propertyId");
CREATE TABLE "new_PropertyLocation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertyLocation_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PropertyLocation" ("city", "id", "propertyId", "state", "street", "zipcode") SELECT "city", "id", "propertyId", "state", "street", "zipcode" FROM "PropertyLocation";
DROP TABLE "PropertyLocation";
ALTER TABLE "new_PropertyLocation" RENAME TO "PropertyLocation";
CREATE UNIQUE INDEX "PropertyLocation_propertyId_key" ON "PropertyLocation"("propertyId");
CREATE TABLE "new_PropertyRate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "weekly" REAL NOT NULL,
    "montly" REAL NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertyRate_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PropertyRate" ("id", "montly", "propertyId", "weekly") SELECT "id", "montly", "propertyId", "weekly" FROM "PropertyRate";
DROP TABLE "PropertyRate";
ALTER TABLE "new_PropertyRate" RENAME TO "PropertyRate";
CREATE UNIQUE INDEX "PropertyRate_propertyId_key" ON "PropertyRate"("propertyId");
CREATE TABLE "new_PropertySellerInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertySellerInfo_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PropertySellerInfo" ("email", "id", "name", "phone", "propertyId") SELECT "email", "id", "name", "phone", "propertyId" FROM "PropertySellerInfo";
DROP TABLE "PropertySellerInfo";
ALTER TABLE "new_PropertySellerInfo" RENAME TO "PropertySellerInfo";
CREATE UNIQUE INDEX "PropertySellerInfo_propertyId_key" ON "PropertySellerInfo"("propertyId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
