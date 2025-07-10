export interface ExperienceType {
  jobTitle: string;
  currentCompanyName: string;
  currentCompanyUrl: string;
  startDate?: string;
  leaveDate?: string;
  summary: string[];
  skills?: string[];
}

export interface CertificateType {
  title: string;
  image: string;
  alt: string;
  issued: string;
  pdfLink: string;
}

export interface SkillAndCertsType {
  salesforceExpertise: CertificateType[];
  frontEnd: string[];
  backEnd: string[];
  databases: string[];
  devOpsTools: string[];
  cloudInfrastructure: string[];
  softwarePractices: string[];
  languages: string[];
}

export interface InfoProps {
  experiences: ExperienceType[];
  skillsAndCerts: SkillAndCertsType;
}

export interface ContentBodyProps {
  info: InfoProps;
}

export interface Cert {
  title: string;
  image: string;
  alt: string;
  issued?: string;
  pdfLink?: string;
}

export type SocialUrls = {
  mail: string;
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
  spotify: string;
  [key: string]: string; // Ek linkler için
};

export type SkillsAndCertsProps = {
  skillsAndCerts: {
    salesforceExpertise: Cert[];
    frontEnd: string[];
    backEnd: string[];
    databases: string[];
    devOpsTools: string[];
    cloudInfrastructure: string[];
    softwarePractices: string[];
    languages: string[];
  };
};