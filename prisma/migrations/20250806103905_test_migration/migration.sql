/*
  Warnings:

  - Made the column `type` on table `menu` required. This step will fail if there are existing NULL values in that column.
  - Made the column `activity` on table `menu` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `menu` MODIFY `type` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `activity` BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE `sub_menu` (
    `sub_menu_id` INTEGER NOT NULL AUTO_INCREMENT,
    `sub_menu` VARCHAR(191) NULL,
    `menu_id` INTEGER NOT NULL,
    `menu_name` VARCHAR(191) NULL,
    `meta_desc` VARCHAR(191) NULL,
    `meta_key` VARCHAR(191) NULL,
    `page_cn` VARCHAR(191) NULL,
    `img1` VARCHAR(191) NULL,
    `img2` VARCHAR(191) NULL,
    `activity` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`sub_menu_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sub_menu` ADD CONSTRAINT `sub_menu_menu_id_fkey` FOREIGN KEY (`menu_id`) REFERENCES `menu`(`menu_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
