'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '../utils/consts';
import { PublicationLinks, usePublicationQuery } from '../../generated/graphq';
import { FaMastodon } from 'react-icons/fa';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const SocialLinks = () => {
  const { data } = usePublicationQuery({
    host,
  });

  const mastodonlink = 'https://sciences.social/@neerajadhav';

  if (!data?.publication?.links) return null;
  const links = Object.entries(data.publication.links).filter(
    ([key, value]) => value
  ) as Array<[keyof PublicationLinks, string]>;

  return (
    <div className='flex gap-2'>
      {links.map(([socialName, socialLink]) => (
        <a
          href={socialLink as string}
          target='_blank'
          className='flex rounded-full p-2 text-gray-950 hover:bg-gray-600 hover:text-white hover:shadow-sm dark:text-zinc-300 dark:hover:bg-gray-950 dark:hover:text-zinc-300'
          key={socialName}
        >
          <FontAwesomeIcon
            icon={SOCIAL_LINKS[socialName]!}
            className='h-5 w-5'
          />
        </a>
      ))}
      <a
        href={mastodonlink}
        rel='me'
        target='_blank'
        className='flex rounded-full p-2 text-gray-950 hover:bg-gray-600 hover:text-white hover:shadow-sm dark:text-zinc-300 dark:hover:bg-gray-950 dark:hover:text-zinc-300'
        key={mastodonlink}
      >
        <FaMastodon className='h-5 w-5' />
      </a>
    </div>
  );
};
