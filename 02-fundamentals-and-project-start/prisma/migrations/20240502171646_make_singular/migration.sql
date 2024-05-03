/*
  Warnings:

  - You are about to drop the `PropertyImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PropertyImages";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PropertyImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertyImage_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PropertyImage_propertyId_key" ON "PropertyImage"("propertyId");
