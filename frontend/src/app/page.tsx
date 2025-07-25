'use client';

import { useEffect } from 'react';
import { useGetPortfolioQuery, usePatchPortfolioMutation, useUpdatePortfolioMutation, usePostPortfolioMutation, useDeletePortfolioMutation } from '@/store/api/portfolioApi';
import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';
import ContentBody from '../components/ContentBody';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ClientOnly from '../components/ClientOnly';

export default function Home() {
  const { data: info, isLoading, error, refetch } = useGetPortfolioQuery();

  const [patchPortfolio, { isSuccess: isPatchSuccess }] = usePatchPortfolioMutation();
  const [updatePortfolio, { isSuccess: isUpdateSuccess }] = useUpdatePortfolioMutation();
  const [postPortfolio, { isSuccess: isPostSuccess }] = usePostPortfolioMutation();
  const [deletePortfolio, { isSuccess: isDeleteSuccess }] = useDeletePortfolioMutation();

  useEffect(() => {
    if (isPatchSuccess || isUpdateSuccess || isPostSuccess || isDeleteSuccess) {
      console.log("true");
      refetch();
    }
  }, [isPatchSuccess, isUpdateSuccess, isPostSuccess, isDeleteSuccess, refetch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading portfolio!</div>;
  if (!info) return <div>No data found.</div>;

  return (
    <div className='home-container'>
      <ScrollToTopButton />
      <ThemeToggle />
      <div className='home-inside'>
        <ClientOnly>
          <Header info={info} />
          <ContentBody info={info} />
          <Footer info={info} />
        </ClientOnly>
      </div>
    </div>
  );
}
