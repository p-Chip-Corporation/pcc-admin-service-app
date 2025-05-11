-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_createdById_fkey";

-- DropForeignKey
ALTER TABLE "AccountActivation" DROP CONSTRAINT "AccountActivation_accountId_fkey";

-- DropForeignKey
ALTER TABLE "AccountActivation" DROP CONSTRAINT "AccountActivation_createdById_fkey";

-- DropForeignKey
ALTER TABLE "AccountDevices" DROP CONSTRAINT "AccountDevices_accountId_fkey";

-- DropForeignKey
ALTER TABLE "AccountDevices" DROP CONSTRAINT "AccountDevices_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_createdById_fkey";

-- DropForeignKey
ALTER TABLE "UserPermission" DROP CONSTRAINT "UserPermission_createdById_fkey";

-- DropForeignKey
ALTER TABLE "UserPermission" DROP CONSTRAINT "UserPermission_userId_fkey";

-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "activationLink" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountActivation" ADD CONSTRAINT "AccountActivation_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountActivation" ADD CONSTRAINT "AccountActivation_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountDevices" ADD CONSTRAINT "AccountDevices_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountDevices" ADD CONSTRAINT "AccountDevices_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE CASCADE ON UPDATE CASCADE;
