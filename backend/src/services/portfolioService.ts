import prisma from '../lib/database';
import type {
  PortfolioData,
  Experience,
  Certification,
  SocialUrls,
  Education,
  ContentType,
} from '@shared/types';

export class PortfolioService {
  // GET - Get complete portfolio data
  async getPortfolioData(): Promise<PortfolioData | null> {
    try {
      const profile = await prisma.profile.findFirst({
        include: {
          socialUrls: true,
          education: true,
          experiences: { orderBy: { startDate: 'desc' } },
          skillsAndCerts: { include: { salesforceExpertise: true } },
          likeToBuild: true,
        },
      });
      if (!profile) return null;

      const portfolioData: PortfolioData = {
        content: {
          context: profile.context,
          type: profile.type,
          name: profile.name,
          whatIdo: profile.whatIdo,
          additionalName: profile.additionalName,
          url: profile.url,
          gender: profile.gender,
          nationality: profile.nationality,
          birthDate: profile.birthDate,
          birthPlace: profile.birthPlace,
          workLocation: profile.workLocation,
          country: profile.country,
          image: profile.image,
          currentCompanyName: profile.currentCompanyName,
          currentCompanyUrl: profile.currentCompanyUrl,
          title: profile.title,
          jobTitle: profile.jobTitle,
          socialUrls: profile.socialUrls
            ? {
                instagram: profile.socialUrls.instagram,
                twitter: profile.socialUrls.twitter,
                linkedin: profile.socialUrls.linkedin,
                mail: profile.socialUrls.mail,
                github: profile.socialUrls.github,
                spotify: profile.socialUrls.spotify,
              }
            : ({} as SocialUrls),
          education: profile.education
            ? {
                institution: profile.education.institution,
                universityUrl: profile.education.universityUrl,
                degree: profile.education.degree,
                location: profile.education.location,
                period: profile.education.period,
                details: profile.education.details,
              }
            : ({} as Education),
        },
        experiences: profile.experiences.map((exp: any) => ({
          jobTitle: exp.jobTitle,
          currentCompanyName: exp.currentCompanyName,
          currentCompanyUrl: exp.currentCompanyUrl,
          startDate: exp.startDate,
          leaveDate: exp.leaveDate,
          summary: exp.summary,
          skills: exp.skills,
        })),
        likeToBuild: profile.likeToBuild?.map((item) => item.item) || [],
        skillsAndCerts: profile.skillsAndCerts
          ? {
              salesforceExpertise: profile.skillsAndCerts.salesforceExpertise.map(
                (cert: any) => ({
                  title: cert.title,
                  image: cert.image,
                  alt: cert.alt,
                  issued: cert.issued,
                  pdfLink: cert.pdfLink,
                })
              ),
              frontEnd: profile.skillsAndCerts.frontEnd,
              backEnd: profile.skillsAndCerts.backEnd,
              databases: profile.skillsAndCerts.databases,
              devOpsTools: profile.skillsAndCerts.devOpsTools,
              cloudInfrastructure: profile.skillsAndCerts.cloudInfrastructure,
              softwarePractices: profile.skillsAndCerts.softwarePractices,
              languages: profile.skillsAndCerts.languages,
            }
          : ({} as any),
      };
      return portfolioData;
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      throw new Error('Failed to fetch portfolio data');
    }
  }

  async getPortfolioContent(): Promise<ContentType | null> {
    try {
      const profile = await prisma.profile.findFirst({
        include: {
          socialUrls: true,
          education: true,
        },
      });
      if (!profile) return null;

      const content: ContentType = {
        context: profile.context,
        type: profile.type,
        name: profile.name,
        whatIdo: profile.whatIdo,
        additionalName: profile.additionalName,
        url: profile.url,
        gender: profile.gender,
        nationality: profile.nationality,
        birthDate: profile.birthDate,
        birthPlace: profile.birthPlace,
        workLocation: profile.workLocation,
        country: profile.country,
        image: profile.image,
        currentCompanyName: profile.currentCompanyName,
        currentCompanyUrl: profile.currentCompanyUrl,
        title: profile.title,
        jobTitle: profile.jobTitle,
        socialUrls: profile.socialUrls
          ? {
              instagram: profile.socialUrls.instagram,
              twitter: profile.socialUrls.twitter,
              linkedin: profile.socialUrls.linkedin,
              mail: profile.socialUrls.mail,
              github: profile.socialUrls.github,
              spotify: profile.socialUrls.spotify,
            }
          : ({} as SocialUrls),
        education: profile.education
          ? {
              institution: profile.education.institution,
              universityUrl: profile.education.universityUrl,
              degree: profile.education.degree,
              location: profile.education.location,
              period: profile.education.period,
              details: profile.education.details,
            }
          : ({} as Education),
      };

      return content;
    } catch (error) {
      console.error('Error fetching portfolio content:', error);
      throw new Error('Failed to fetch portfolio content');
    }
  }

  // GET Only Experiences Field
  async getExperiences() {
    try {
      const profile = await prisma.profile.findFirst({
        include: { experiences: { orderBy: { startDate: 'desc' } } },
      });
      return profile?.experiences || null;
    } catch (error) {
      console.error('Error fetching experiences:', error);
      throw error;
    }
  }

