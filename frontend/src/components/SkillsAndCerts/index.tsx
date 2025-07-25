"use client";

import React from "react";
import Image from 'next/image';
import { SkillsAndCertsProps } from '@shared/types';

const SkillGroup = ({ title, items }: { title: string; items: string[] }) => (
  <div className="relative bg-[var(--card-bg)] border border-transparent rounded-[1rem] p-6 shadow-[var(--link-color)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0.5rem_1rem_var(--link-color)] hover:border-[var(--link-color)] hover:border-[var(--card-border-hover)] overflow-hidden  ">
    <h3 className="text-xl font-semibold text-[var(--link-color)] mb-4">
      {title}
    </h3>
    <ul className="flex flex-wrap gap-2 justify-center">
      {items.map((item, index) => (
      <li
        key={index}
        className="relative px-3 py-1 rounded-md text-sm font-semibold text-[var(--body-color)] shadow-[var(--tag-shadow)] bg-gradient-to-b from-[var(--tag-bg-start)] to-[var(--tag-bg-end)] transition-all hover:scale-105 hover:bg-[var(--link-color)] hover:text-white 
        before:content-[''] before:absolute before:inset-0 before:rounded-md before:p-[1px] before:bg-[linear-gradient(135deg,var(--highlight-glow-1),var(--highlight-glow-2),var(--highlight-glow-3))] before:[mask-composite:exclude] before:pointer-events-none before:z-[1] before:opacity-0 hover:before:opacity-100"
      >
        <span className="relative z-[2]">{item}</span>
      </li>
      ))}
    </ul>
  </div>
);

const SkillsAndCerts: React.FC<SkillsAndCertsProps> = ({ skillsAndCerts }) => {
  const {
    salesforceExpertise,
    frontEnd,
    backEnd,
    databases,
    devOpsTools,
    cloudInfrastructure,
    softwarePractices,
    languages,
  } = skillsAndCerts;

  return (
    <section className="mt-12 px-4 text-center">
      <h2 className="text-2xl font-bold dark:text-gray-100 mb-6 relative inline-block after:block after:mt-2 after:mx-auto after:w-1/2 after:border-b-2 after:border-blue-500 after:opacity-40">
        Certifications, Skills & Languages
      </h2>

      {/* Certifications */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-[var(--link-color)] mb-4">
          Salesforce Expertise
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {salesforceExpertise.map((cert, index) => (
            <div
              key={index}
              className="relative bg-[var(--card-bg)] border border-transparent rounded-[1rem] p-6 shadow-[var(--card-shadow-default)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_0.5rem_1rem_var(--link-color)] hover:border-[var(--link-color)] hover:border-[var(--card-border-hover)] overflow-hidden max-w-xs  "
            >
              <Image
                src={cert.image}
                alt={cert.alt}
                width={120}
                height={120}
                className="mb-4 mx-auto"
              />
              <p className="font-semibold text-[var(--body-color)] mb-1">
                {cert.title}
              </p>
              <p className="text-sm text-[var(--body-color)] opacity-75 mb-1">
                {cert.issued}
              </p>
              <a
                href={cert.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--link-color)] text-sm font-medium underline hover:opacity-80"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <SkillGroup title="Front-End Development" items={frontEnd} />
        <SkillGroup title="Back-End & Server-Side" items={backEnd} />
        <SkillGroup title="Databases & Storage" items={databases} />
        <SkillGroup title="Tools & DevOps" items={devOpsTools} />
        <SkillGroup title="Cloud & Infrastructure" items={cloudInfrastructure} />
        <SkillGroup title="Software Practices" items={softwarePractices} />
      </div>

      {/* Languages */}
      <div className="flex justify-center">
        <SkillGroup title="Languages" items={languages} />
      </div>
    </section>
  );
};

export default SkillsAndCerts;