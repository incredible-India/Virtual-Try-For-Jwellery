-- CreateTable
CREATE TABLE "Jewellery" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "isVirtualEnable" BOOLEAN NOT NULL,
    "discount" TEXT NOT NULL,

    CONSTRAINT "Jewellery_pkey" PRIMARY KEY ("id")
);
