import React from 'react';
import CircleAvatar from '../CircleAvatar';
import HeaderInfo from '../HeaderInfo';
import Typer from '../Typer';
import type { HeaderProps } from '@shared/types';

const Header: React.FC<HeaderProps> = ({ info, likeToBuild }) => {

  console.log(info)

  return (
    <div className="header">
      <CircleAvatar />
      <Typer words={likeToBuild ?? []} />
      <HeaderInfo content={info} />
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
