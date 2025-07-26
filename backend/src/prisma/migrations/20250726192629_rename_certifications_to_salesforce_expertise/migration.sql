/*
  Warnings:

  - You are about to drop the `salesforceExpertise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "salesforceExpertise" DROP CONSTRAINT "salesforceExpertise_skillsAndCertsId_fkey";

-- DropTable
DROP TABLE "salesforceExpertise";

-- CreateTable
CREATE TABLE "salesforce_expertise" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "issued" TEXT NOT NULL,
    "pdfLink" TEXT NOT NULL,
    "skillsAndCertsId" INTEGER NOT NULL,

    CONSTRAINT "salesforce_expertise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "salesforce_expertise" ADD CONSTRAINT "salesforce_expertise_skillsAndCertsId_fkey" FOREIGN KEY ("skillsAndCertsId") REFERENCES "skills_and_certs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
