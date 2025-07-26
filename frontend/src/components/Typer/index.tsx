'use client';

import React, { useState, useEffect } from 'react';
import { TyperProps } from '@shared/types';

const Typer: React.FC<TyperProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 75,
  delay = 1000,
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) return;

    if (!deleting && words[index] && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, delay, deletingSpeed, typingSpeed, words]);

  // Safe fallback for words[index]
  const currentWord = words[index] ?? '';

  return (
    <div className="text-center text-[20px] h-8 font-mono leading-tight">
      <p className="inline-block mr-2">
        {currentWord.substring(0, subIndex)}
        <span className="inline-block animate-blink">|</span>
      </p>
    </div>
  );
};

export default Typer;
