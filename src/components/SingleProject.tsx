import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

interface SingleProjectProps {
  project: {
    name: string;
    url?: string;
    demoLink?: string;
    imageUrl?: string;
    desc?: string;
  };
}

interface ActionButtonProps {
  url?: string;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ url, children }) => {
  const commonClasses =
    'flex items-center gap-2 rounded-full p-1 px-3 text-sm text-white';
  return url ? (
    <a href={`//${url}`} target='_blank' className={commonClasses}>
      {children}
    </a>
  ) : (
    <div className={commonClasses}>{children}</div>
  );
};

export const SingleProject: React.FC<SingleProjectProps> = ({ project }) => {
  return (
    <div className='w-full items-center p-4 py-6 lg:w-1/3 lg:py-4'>
      <div className='flex w-full flex-col gap-3 text-gray-950 dark:text-zinc-300'>
        {project.imageUrl ? (
          <div className='relative flex aspect-video w-full overflow-hidden rounded-lg'>
            <Image
              src={project.imageUrl}
              width={2000}
              height={2000}
              alt='Project Image'
              className='flex-1'
            />
            <div className='absolute bottom-0 right-0 z-20 rounded-tl-lg bg-black/70'>
              <div className='flex w-full flex-row items-center justify-end gap-2 text-xs'>
                <ActionButton url={project.url}>
                  <FontAwesomeIcon width={10} height={10} icon={faGithub} />
                  Source Code
                </ActionButton>
                <ActionButton url={project.demoLink}>
                  Live Demo
                  <FontAwesomeIcon
                    width={10}
                    height={10}
                    icon={faArrowUpRightFromSquare}
                  />
                </ActionButton>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex aspect-video w-full items-center justify-center rounded-xl bg-gray-300 dark:bg-gray-950'>
            <p className='font-semibold text-gray-950 dark:text-zinc-300'>
              <PhotoIcon className='h-12 w-12' />
            </p>
          </div>
        )}
        <p className='text-xl font-semibold dark:text-zinc-100'>
          {project.name}
        </p>
        {project.desc && (
          <p className='line-clamp-3 text-gray-500 dark:text-zinc-300'>
            {project.desc}
          </p>
        )}
      </div>
    </div>
  );
};
