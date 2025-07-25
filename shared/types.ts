export type SocialUrls = {
  mail: string;
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  spotify: string;
  [key: string]: string;
};

export interface Education {
  institution: string;
  universityUrl: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

export interface Experience {
  jobTitle: string;
  currentCompanyName: string;
  currentCompanyUrl: string;
  startDate: string;
  leaveDate: string;
  summary: string[];
  skills: string[];
}

export interface Certification {
  title: string;
  image: string;
  alt: string;
  issued: string;
  pdfLink: string;
}

export interface SkillsAndCerts {
  salesforceExpertise: Certification[];
  frontEnd: string[];
  backEnd: string[];
  databases: string[];
  devOpsTools: string[];
  cloudInfrastructure: string[];
  softwarePractices: string[];
  languages: string[];
}

// Fit for Backend's ProfileContent
export interface ProfileContent {
  context: string;
  type: string;
  name: string;
  whatIdo: string;
  additionalName: string;
  url: string;
  gender: string;
  nationality: string;
  birthDate: string;
  birthPlace: string;
  workLocation: string;
  country: string;
  image: string;
  currentCompanyName: string;
  currentCompanyUrl: string;
  title: string;
  jobTitle: string;
  socialUrls: SocialUrls;
  education: Education;
}

export interface InfoState {
  content: ProfileContent;
  experiences: Experience[];
  likeToBuild: string[];
  skillsAndCerts: SkillsAndCerts;
}

// Both frontend & backend adapted
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PortfolioData {
  content: ProfileContent;
  experiences: Experience[];
  likeToBuild: string[];
  skillsAndCerts: SkillsAndCerts;
}

// Old types can settle here, remove after if not needed.
export interface ExperienceType extends Experience {}
export interface CertificateType extends Certification {}
export interface SkillAndCertsType extends SkillsAndCerts {}
export interface InfoProps {
  experiences: Experience[];
  skillsAndCerts: SkillsAndCerts;
}
export interface ContentBodyProps {
  info: InfoProps;
}
export interface Cert extends Certification {}
export type SkillsAndCertsProps = {
  skillsAndCerts: SkillsAndCerts;
};
