-- CreateTable
CREATE TABLE `category` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `img_url` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `category_name_key`(`name`),
    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategory` (
    `subcategory_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `img_url` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `category_id` INTEGER NOT NULL,

    UNIQUE INDEX `subcategory_name_category_id_key`(`name`, `category_id`),
    PRIMARY KEY (`subcategory_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `product_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `price` DOUBLE NOT NULL,
    `img_url` VARCHAR(191) NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `category_id` INTEGER NULL,
    `subcategory_id` INTEGER NULL,

    UNIQUE INDEX `product_name_key`(`name`),
    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `subcategory_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_subcategory_id_fkey` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory`(`subcategory_id`) ON DELETE SET NULL ON UPDATE CASCADE;
