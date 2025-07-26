'use client';

import React from 'react';
import Socials from '../Socials';
import Divider from '../Divider';
import SiteSignature from '../SiteSignature';
import { FooterProps } from '@shared/types';

const Footer: React.FC<FooterProps> = ({ info }) => {
  return (
    <div className="footer text-center text-sm text-body dark:text-white mt-8 space-y-4">
      <Divider />
      <p>
        This list isn&apos;t exhaustive. If you need help or just wanna meet,{' '}
        <a
          href={info.socialUrls.mail}
          className="text-link underline hover:opacity-80 text-[var(--link-color)]"
          aria-label="Mail to Me"
        >
          let&apos;s connect!
        </a>
      </p>

      <Socials socialUrls={info.socialUrls} />
      <SiteSignature name={info.name} />
    </div>
  );
};

Footer.displayName = 'Footer';

export default Footer;
