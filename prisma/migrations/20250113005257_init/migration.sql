-- CreateTable
CREATE TABLE `StaffInvitation` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `roleId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `StaffInvitation_email_key`(`email`),
    UNIQUE INDEX `StaffInvitation_token_key`(`token`),
    INDEX `StaffInvitation_roleId_idx`(`roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StaffInvitation` ADD CONSTRAINT `StaffInvitation_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
