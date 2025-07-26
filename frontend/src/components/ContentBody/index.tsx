'use client';

import React from 'react';
import ExperiencesField from '../ExperiencesField';
import SkillsAndCerts from '../SkillsAndCerts';
import { ContentBodyProps } from '@shared/types';

const ContentBody: React.FC<ContentBodyProps> = ({ experiences, skills }) => {
  return (
    <div className="w-full bg-[var(--body-background)] text-[var(--body-color)] py-8">
      <div className="container mx-auto px-4">
        {/* Experiences Section */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold dark:text-gray-100 mb-6 relative inline-block after:block after:mt-2 after:mx-auto after:w-1/2 after:border-b-2 after:border-blue-500 after:opacity-40">Experiences</h2>
          <div className="flex flex-col gap-6">
            <ExperiencesField experiences={experiences} />
          </div>
        </div>

        {/* Skills and Certificates Section */}
        <div className="grid gap-6">
          <SkillsAndCerts skillsAndCerts={skills} />
        </div>
      </div>
    </div>
  );
};

ContentBody.displayName = 'ContentBody';

export default ContentBody;
