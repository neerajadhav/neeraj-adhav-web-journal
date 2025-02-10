'use client';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { usePublicationQuery } from '../../generated/graphq';
import PageHeader from './PageHeader';


const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const AboutMe = () => {
  const { data, error } = usePublicationQuery({
    host,
  });

  if (!data?.publication || error) return null;

  const { publication } = data;
  const linkedinLink = publication.links?.linkedin;
  const twitterLink = publication.links?.twitter;
  const isAvailableLink = linkedinLink || twitterLink;

  return (
    <div className='flex w-full flex-col items-center gap-7 rounded-3xl bg-white p-4 shadow-md dark:border dark:border-slate-800 dark:bg-slate-900'>
      <PageHeader />
      <div className='flex w-full flex-col items-center gap-7 lg:flex-row'>
        {publication.author.profilePicture && (
          <div className='flex aspect-square w-full overflow-hidden rounded-xl sm:max-w-52'>
            <Image
              src={publication.author.profilePicture}
              alt='profile pic'
              width={1000}
              height={1000}
              className='flex-1'
            />
          </div>
        )}
        <div className='flex w-full flex-1 flex-col items-start'>
          <div className='mb-4 flex flex-col items-center justify-between gap-2 sm:flex-row lg:gap-0'>
            {isAvailableLink && (
              <a
                href={isAvailableLink}
                target='_blank'
                className='hidden rounded-2xl bg-green-200 px-3 py-1 text-sm text-green-700 md:block'
              >
                #OpenToWork
              </a>
            )}
            {isAvailableLink && (
              <a
                href={isAvailableLink}
                target='_blank'
                className='block rounded-2xl bg-green-200 px-3 py-1 text-sm text-green-700 md:hidden'
              >
                #OpenToWork
              </a>
            )}
          </div>
          <div className='mb-4 mr-4 flex flex-col gap-3'>
            <h1 className='w-full text-2xl text-slate-950 sm:text-3xl dark:text-zinc-100'>
              Hi there! I am{' '}
              <span className='font-bold underline underline-offset-4'>{`${publication.author.name}!`}</span>
            </h1>
            {publication.author.bio && (
              <div
                className='w-full text-slate-500 lg:text-left dark:text-zinc-300'
                dangerouslySetInnerHTML={{
                  __html: publication.author.bio.html || '',
                }}
              />
            )}
            {publication.author.location && (
              <p className='flex w-full items-center gap-2 text-sm text-slate-500 dark:text-zinc-300'>
                <FontAwesomeIcon icon={faLocationDot} />
                {publication.author.location}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
