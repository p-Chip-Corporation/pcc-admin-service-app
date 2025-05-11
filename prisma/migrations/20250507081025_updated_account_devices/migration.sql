-- CreateIndex
CREATE INDEX "AccountDevices_accountId_idx" ON "AccountDevices"("accountId");

-- CreateIndex
CREATE INDEX "AccountDevices_deviceId_idx" ON "AccountDevices"("deviceId");

-- CreateIndex
CREATE INDEX "AccountDevices_createdById_idx" ON "AccountDevices"("createdById");

-- AddForeignKey
ALTER TABLE "AccountDevices" ADD CONSTRAINT "AccountDevices_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
