export interface SocialUrls {
  instagram: string;
  twitter: string;
  linkedin: string;
  mail: string;
  github: string;
  spotify: string;
}

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

export interface PortfolioData {
  content: ProfileContent;
  experiences: Experience[];
  likeToBuild: string[];
  skillsAndCerts: SkillsAndCerts;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}