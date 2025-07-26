/*
  Warnings:

  - You are about to drop the `salesforce_expertise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "salesforce_expertise" DROP CONSTRAINT "salesforce_expertise_skillsAndCertsId_fkey";

-- DropTable
DROP TABLE "salesforce_expertise";

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
