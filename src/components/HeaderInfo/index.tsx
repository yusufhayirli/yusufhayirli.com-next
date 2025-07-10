'use client';

import React from 'react';
import EducationSection, { EducationInfo } from '../EducationSection';

interface HeaderInfoProps {
  content: {
    name: string;
    whatIdo: string;
    education: EducationInfo;
  };
}

const HeaderInfo: React.FC<HeaderInfoProps> = ({ content }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4">
        Hi, I’m {content.name} – {content.whatIdo}
      </h1>
      <EducationSection educationInfo={content.education} />
    </>
  );
};

HeaderInfo.displayName = 'HeaderInfo';

export default HeaderInfo;
