'use client';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaFilePdf, FaSuitcase } from 'react-icons/fa';
import { usePublicationQuery } from '../../generated/graphq';
import { SocialLinks } from './SocialLinks';

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const AboutMe = () => {
  const { data, error } = usePublicationQuery({
    host,
  });

  if (!data?.publication || error) return null;

  const { publication } = data;
  const linkedinLink = publication.links?.linkedin;
  const twitterLink = publication.links?.twitter;
  const resumeLink = '//neerajadhav.in/Neeraj_s_Resume_Updated.pdf';
  const isAvailableLink = linkedinLink || twitterLink;
  const availableFor = publication.author?.availableFor || null;

  return (
    <div className='flex w-full flex-col items-center gap-4 border-y bg-white p-4 dark:border dark:border-bgDark dark:bg-bgDark lg:border-x'>
      <div className='flex w-full flex-col items-start gap-4 lg:flex-row'>
        {publication.author.profilePicture && (
          <div className='flex w-1/2 flex-col items-center mx-auto gap-3 overflow-hidden rounded-xl p-3 sm:max-w-52 b'>
            <Image
              src={publication.author.profilePicture}
              alt='profile pic'
              width={1000}
              height={1000}
              className='flex-1 rounded-full border dark:border-bgDark w-[150px]'
            />
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
            <SocialLinks />
          </div>
        )}
        <div className='flex w-full flex-1 flex-col items-start lg:py-2'>
          <div className='flex w-full flex-col gap-3 p-3 lg:p-0'>
            <h1 className='w-full text-2xl text-gray-950 dark:text-zinc-100 sm:text-3xl'>
              Hi there! I am{' '}
              <span className='font-extrabold'>{`${publication.author.name}!`}</span>
            </h1>
            {publication.author.bio && (
              <div
                className='text-gray-500 dark:text-zinc-300 lg:w-2/3 lg:text-left'
                dangerouslySetInnerHTML={{
                  __html: publication.author.bio.html || '',
                }}
              />
            )}
            {availableFor && (
              <p className='flex w-full items-center gap-2 text-sm text-gray-500 dark:text-zinc-300'>
                <FaSuitcase /> I am available for {availableFor}
              </p>
            )}
            {publication.author.location && (
              <p className='flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-300'>
                <FontAwesomeIcon icon={faLocationDot} />
                {publication.author.location}
              </p>
            )}
            <div className='mt-3 flex w-full select-none flex-row gap-3 lg:gap-6'>
              {resumeLink && (
                <Link
                  href={resumeLink}
                  className='text-md flex w-1/2 items-center justify-center gap-2 rounded-full border border-gray-400 px-3 py-2 font-medium text-gray-700 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400 dark:border-gray-600 dark:text-white dark:hover:bg-white dark:hover:text-black md:flex md:px-4 md:py-2 lg:w-1/6'
                >
                  <FaFilePdf className='h-4 w-4' /> Resume
                </Link>
              )}
              <Link
                href='mailto:neerajadhav@duck.com'
                className='text-md flex w-1/2 items-center justify-center gap-2 rounded-full border border-blue-400 bg-blue-500 px-3 py-2 font-medium text-white transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400 dark:border-gray-600 dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black md:flex md:px-4 md:py-2 lg:w-1/6'
              >
                <FaEnvelope className='h-4 w-4' /> Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
