import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface SingleProjectProps {
  project: {
    name: string;
    url?: string;
    demoLink?: string;
    imageUrl?: string;
    desc?: string;
  };
}
export const SingleProject = (props: SingleProjectProps) => {
  const { project } = props;
  return (
    <div className='w-full items-center rounded sm:max-w-72 md:max-w-80 lg:max-w-96'>
      <div className='flex w-full flex-col gap-3 p-2 text-gray-950 dark:text-zinc-300'>
        {project.imageUrl ? (
          <div className='flex aspect-video w-full overflow-hidden rounded-lg'>
            <Image
              src={project.imageUrl}
              width={2000}
              height={2000}
              alt='Project Image'
              className='flex-1'
            />
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
        <div className='flex w-full flex-row items-center justify-end gap-2 text-xs'>
          {project.url ? (
            <a
              href={`//${project.url}`}
              target='_blank'
              className='flex gap-2 items-center rounded-full border border-zinc-100 p-1 text-sm hover:border-zinc-200 hover:bg-zinc-100 dark:border-bgDark dark:hover:border-gray-700 dark:hover:bg-gray-950 px-3'>
              <FontAwesomeIcon width={10} height={10} icon={faGithub} />
              Source Code
            </a>
          ) : (
            <div className='flex gap-2 items-center rounded-full border border-zinc-100 p-1 text-sm hover:border-zinc-200 hover:bg-zinc-100 dark:border-bgDark dark:hover:border-gray-700 dark:hover:bg-gray-950 px-3'>
              <FontAwesomeIcon width={10} height={10} icon={faGithub} />
              Source Code
            </div>
          )}
          {project.demoLink ? (
            <a
              href={`//${project.demoLink}`}
              target='_blank'
              className='flex gap-2 items-center rounded-full border border-zinc-100 p-1 text-sm hover:border-zinc-200 hover:bg-zinc-100 dark:border-bgDark dark:hover:border-gray-700 dark:hover:bg-gray-950 px-3'>
              Live Demo
              <FontAwesomeIcon width={10} height={10} icon={faArrowUpRightFromSquare} />
            </a>
          ) : (
            <div className='flex gap-2 items-center rounded-full border border-zinc-100 p-1 text-sm hover:border-zinc-200 hover:bg-zinc-100 dark:border-bgDark dark:hover:border-gray-700 dark:hover:bg-gray-950 px-3'>
              Live Demo
              <FontAwesomeIcon width={10} height={10} icon={faArrowUpRightFromSquare} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
