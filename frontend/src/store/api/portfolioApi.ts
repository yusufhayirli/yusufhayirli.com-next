import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PortfolioData, EducationType, ExperienceType, SkillsAndCertsType } from '@shared/types';

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  tagTypes: ['Portfolio'],
  endpoints: (builder) => ({
    getPortfolio: builder.query<PortfolioData, void>({
      query: () => 'portfolio',
      transformResponse: (response: { success: boolean; data: PortfolioData }) => response.data,
      providesTags: ['Portfolio'],
    }),
    getPortfolioContent: builder.query<PortfolioData['content'], void>({
      query: () => 'portfolio/content',
      transformResponse: (response: { success: boolean; data: PortfolioData['content'] }) => response.data,
      providesTags: ['Portfolio'],
    }),
    getPortfolioExperiences: builder.query<ExperienceType[], void>({
      query: () => 'portfolio/experiences',
      transformResponse: (response: { success: boolean; data: ExperienceType[] }) => response.data,
      providesTags: ['Portfolio'],
    }),
    getPortfolioSkills: builder.query<SkillsAndCertsType, void>({
      query: () => 'portfolio/skills',
      transformResponse: (response: { success: boolean; data: SkillsAndCertsType }) => response.data,
      providesTags: ['Portfolio'],
    }),
    getPortfolioEducation: builder.query<EducationType, void>({
      query: () => 'portfolio/education',
      transformResponse: (response: { success: boolean; data: EducationType }) => response.data,
      providesTags: ['Portfolio'],
    }),
    getLikeToBuild: builder.query<string[], void>({
      query: () => 'portfolio/liketobuild',
      transformResponse: (response: { success: boolean; data: string[] }) => response.data,
      providesTags: ['Portfolio'],
    }),

    updatePortfolio: builder.mutation<PortfolioData, Partial<PortfolioData>>({
      query: (body) => ({
        url: 'portfolio',  // Changed from '/' to 'portfolio'
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Portfolio'],
    }),
    patchPortfolio: builder.mutation<PortfolioData, Partial<PortfolioData>>({
      query: (body) => ({
        url: 'portfolio',  // Changed from '/' to 'portfolio'
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Portfolio'],
    }),
    postPortfolio: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: 'portfolio',  // Changed from '/' to 'portfolio'
        method: 'POST',
      }),
      invalidatesTags: ['Portfolio'],
    }),
    deletePortfolio: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: 'portfolio',  // Changed from '/' to 'portfolio'
        method: 'DELETE',
      }),
      invalidatesTags: ['Portfolio'],
    }),
  }),
});

export const {
  useGetPortfolioQuery,
  useGetPortfolioContentQuery,
  useGetPortfolioExperiencesQuery,
  useGetPortfolioSkillsQuery,
  useGetPortfolioEducationQuery,
  useGetLikeToBuildQuery,
  useUpdatePortfolioMutation,
  usePatchPortfolioMutation,
  usePostPortfolioMutation,
  useDeletePortfolioMutation,
} = portfolioApi;
