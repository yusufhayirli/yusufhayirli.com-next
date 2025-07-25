-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "context" TEXT NOT NULL DEFAULT 'https://schema.org',
    "type" TEXT NOT NULL DEFAULT 'Person',
    "name" TEXT NOT NULL,
    "whatIdo" TEXT NOT NULL,
    "additionalName" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "birthPlace" TEXT NOT NULL,
    "workLocation" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "currentCompanyName" TEXT NOT NULL,
    "currentCompanyUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "social_urls" (
    "id" SERIAL NOT NULL,
    "instagram" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "spotify" TEXT NOT NULL,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "social_urls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education" (
    "id" SERIAL NOT NULL,
    "institution" TEXT NOT NULL,
    "universityUrl" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "details" TEXT[],
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiences" (
    "id" SERIAL NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "currentCompanyName" TEXT NOT NULL,
    "currentCompanyUrl" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "leaveDate" TEXT NOT NULL,
    "summary" TEXT[],
    "skills" TEXT[],
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills_and_certs" (
    "id" SERIAL NOT NULL,
    "frontEnd" TEXT[],
    "backEnd" TEXT[],
    "databases" TEXT[],
    "devOpsTools" TEXT[],
    "cloudInfrastructure" TEXT[],
    "softwarePractices" TEXT[],
    "languages" TEXT[],
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "skills_and_certs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certifications" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "issued" TEXT NOT NULL,
    "pdfLink" TEXT NOT NULL,
    "skillsAndCertsId" INTEGER NOT NULL,

    CONSTRAINT "certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "like_to_build" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "like_to_build_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "social_urls_profileId_key" ON "social_urls"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "education_profileId_key" ON "education"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "skills_and_certs_profileId_key" ON "skills_and_certs"("profileId");

-- AddForeignKey
ALTER TABLE "social_urls" ADD CONSTRAINT "social_urls_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education" ADD CONSTRAINT "education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experiences" ADD CONSTRAINT "experiences_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills_and_certs" ADD CONSTRAINT "skills_and_certs_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certifications" ADD CONSTRAINT "certifications_skillsAndCertsId_fkey" FOREIGN KEY ("skillsAndCertsId") REFERENCES "skills_and_certs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like_to_build" ADD CONSTRAINT "like_to_build_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
