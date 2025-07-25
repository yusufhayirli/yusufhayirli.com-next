'use client';

import React from 'react';
import ExperiencesField from '../ExperiencesField';
import SkillsAndCerts from '../SkillsAndCerts';
import { ExperienceType, SkillAndCertsType } from '../../../../shared/types';

interface InfoProps {
  experiences: ExperienceType[];
  skillsAndCerts: SkillAndCertsType;
}

interface ContentBodyProps {
  info: InfoProps;
}

const ContentBody: React.FC<ContentBodyProps> = ({ info }) => {
  return (
    <div className="w-full bg-[var(--body-background)] text-[var(--body-color)] py-8">
      <div className="container mx-auto px-4">
        {/* Experiences Section */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold dark:text-gray-100 mb-6 relative inline-block after:block after:mt-2 after:mx-auto after:w-1/2 after:border-b-2 after:border-blue-500 after:opacity-40">Experiences</h2>
          <div className="flex flex-col gap-6">
            <ExperiencesField experiences={info.experiences} />
          </div>
        </div>

        {/* Skills and Certificates Section */}
        <div className="grid gap-6">
          <SkillsAndCerts skillsAndCerts={info.skillsAndCerts} />
        </div>
      </div>
    </div>
  );
};

ContentBody.displayName = 'ContentBody';

export default ContentBody;
