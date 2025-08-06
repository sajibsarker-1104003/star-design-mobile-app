-- CreateTable
CREATE TABLE `menu` (
    `menu_id` INTEGER NOT NULL AUTO_INCREMENT,
    `menu_name` VARCHAR(191) NULL,
    `meta_desc` VARCHAR(191) NULL,
    `meta_key` VARCHAR(191) NULL,
    `page_cn` VARCHAR(191) NULL,
    `img1` VARCHAR(191) NULL,
    `img2` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `activity` VARCHAR(191) NULL,

    UNIQUE INDEX `menu_menu_name_key`(`menu_name`),
    PRIMARY KEY (`menu_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
