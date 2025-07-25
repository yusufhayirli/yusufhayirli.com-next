import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PortfolioData } from '@shared/types';

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
    updatePortfolio: builder.mutation<PortfolioData, Partial<PortfolioData>>({
      query: (body) => ({
        url: '/',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Portfolio'],
    }),
    patchPortfolio: builder.mutation<PortfolioData, Partial<PortfolioData>>({
      query: (body) => ({
        url: '/',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Portfolio'],
    }),
    postPortfolio: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: '/',
        method: 'POST',
      }),
      invalidatesTags: ['Portfolio'],
    }),
    deletePortfolio: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: '/',
        method: 'DELETE',
      }),
      invalidatesTags: ['Portfolio'],
    }),
  }),
});

export const {
  useGetPortfolioQuery,
  useUpdatePortfolioMutation,
  usePatchPortfolioMutation,
  usePostPortfolioMutation,
  useDeletePortfolioMutation,
} = portfolioApi;
