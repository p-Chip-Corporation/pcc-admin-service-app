/*
  Warnings:

  - A unique constraint covering the columns `[localAccountId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "localAccountId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_localAccountId_key" ON "User"("localAccountId");
