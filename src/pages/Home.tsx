'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';
import ContentBody from '../components/ContentBody';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Home({ }) {
  const info = useSelector((state: RootState) => state.info);

  return (
    <div className='home-container'>
      <ScrollToTopButton />
      <ThemeToggle />
      <div className='home-inside'>
        <Header info= {info} />
        <ContentBody info= {info}/>
      </div>
      <Footer info= {info}/>
    </div>
  );
}