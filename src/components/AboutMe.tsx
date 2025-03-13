import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Inknut_Antiqua } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaFilePdf, FaSuitcase } from 'react-icons/fa';
import { SocialLinks } from './SocialLinks';

const ubuntu = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
});

const accessToken = process.env.NEXT_MASTODON_ACCESS_TOKEN as string;
const MASTODON_USERNAME = process.env.NEXT_MASTODON_USERNAME as string;
const MASTODON_INSTANCE = process.env.NEXT_MASTODON_INSTANCE as string;

export const AboutMe = async () => {
  let account: any;

  try {
    const res = await fetch(
      `${MASTODON_INSTANCE}/api/v1/accounts/lookup?acct=${MASTODON_USERNAME}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: 'no-store',
      }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch Mastodon account data');
    }
    account = await res.json();
  } catch (error) {
    console.error('Error fetching Mastodon account:', error);
    return <div>Error loading profile.</div>;
  }

  const name = account.display_name || account.username;
  const bioHtml = account.note || '';
  const profilePicture = account.avatar_static;

  const availableFor =
    account.fields?.find((f: any) => f.name.toLowerCase().includes('available'))
      ?.value || null;
  const location =
    account.fields?.find((f: any) => f.name.toLowerCase().includes('location'))
      ?.value || null;

  const resumeLink = '//neerajadhav.in/Neeraj_s_Resume_Updated.pdf';
  const emailLink = 'mailto:neerajadhav@duck.com';
  const isAvailableLink = 'https://www.linkedin.com/in/neerajadhav/';

  return (
    <div className='flex flex-col items-center gap-4 rounded-xl border bg-white p-4 py-10 dark:border-0 dark:bg-bgDark'>
      <div className='flex w-full flex-col items-start gap-4 lg:flex-row'>
        {profilePicture && (
          <div className='mx-auto flex w-2/3 flex-col items-center gap-3 overflow-hidden rounded-xl p-3 sm:max-w-52'>
            <Image
              src={profilePicture}
              alt='profile pic'
              width={150}
              height={150}
              className='w-[150px] rounded-full border dark:border-bgDark'
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
              <strong>{name}</strong>
            </h1>
            {bioHtml && (
              <div
                className='text-gray-700 dark:text-gray-400 lg:w-2/3 lg:text-left'
                dangerouslySetInnerHTML={{ __html: bioHtml }}
              />
            )}
            {availableFor && (
              <p className='flex w-full items-center gap-3 text-gray-700 dark:text-gray-400'>
                <FaSuitcase /> I am available for {availableFor}
              </p>
            )}
            {location && (
              <p className='flex items-center gap-3 text-gray-700 dark:text-gray-400'>
                <FontAwesomeIcon icon={faLocationDot} />
                {location}
              </p>
            )}
            <div className='mt-4 flex gap-4'>
              {resumeLink && (
                <Link
                  href={resumeLink}
                  target='_blank'
                  className='rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                >
                  <FaFilePdf className='mr-2 inline-block' /> Resume
                </Link>
              )}
              <Link
                href={emailLink}
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

export default AboutMe;
