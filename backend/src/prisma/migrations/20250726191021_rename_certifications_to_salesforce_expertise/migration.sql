/*
  Warnings:

  - You are about to drop the `certifications` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "certifications" DROP CONSTRAINT "certifications_skillsAndCertsId_fkey";

-- DropTable
DROP TABLE "certifications";

-- CreateTable
CREATE TABLE "salesforceExpertise" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "issued" TEXT NOT NULL,
    "pdfLink" TEXT NOT NULL,
    "skillsAndCertsId" INTEGER NOT NULL,

    CONSTRAINT "salesforceExpertise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "salesforceExpertise" ADD CONSTRAINT "salesforceExpertise_skillsAndCertsId_fkey" FOREIGN KEY ("skillsAndCertsId") REFERENCES "skills_and_certs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
