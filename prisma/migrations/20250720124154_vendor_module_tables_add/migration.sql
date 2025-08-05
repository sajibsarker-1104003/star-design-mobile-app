-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "address" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "machineId" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "shopUrl" TEXT,
ADD COLUMN     "vendorAccountInfoId" INTEGER,
ADD COLUMN     "vendorDocumentId" INTEGER,
ADD COLUMN     "vendorMembershipPlanId" INTEGER,
ADD COLUMN     "vendorStoreId" INTEGER,
ALTER COLUMN "licenseNo" DROP NOT NULL,
ALTER COLUMN "dateOfBirth" DROP NOT NULL;

-- CreateTable
CREATE TABLE "VendorMembershipPlan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "productNumber" INTEGER,
    "price" DOUBLE PRECISION,
    "featureProductList" BOOLEAN NOT NULL DEFAULT false,
    "specialOffer" BOOLEAN NOT NULL DEFAULT false,
    "popularVendor" BOOLEAN NOT NULL DEFAULT false,
    "featuredVendor" BOOLEAN NOT NULL DEFAULT false,
    "productAdvertisement" BOOLEAN NOT NULL DEFAULT false,
    "customerProductBlog" BOOLEAN NOT NULL DEFAULT false,
    "support" TEXT,
    "socialMediaProperty" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VendorMembershipPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VendorStoreCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VendorStoreCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VendorStore" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "storeCategoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VendorStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VendorAccountInfo" (
    "id" SERIAL NOT NULL,
    "paypalEmail" TEXT NOT NULL,
    "bankAccountName" TEXT NOT NULL,
    "bankAccountType" TEXT NOT NULL,
    "bankAccountNumber" TEXT NOT NULL,
    "bankAccountRoutingNumber" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "bankAddress" TEXT NOT NULL,
    "bankIBAN" TEXT NOT NULL,
    "bankSwiftCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VendorAccountInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VendorDocuments" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VendorDocuments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProofOfAddressDocument" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "vendorDocumentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProofOfAddressDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NationalIdDocument" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "vendorDocumentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NationalIdDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VendorMembershipPlan_name_key" ON "VendorMembershipPlan"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VendorStoreCategory_name_key" ON "VendorStoreCategory"("name");

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_vendorMembershipPlanId_fkey" FOREIGN KEY ("vendorMembershipPlanId") REFERENCES "VendorMembershipPlan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_vendorStoreId_fkey" FOREIGN KEY ("vendorStoreId") REFERENCES "VendorStore"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_vendorAccountInfoId_fkey" FOREIGN KEY ("vendorAccountInfoId") REFERENCES "VendorAccountInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_vendorDocumentId_fkey" FOREIGN KEY ("vendorDocumentId") REFERENCES "VendorDocuments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VendorStore" ADD CONSTRAINT "VendorStore_storeCategoryId_fkey" FOREIGN KEY ("storeCategoryId") REFERENCES "VendorStoreCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProofOfAddressDocument" ADD CONSTRAINT "ProofOfAddressDocument_vendorDocumentId_fkey" FOREIGN KEY ("vendorDocumentId") REFERENCES "VendorDocuments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NationalIdDocument" ADD CONSTRAINT "NationalIdDocument_vendorDocumentId_fkey" FOREIGN KEY ("vendorDocumentId") REFERENCES "VendorDocuments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
