/*
  Warnings:

  - A unique constraint covering the columns `[title_one]` on the table `slideImage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `slideImage_title_one_key` ON `slideImage`(`title_one`);
