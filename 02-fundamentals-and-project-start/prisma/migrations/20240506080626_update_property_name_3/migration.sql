-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PropertyRate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "weekly" REAL,
    "monthly" REAL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertyRate_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_PropertyRate" ("id", "monthly", "propertyId", "weekly") SELECT "id", "monthly", "propertyId", "weekly" FROM "PropertyRate";
DROP TABLE "PropertyRate";
ALTER TABLE "new_PropertyRate" RENAME TO "PropertyRate";
CREATE UNIQUE INDEX "PropertyRate_propertyId_key" ON "PropertyRate"("propertyId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
