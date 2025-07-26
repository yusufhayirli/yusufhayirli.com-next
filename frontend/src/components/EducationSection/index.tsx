'use client';
import React from 'react';
import { EducationSectionProps } from '@shared/types';

const EducationSection: React.FC<EducationSectionProps> = ({ educationInfo, isLoadingEducation, errorEducation }) => {

  const {
    institution,
    universityUrl,
    degree,
    location,
    period,
    details,
  } = educationInfo;

  if (
    isLoadingEducation
  ) return <div>Loading...</div>;

  if (errorEducation) return <div>Error loading Education data!</div>;

  if (!educationInfo) return <div>No content found.</div>;

  return (
    <section className="mt-6 px-4 text-center">
      <h2 className="text-2xl font-bold dark:text-gray-100 mb-6 relative inline-block after:block after:mt-2 after:mx-auto after:w-1/2 after:border-b-2 after:border-blue-500 after:opacity-40">
        Education
      </h2>

      <div className="flex justify-center">
        <div
          className="bg-[var(--card-bg)] p-8 rounded-2xl shadow-lg max-w-3xl text-left border border-transparent
          transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:[box-shadow:0_10px_25px_0_var(--link-color)]"
        >
          <h3 className="text-xl font-bold mb-1 text-center text-sm text-[var(--link-color)]">
            {degree}
          </h3>
          <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mb-1 text-center">
            @ <a href={universityUrl} target="_blank" rel="noopener noreferrer" className="underline">
              {institution}
            </a>
          </p>
          <p className="text-sm dark:text-gray-300 mb-4 text-center">
            {location} · {period}
          </p>

          {details && details.length > 0 && (
            <ul className="space-y-4 mt-4">
              {details.map((item, index) => (
                <li
                  key={index}
                  className="bg-neutral-50 dark:bg-neutral-700 rounded-xl px-5 py-4 text-sm text-gray-800 dark:text-gray-100 shadow-sm border-l-4 border-blue-500 dark:border-pink-500 transition-all duration-200
                  hover:translate-y-[-2px] hover:bg-[var(--link-color)] hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
