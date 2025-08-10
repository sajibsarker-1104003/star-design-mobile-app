-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_subcategory_id_fkey`;

-- DropForeignKey
ALTER TABLE `subcategory` DROP FOREIGN KEY `subcategory_category_id_fkey`;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `subcategory_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_subcategory_id_fkey` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory`(`subcategory_id`) ON DELETE CASCADE ON UPDATE CASCADE;
