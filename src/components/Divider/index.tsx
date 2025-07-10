'use client';

import React from 'react';

const Divider: React.FC = () => {
  return (
    <div className="flex justify-center">
      <hr className="w-[90%] border-t border-gray-300 dark:border-gray-600" />
    </div>
  );
};

Divider.displayName = 'Divider';

export default Divider;