  // GET Only SkillsAndCerts Field
  async getSkillsAndCerts() {
    try {
      const profile = await prisma.profile.findFirst({
        include: { skillsAndCerts: { include: { salesforceExpertise: true } } },
      });
      return profile?.skillsAndCerts || null;
    } catch (error) {
      console.error('Error fetching skills and certs:', error);
      throw error;
    }
  }

  // GET Only Education Field
  async getEducation() {
    try {
      const profile = await prisma.profile.findFirst({
        include: { education: true },
      });
      return profile?.education || null;
    } catch (error) {
      console.error('Error fetching education:', error);
      throw error;
    }
  }

  // GET Only LikeToBuild Field
  async getLikeToBuild() {
    try {
      const profile = await prisma.profile.findFirst({
        include: { likeToBuild: true }
      });
      return profile?.likeToBuild?.map(item => item.item) || [];
    } catch (error) {
      console.error('Error fetching likeToBuild:', error);
      throw error;
    }
  }

  // UPSERT (create or update) complete portfolio data (PUT)
  async upsertPortfolioData(data: PortfolioData): Promise<PortfolioData | null> {
    try {
      let profile = await prisma.profile.findFirst();
      if (!data.content) throw new Error('No content provided for upsert!');

      // PROFILE CREATE
      if (!profile) {
        profile = await prisma.profile.create({
          data: {
            ...data.content,
            socialUrls: { create: data.content.socialUrls },
            education: { create: data.content.education },
          },
        });
      } else {
        // Only send primitive fields to profile.update (nested relations separately)
        const { socialUrls, education, ...profileFields } = data.content;

        await prisma.profile.update({
          where: { id: profile.id },
          data: { ...profileFields },
        });

        // SOCIAL URLS UPSERT
        if (data.content.socialUrls) {
          await prisma.socialUrls.upsert({
            where: { profileId: profile.id },
            update: data.content.socialUrls,
            create: { ...data.content.socialUrls, profileId: profile.id },
          });
        }

        // EDUCATION UPSERT
        if (data.content.education) {
          await prisma.education.upsert({
            where: { profileId: profile.id },
            update: data.content.education,
            create: { ...data.content.education, profileId: profile.id },
          });
        }
      }

      // EXPERIENCES (clear & re-create)
      await prisma.experience.deleteMany({ where: { profileId: profile.id } });
      if (data.experiences?.length) {
        await prisma.experience.createMany({
          data: data.experiences.map((exp: Experience) => ({
            ...exp,
            profileId: profile.id,
          })),
        });
      }

      // LIKE TO BUILD (clear & re-create)
      await prisma.likeToBuild.deleteMany({ where: { profileId: profile.id } });
      if (data.likeToBuild?.length) {
        await prisma.likeToBuild.createMany({
          data: data.likeToBuild.map((item: string) => ({
            item,
            profileId: profile.id,
          })),
        });
      }

      // SKILLS & CERTS (exclude certifications here)
      const { salesforceExpertise, ...otherSkillsAndCerts } =
        data.skillsAndCerts || {};
      const prismaSkillsAndCertsData = {
        ...otherSkillsAndCerts,
      };

      const skillsAndCerts = await prisma.skillsAndCerts.upsert({
        where: { profileId: profile.id },
        update: prismaSkillsAndCertsData,
        create: {
          ...prismaSkillsAndCertsData,
          profileId: profile.id,
        },
      });

      // CERTIFICATIONS (clear & re-create)
      await prisma.certification.deleteMany({
        where: { skillsAndCertsId: skillsAndCerts.id },
      });
      if (salesforceExpertise?.length) {
        await prisma.certification.createMany({
          data: salesforceExpertise.map((cert: Certification) => ({
            ...cert,
            skillsAndCertsId: skillsAndCerts.id,
          })),
        });
      }

      return await this.getPortfolioData();
    } catch (error) {
      console.error('Error upserting portfolio data:', error);
      throw new Error('Failed to upsert portfolio data');
    }
  }

  // PATCH (partial update)
  async patchPortfolioData(
    partial: Partial<PortfolioData>
  ): Promise<PortfolioData | null> {
    const profile = await prisma.profile.findFirst();
    if (!profile) throw new Error('No profile to patch!');

    if (!partial.content) {
      throw new Error('No content provided for patch!');
    }

    // Destructure nested relations from content
    const { socialUrls, education, ...fields } = partial.content;

    // Update main profile primitive fields only
    if (Object.keys(fields).length > 0) {
      await prisma.profile.update({
        where: { id: profile.id },
        data: fields,
      });
    }

    // Update socialUrls if provided
    if (socialUrls) {
      await prisma.socialUrls.update({
        where: { profileId: profile.id },
        data: socialUrls,
      });
    }

    // Update education if provided
    if (education) {
      await prisma.education.update({
        where: { profileId: profile.id },
        data: education,
      });
    }

    // Update likeToBuild if provided
    if (partial.likeToBuild) {
      await prisma.likeToBuild.deleteMany({ where: { profileId: profile.id } });
      await prisma.likeToBuild.createMany({
        data: partial.likeToBuild.map((item: string) => ({
          item,
          profileId: profile.id,
        })),
      });
    }

    return await this.getPortfolioData();
  }

  // DELETE - All profile data (useful for admin panel or tests)
  async deletePortfolio(): Promise<void> {
    await prisma.profile.deleteMany();
  }
}
