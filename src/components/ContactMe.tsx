'use client';
import { usePublicationQuery } from '../../generated/graphq';
import { SocialLinks } from './SocialLinks';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const ContactMe = () => {
  const { data } = usePublicationQuery({
    host,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className='mb-[4.5rem] select-none lg:mx-0 print:hidden'>
      <div className='flex w-full flex-col items-center gap-5 rounded-xl border bg-white p-6 text-gray-950 dark:border dark:border-bgDark dark:bg-bgDark dark:text-zinc-300'>
        <h2 className='text-xl font-semibold lg:text-2xl'>
          Have a Project Idea?
        </h2>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-base lg:text-lg'>Let&apos;s connect</p>
          <SocialLinks />
        </div>
        <p className='text-sm text-gray-500 dark:text-zinc-300'>
          Source Code at{' '}
          <a
            href='//github.com/neerajadhav/floaty-hashnode-headless'
            target='_blank'
          >
            GitHub
          </a>
        </p>
        {data?.publication?.title && (
          <p className='flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-300'>
            &copy; {data.publication.title} {currentYear}
          </p>
        )}
      </div>
    </footer>
  );
};
