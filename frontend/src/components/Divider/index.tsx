'use client';

import React from 'react';

const Divider: React.FC = () => {
  return (
    <div className="flex justify-center">
      <hr className="w-[90%] border-t border-[var(--body-color)]" />
    </div>
  );
};

Divider.displayName = 'Divider';

export default Divider;
