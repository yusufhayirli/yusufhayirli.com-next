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

export interface ContentType {
  context?: string;
  type?: string;
  name?: string;
  whatIdo?: string;
  additionalName?: string;
  url?: string;
  gender?: string;
  nationality?: string;
  birthDate?: string;
  birthPlace?: string;
  workLocation?: string;
  country?: string;
  image?: string;
  currentCompanyName?: string;
  currentCompanyUrl?: string;
  title?: string;
  jobTitle?: string;
  socialUrls?: SocialUrls;
  education?: Education;
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

// Old types for backward compatibility - can be removed later
export interface ExperienceType extends Experience {}
export interface CertificateType extends Certification {}
export interface SkillsAndCertsType extends SkillsAndCerts {}
export interface EducationType extends Education {}

export interface Cert extends Certification {}

export type SkillsAndCertsProps = {
  skillsAndCerts: SkillsAndCerts;
};

export interface InfoProps {
  content: ProfileContent;
  experiences: Experience[];
  likeToBuild: string[];
  skillsAndCerts: SkillsAndCerts;
}

export interface HeaderProps {
  info: ProfileContent;
  likeToBuild?: string[];
}

export interface HeaderInfoProps {
  content: {
    name: string;
    whatIdo: string;
    education: EducationInfo;
  };
}

export interface ContentBodyProps {
  experiences: Experience[];
  skills: SkillsAndCerts;
}

export interface EducationInfo {
  institution: string;
  universityUrl: string;
  degree: string;
  location: string;
  period: string;
  details?: string[];
}

export interface EducationSectionProps {
  educationInfo: Education;
  isLoadingEducation: boolean;
  errorEducation: unknown | null;
}

export interface TyperProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export interface FooterProps {
  info: ProfileContent;
}

export const emptyEducation: Education = {
  institution: "",
  universityUrl: "",
  degree: "",
  location: "",
  period: "",
  details: [],
};
