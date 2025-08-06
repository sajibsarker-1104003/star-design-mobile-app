-- CreateTable
CREATE TABLE `slideImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_one` VARCHAR(191) NOT NULL,
    `title_two` VARCHAR(191) NULL,
    `img1` VARCHAR(191) NULL,
    `img2` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,
    `time` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
