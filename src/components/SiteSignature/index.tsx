'use client';

import React from 'react';

type SiteSignatureProps = {
  name: string;
};

const SiteSignature: React.FC<SiteSignatureProps> = ({ name }) => {
  return (
    <div className="text-center my-10">
      <h3 className="sm-text-lg md:text-xl font-light text-white/70 dark:text-white/50">
        <span className="italic">Designed by </span>
        <span className="font-semibold text-[var(--link-color)] glow-text">
          {name}
        </span>
      </h3>
    </div>
  );
};

SiteSignature.displayName = 'SiteSignature';

export default SiteSignature;
