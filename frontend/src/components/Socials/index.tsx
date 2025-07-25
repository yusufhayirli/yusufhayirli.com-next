'use client';

import React from 'react';
import { SocialUrls } from '@shared/types';

type SocialsProps = {
  socialUrls: SocialUrls;
};

const Socials: React.FC<SocialsProps> = ({ socialUrls }) => {
  return (
    <div className="social-media-links flex flex-wrap justify-center items-center mt-4 animate-[fadein_1.5s_ease-in-out]">
      {socialUrls.mail && (
        <a
          aria-label="Mail to Me"
          className="far fa-envelope mx-4 text-4xl hover:text-[#ee2f25]"
          href={socialUrls.mail}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
      {socialUrls.linkedin && (
        <a
          aria-label="My LinkedIn Profile"
          className="fab fa-linkedin-in mx-4 text-4xl hover:text-[#00a0dc]"
          href={socialUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
      {socialUrls.github && (
        <a
          aria-label="My Github Page"
          className="fab fa-github mx-4 text-4xl hover:text-[#0c501d]"
          href={socialUrls.github}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
      {socialUrls.instagram && (
        <a
          aria-label="My Instagram Profile"
          className="fab fa-instagram mx-4 text-4xl hover:text-[#c13584]"
          href={socialUrls.instagram}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
      {socialUrls.twitter && (
        <a
          aria-label="My Twitter Profile"
          className="fab fa-twitter mx-4 text-4xl hover:text-[#1da1f2]"
          href={socialUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
      {socialUrls.spotify && (
        <a
          aria-label="My Spotify Profile"
          className="fab fa-spotify mx-4 text-4xl hover:text-[#00f445]"
          href={socialUrls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
    </div>
  );
};

Socials.displayName = 'Socials';

export default Socials;
