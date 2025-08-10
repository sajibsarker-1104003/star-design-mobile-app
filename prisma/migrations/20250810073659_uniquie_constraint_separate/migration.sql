/*
  Warnings:

  - A unique constraint covering the columns `[name,category_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,subcategory_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `product_name_category_id_subcategory_id_key` ON `product`;

-- CreateIndex
CREATE UNIQUE INDEX `product_name_category_id_key` ON `product`(`name`, `category_id`);

-- CreateIndex
CREATE UNIQUE INDEX `product_name_subcategory_id_key` ON `product`(`name`, `subcategory_id`);
