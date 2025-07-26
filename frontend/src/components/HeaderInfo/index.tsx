import React from 'react';
import EducationSection from '../EducationSection';
import { HeaderInfoProps, emptyEducation } from '@shared/types';
import { useGetPortfolioEducationQuery } from '@/store/api/portfolioApi';

const HeaderInfo: React.FC<HeaderInfoProps> = ({ content }) => {
  const {
    data: education,
    isLoading: isLoadingEducation,
    error: errorEducation,
  } = useGetPortfolioEducationQuery();

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">
        Hi, I’m {content.name} – {content.whatIdo}
      </h1>
      <EducationSection
        educationInfo={education ?? emptyEducation}
        isLoadingEducation={isLoadingEducation}
        errorEducation={errorEducation}
      />
    </>
  );
};

HeaderInfo.displayName = 'HeaderInfo';

export default HeaderInfo;
