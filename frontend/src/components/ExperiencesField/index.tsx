'use client';

import { useState } from 'react';
import ExperienceCard from '../ExperienceCard';

export interface ExperienceType {
  jobTitle: string;
  currentCompanyName: string;
  currentCompanyUrl: string;
  startDate?: string;
  leaveDate?: string;
  summary: string[];
  skills?: string[];
}

interface ExperiencesFieldProps {
  experiences: ExperienceType[];
}

const ExperiencesField: React.FC<ExperiencesFieldProps> = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-6 justify-center mt-8">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          index={index}
          exp={exp}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
          onClose={() => setExpandedIndex(null)}
        />
      ))}
    </div>
  );
};

ExperiencesField.displayName = 'ExperiencesField';

export default ExperiencesField;