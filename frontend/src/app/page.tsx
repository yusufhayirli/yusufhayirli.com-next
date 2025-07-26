'use client';

import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';
import ContentBody from '../components/ContentBody';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ClientOnly from '../components/ClientOnly';

import type { Experience, SkillsAndCerts } from '@shared/types';

import {
  useGetPortfolioContentQuery,
  useGetPortfolioExperiencesQuery,
  useGetPortfolioSkillsQuery,
  useGetLikeToBuildQuery
} from '@/store/api/portfolioApi';

export default function Home() {
  const { data: content, isLoading: isLoadingContent, error: errorContent } = useGetPortfolioContentQuery();
  const { data: experiences, isLoading: isLoadingExperiences, error: errorExperiences } = useGetPortfolioExperiencesQuery();
  const { data: skills, isLoading: isLoadingSkills, error: errorSkills } = useGetPortfolioSkillsQuery();
  const { data: liketobuild, isLoading: isLoadingLikeToBuild, error: errorLikeToBuild } = useGetLikeToBuildQuery();

  // Add a loading state
  if (isLoadingContent || isLoadingExperiences || isLoadingSkills || isLoadingLikeToBuild) return <div>Loading...</div>;

  if (errorContent) return <div>Error loading Content data!</div>;
  if (errorExperiences) return <div>Error loading Experiences data!</div>;
  if (errorSkills) return <div>Error loading Skills data!</div>;
  if (errorLikeToBuild) return <div>Error loading Skills data!</div>;

  if (!content) return <div>No content found.</div>;

  return (
    <div className="home-container">
      <ScrollToTopButton />
      <ThemeToggle />
      <div className="home-inside">
        <ClientOnly>
          <Header info={content} likeToBuild={liketobuild}/>
          <ContentBody
            experiences={experiences ?? ([] as Experience[])}
            skills={skills ?? ({} as SkillsAndCerts)}
          />
          <Footer info={content} />
        </ClientOnly>
      </div>
    </div>
  );
}
