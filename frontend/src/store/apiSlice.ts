// store/api/portfolioApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PortfolioData } from '@shared/types';

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/portfolio',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getPortfolio: builder.query<PortfolioData, void>({
      query: () => '/',
    }),
    upsertPortfolio: builder.mutation<PortfolioData, Partial<PortfolioData>>({
      query: (data) => ({
        url: '/',
        method: 'PUT',
        body: data,
      }),
    }),
    patchPortfolio: builder.mutation<PortfolioData, Partial<PortfolioData>>({
      query: (data) => ({
        url: '/',
        method: 'PATCH',
        body: data,
      }),
    }),
    deletePortfolio: builder.mutation<void, void>({
      query: () => ({
        url: '/',
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetPortfolioQuery,
  useUpsertPortfolioMutation,
  usePatchPortfolioMutation,
  useDeletePortfolioMutation,
} = portfolioApi;
