'use client';

import React, { useState } from 'react';
import { ExperienceType } from '@shared/types';
import Modal from '../Modal';

type ExperienceCardProps = {
  exp: ExperienceType;
  index: number;
  expandedIndex: number | null;
  setExpandedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  onClose: () => void;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative bg-[var(--card-bg)] border border-transparent rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_1.125rem_2.5rem_var(--link-color)] hover:border-[var(--link-color)] overflow-hidden">
        {/* Gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl z-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[var(--highlight-glow-1)] via-[var(--highlight-glow-2)] to-[var(--highlight-glow-3)] blur-sm" />

        {/* Icon */}
        <div className="text-xl mb-2 text-center">
          <i className="fa fa-layer-group text-[var(--link-color)] text-2xl opacity-80" aria-hidden="true"></i>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-center mb-1 text-[var(--body-color)]">
          {exp.jobTitle}{' '}
          <a
            href={exp.currentCompanyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--link-color)] underline"
          >
            @{exp.currentCompanyName}
          </a>
        </h2>

        {/* Date Interval */}
        {(exp.startDate && exp.leaveDate) && (
          <p className="text-sm text-center text-[var(--body-color)] opacity-70 mb-3">
            {exp.startDate} – {exp.leaveDate}
          </p>
        )}

        {/* Summary */}
        <ul className="text-sm text-left opacity-90 max-h-20 overflow-hidden mb-3 pl-6 list-disc">
          {exp.summary?.slice(0, 2).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Show More */}
        <div className="text-center mb-2">
          <button
            onClick={handleShowMore}
            className="text-sm font-medium text-[var(--link-color)] hover:underline"
          >
            Show more ▼
          </button>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2">
          {exp.skills?.map((skill, i) => (
            <span
              key={i}
              className="relative px-3 py-1 rounded-md text-sm font-semibold text-[var(--body-color)] shadow-[var(--tag-shadow)] bg-gradient-to-b from-[var(--tag-bg-start)] to-[var(--tag-bg-end)] transition-all hover:scale-105 hover:bg-[var(--link-color)] hover:text-white 
        before:content-[''] before:absolute before:inset-0 before:rounded-md before:p-[1px] before:bg-[linear-gradient(135deg,var(--highlight-glow-1),var(--highlight-glow-2),var(--highlight-glow-3))] before:[mask-composite:exclude] before:pointer-events-none before:z-[1] before:opacity-0 hover:before:opacity-100"
            >
              <span className="relative z-[2]">{skill}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          title={
            <>
              {exp.jobTitle} @
              <a
                href={exp.currentCompanyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {exp.currentCompanyName}
              </a>
            </>
          }
          subtitle={`${exp.startDate} – ${exp.leaveDate}`}
          content={exp.summary}
          tags={exp.skills}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default ExperienceCard;
