/*
  Warnings:

  - You are about to drop the `posts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `posts`;

-- CreateTable
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(255) NOT NULL,
    `title` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,

    INDEX `Post_authorId_fkey`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `uid` VARCHAR(191) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `displayName` VARCHAR(255) NOT NULL,
    `photoURL` TEXT NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`uid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
