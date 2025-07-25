'use client';

import React from 'react';
import Socials from '../Socials';
import Divider from '../Divider';
import SiteSignature from '../SiteSignature';
import { SocialUrls } from '@shared/types';


type FooterProps = {
  info: {
    content: {
      name: string;
      socialUrls: SocialUrls;
    };
  };
};

const Footer: React.FC<FooterProps> = ({ info }) => {
  return (
    <div className="footer text-center text-sm text-body dark:text-white mt-8 space-y-4">
      <Divider />
      <p>
        This list isn&apos;t exhaustive. If you need help or just wanna meet,{' '}
        <a
          href={info.content.socialUrls.mail}
          className="text-link underline hover:opacity-80 text-[var(--link-color)]"
          aria-label="Mail to Me"
        >
          let&apos;s connect!
        </a>
      </p>

      <Socials socialUrls={info.content.socialUrls} />
      <SiteSignature name={info.content.name} />
    </div>
  );
};

Footer.displayName = 'Footer';

export default Footer;
