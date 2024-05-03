-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "beds" INTEGER NOT NULL,
    "baths" INTEGER NOT NULL,
    "squareFeet" INTEGER NOT NULL,
    "images" TEXT NOT NULL,
    "amenities" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PropertyLocation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertyLocation_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PropertyRate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "weekly" REAL NOT NULL,
    "montly" REAL NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertyRate_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PropertySellerInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertySellerInfo_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PropertyImages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    CONSTRAINT "PropertyImages_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PropertyLocation_propertyId_key" ON "PropertyLocation"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyRate_propertyId_key" ON "PropertyRate"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "PropertySellerInfo_propertyId_key" ON "PropertySellerInfo"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyImages_propertyId_key" ON "PropertyImages"("propertyId");
