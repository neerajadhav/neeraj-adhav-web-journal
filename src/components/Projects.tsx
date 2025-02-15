import { PROJECTS } from '@/utils/consts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import PageSection from './PageSection';
import { SingleProject } from './SingleProject';

export const Projects = () => {
  return (
    <PageSection
      title='Projects'
      link={{
        href: '/projects',
        text: 'All Projects',
        icon: <ArrowRightIcon className='h-4 w-4' />,
      }}
      button={{
        href: 'blog',
        text: 'All Projects',
        icon: <ArrowRightIcon className='h-5 w-5' />,
        className: 'bg-gray-800 hover:bg-gray-900',
      }}
    >
      <div className='mx-auto flex w-full flex-col gap-5 sm:flex-row sm:justify-center md:gap-8'>
        {PROJECTS.slice(0, 3).map((project) => (
          <SingleProject project={project} key={project.name} />
        ))}
      </div>
    </PageSection>
  );
};
