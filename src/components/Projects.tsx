import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { PROJECTS } from '../../public/utils/consts';
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
    >
      <div className='mx-auto flex w-full flex-col sm:flex-row'>
        {PROJECTS.slice(0, 3).map((project) => (
          <SingleProject project={project} key={project.name} />
        ))}
      </div>
    </PageSection>
  );
};
