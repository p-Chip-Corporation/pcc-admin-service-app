/*
  Warnings:

  - You are about to drop the column `tranferType` on the `Transfer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[serial]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `publishTokenId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publishTokenId` to the `SmartLabel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publishTokenId` to the `Transfer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transferType` to the `Transfer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "pccCloudId" TEXT,
ADD COLUMN     "publicKey" TEXT;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "payload" JSONB,
ADD COLUMN     "publishTokenId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SmartLabel" ADD COLUMN     "publishTokenId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transfer" DROP COLUMN "tranferType",
ADD COLUMN     "publishTokenId" TEXT NOT NULL,
ADD COLUMN     "transferType" "TransferType" NOT NULL;

-- CreateTable
CREATE TABLE "PublishToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "isClaimed" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PublishToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_serial_key" ON "Item"("serial");

-- AddForeignKey
ALTER TABLE "PublishToken" ADD CONSTRAINT "PublishToken_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SmartLabel" ADD CONSTRAINT "SmartLabel_publishTokenId_fkey" FOREIGN KEY ("publishTokenId") REFERENCES "PublishToken"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_publishTokenId_fkey" FOREIGN KEY ("publishTokenId") REFERENCES "PublishToken"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transfer" ADD CONSTRAINT "Transfer_publishTokenId_fkey" FOREIGN KEY ("publishTokenId") REFERENCES "PublishToken"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
