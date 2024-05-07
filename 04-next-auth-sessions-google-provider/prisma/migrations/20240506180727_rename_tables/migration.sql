/*
  Warnings:

  - You are about to drop the `Property` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertyImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertyLocation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertyRate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertySellerInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PropertyImage" DROP CONSTRAINT "PropertyImage_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyLocation" DROP CONSTRAINT "PropertyLocation_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyRate" DROP CONSTRAINT "PropertyRate_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "PropertySellerInfo" DROP CONSTRAINT "PropertySellerInfo_propertyId_fkey";

-- DropTable
DROP TABLE "Property";

-- DropTable
DROP TABLE "PropertyImage";

-- DropTable
DROP TABLE "PropertyLocation";

-- DropTable
DROP TABLE "PropertyRate";

-- DropTable
DROP TABLE "PropertySellerInfo";

-- CreateTable
CREATE TABLE "properties" (
    "id" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "beds" INTEGER NOT NULL,
    "baths" INTEGER NOT NULL,
    "squareFeet" DOUBLE PRECISION NOT NULL,
    "amenities" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "properties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "propertyLocations" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "propertyLocations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "propertyRates" (
    "id" TEXT NOT NULL,
    "weekly" DOUBLE PRECISION,
    "monthly" DOUBLE PRECISION,
    "nightly" DOUBLE PRECISION,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "propertyRates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "propertySellerInfos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "propertySellerInfos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "propertyImages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "propertyImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "propertyLocations_propertyId_key" ON "propertyLocations"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "propertyRates_propertyId_key" ON "propertyRates"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "propertySellerInfos_propertyId_key" ON "propertySellerInfos"("propertyId");

-- AddForeignKey
ALTER TABLE "propertyLocations" ADD CONSTRAINT "propertyLocations_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "propertyRates" ADD CONSTRAINT "propertyRates_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "propertySellerInfos" ADD CONSTRAINT "propertySellerInfos_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "propertyImages" ADD CONSTRAINT "propertyImages_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
