/*
  Warnings:

  - You are about to drop the column `images` on the `Property` table. All the data in the column will be lost.
  - You are about to alter the column `squareFeet` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Property" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "beds" INTEGER NOT NULL,
    "baths" INTEGER NOT NULL,
    "squareFeet" REAL NOT NULL,
    "amenities" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Property" ("amenities", "baths", "beds", "createdAt", "description", "id", "isFeatured", "name", "owner", "squareFeet", "type", "updatedAt") SELECT "amenities", "baths", "beds", "createdAt", "description", "id", "isFeatured", "name", "owner", "squareFeet", "type", "updatedAt" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
