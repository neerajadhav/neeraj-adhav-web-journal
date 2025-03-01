'use client';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inknut_Antiqua } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaFilePdf, FaSuitcase } from 'react-icons/fa';
import { usePublicationQuery } from '../../generated/graphq';
import { SocialLinks } from './SocialLinks';

const ubuntu = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
});

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
    <div className='flex flex-col items-center gap-4 rounded-xl border bg-white p-4 py-10 dark:border-0 dark:bg-bgDark shadow'>
      <div className='flex w-full flex-col items-start gap-4 lg:flex-row'>
        {publication.author.profilePicture && (
          <div className='b mx-auto flex w-1/2 flex-col items-center gap-3 overflow-hidden rounded-xl p-3 sm:max-w-52'>
            <Image
              src={publication.author.profilePicture}
              alt='profile pic'
              width={1000}
              height={1000}
              className='w-[150px] flex-1 rounded-full border dark:border-bgDark'
            />
            <div className='mb-4 flex flex-col items-center justify-between gap-2 font-bold sm:flex-row lg:gap-0'>
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
            <h1
              className={`w-full text-2xl text-gray-950 dark:text-zinc-100 ${ubuntu.className}`}
            >
              <span className='text-gray-700 dark:text-zinc-300'>
                Hi there! I am{' '}
              </span>
              <strong>{`${publication.author.name}`}</strong>
            </h1>
            {publication.author.bio && (
              <div
                className='text-gray-700 dark:text-gray-400 lg:w-2/3 lg:text-left'
                dangerouslySetInnerHTML={{
                  __html: publication.author.bio.html || '',
                }}
              />
            )}
            {availableFor && (
              <p className='flex w-full items-center gap-2 text-gray-700 dark:text-gray-400'>
                <FaSuitcase /> I am available for {availableFor}
              </p>
            )}
            {publication.author.location && (
              <p className='flex items-center gap-2 text-gray-700 dark:text-gray-400'>
                <FontAwesomeIcon icon={faLocationDot} />
                {publication.author.location}
              </p>
            )}
            <div className='mt-4 flex gap-4'>
              {resumeLink && (
                <Link
                  href={resumeLink}
                  className='rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                >
                  <FaFilePdf className='mr-2 inline-block' /> Resume
                </Link>
              )}
              <Link
                href='mailto:neerajadhav@duck.com'
                className='rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700'
              >
                <FaEnvelope className='mr-2 inline-block' /> Email Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
