// backend/src/scripts/backupPortfolio.ts
import fs from 'fs';
import path from 'path';
import prisma from '../lib/database';

async function backupPortfolio() {
  try {
    // Get full profile data with relations
    const profile = await prisma.profile.findFirst({
      include: {
        socialUrls: true,
        education: true,
        experiences: true,
        skillsAndCerts: { include: { certifications: true } }
      }
    });
    if (!profile) throw new Error('No profile data found!');

    // Get likeToBuild items
    const likeToBuild = await prisma.likeToBuild.findMany({
      where: { profileId: profile.id },
      select: { item: true }
    });

    // Prepare backup object (PortfolioData shape)
    const backupData = {
      content: {
        ...profile,
        socialUrls: profile.socialUrls,
        education: profile.education
      },
      experiences: profile.experiences,
      likeToBuild: likeToBuild.map(l => l.item),
      skillsAndCerts: {
        ...profile.skillsAndCerts,
        salesforceExpertise: profile.skillsAndCerts?.certifications ?? [],
      }
    };

    // Write to root-level /backups/ (guaranteed to exist)
    const backupDir = path.resolve(process.cwd(), 'backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const filename = `portfolio_backup_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    const backupPath = path.join(backupDir, filename);

    fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2), 'utf-8');
    console.log(`Backup successful! Saved to: ${backupPath}`);
    process.exit(0);
  } catch (e) {
    console.error('Backup failed:', e);
    process.exit(1);
  }
}

backupPortfolio();
