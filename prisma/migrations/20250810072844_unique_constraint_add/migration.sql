/*
  Warnings:

  - A unique constraint covering the columns `[name,category_id,subcategory_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_subcategory_id_fkey`;

-- DropIndex
DROP INDEX `product_name_key` ON `product`;

-- CreateIndex
CREATE UNIQUE INDEX `product_name_category_id_subcategory_id_key` ON `product`(`name`, `category_id`, `subcategory_id`);

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_subcategory_id_fkey` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory`(`subcategory_id`) ON DELETE SET NULL ON UPDATE CASCADE;
