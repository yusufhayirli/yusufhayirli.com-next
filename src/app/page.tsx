'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';
import ContentBody from '../components/ContentBody';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ClientOnly from '../components/ClientOnly';

export default function Home() {
  const info = useSelector((state: RootState) => state.info);

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
