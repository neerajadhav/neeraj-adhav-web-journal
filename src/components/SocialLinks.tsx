'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PublicationLinks } from '../../generated/graphq';
import { SOCIAL_LINKS } from '../utils/consts';

export const SocialLinks = () => {
  const socialLinks: Partial<Record<keyof PublicationLinks, string>> = {
    hashnode: 'https://hashnode.com/@neerajadhav',
    github: 'https://github.com/neerajadhav',
    linkedin: 'https://www.linkedin.com/in/neerajadhav/',
    mastodon: 'https://sciences.social/@neerajadhav',
  };

  const links = Object.entries(socialLinks).filter(([, value]) =>
    Boolean(value)
  ) as Array<[keyof PublicationLinks, string]>;

  return (
    <div className='flex gap-2'>
      {links.map(([socialName, socialLink]) => (
        <a
          key={socialName}
          href={socialLink}
          target='_blank'
          className='flex rounded-full p-2 text-gray-950 hover:bg-gray-600 hover:text-white hover:shadow-sm dark:text-zinc-300 dark:hover:bg-gray-950 dark:hover:text-zinc-300'
        >
          <FontAwesomeIcon
            icon={SOCIAL_LINKS[socialName]!}
            className='h-5 w-5'
          />
        </a>
      ))}
    </div>
  );
};
