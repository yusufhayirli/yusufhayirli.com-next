import { createSlice } from '@reduxjs/toolkit';
import type { InfoProps, ProfileContent, SkillsAndCerts } from '@shared/types';

// Define EMPTY structures for type safety
const emptyContent: ProfileContent = {
  context: "",
  type: "",
  name: "",
  whatIdo: "",
  additionalName: "",
  url: "",
  gender: "",
  nationality: "",
  birthDate: "",
  birthPlace: "",
  workLocation: "",
  country: "",
  image: "",
  currentCompanyName: "",
  currentCompanyUrl: "",
  title: "",
  jobTitle: "",
  socialUrls: {
    instagram: "",
    twitter: "",
    linkedin: "",
    mail: "",
    github: "",
    spotify: "",
  },
  education: {
    institution: "",
    universityUrl: "",
    degree: "",
    location: "",
    period: "",
    details: [],
  }
};

const emptySkillsAndCerts: SkillsAndCerts = {
  salesforceExpertise: [],
  frontEnd: [],
  backEnd: [],
  databases: [],
  devOpsTools: [],
  cloudInfrastructure: [],
  softwarePractices: [],
  languages: [],
};

const initialState: InfoProps = {
  content: emptyContent,
  experiences: [],
  likeToBuild: [],
  skillsAndCerts: emptySkillsAndCerts,
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    // Add reducers as needed
  }
});

export default infoSlice.reducer;
