'use client';

import React from 'react';
import CircleAvatar from '../CircleAvatar';
import HeaderInfo from '../HeaderInfo';
import Typing from '../Typer';

interface EducationInfo {
  institution: string;
  universityUrl: string;
  degree: string;
  location: string;
  period: string;
  details?: string[];
}

interface InfoType {
  likeToBuild: string[];
  content: {
    name: string;
    whatIdo: string;
    education: EducationInfo;
  };
}

interface HeaderProps {
  info: InfoType;
}

const Header: React.FC<HeaderProps> = ({ info }) => {
  return (
    <div className="header">
      <CircleAvatar />
      <Typing words={info.likeToBuild} />
      <HeaderInfo content={info.content} />
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
