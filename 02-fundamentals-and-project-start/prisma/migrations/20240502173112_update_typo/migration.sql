/*
  Warnings:

  - You are about to drop the column `montly` on the `PropertyRate` table. All the data in the column will be lost.
  - Added the required column `monthly` to the `PropertyRate` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PropertyRate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "weekly" REAL NOT NULL,
    "monthly" REAL NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertyRate_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PropertyRate" ("id", "propertyId", "weekly") SELECT "id", "propertyId", "weekly" FROM "PropertyRate";
DROP TABLE "PropertyRate";
ALTER TABLE "new_PropertyRate" RENAME TO "PropertyRate";
CREATE UNIQUE INDEX "PropertyRate_propertyId_key" ON "PropertyRate"("propertyId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
