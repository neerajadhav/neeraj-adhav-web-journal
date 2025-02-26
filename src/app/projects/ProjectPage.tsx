import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import PageSection from '@/components/PageSection';
import { SingleProject } from '@/components/SingleProject';
import { PROJECTS } from '../../../public/utils/consts/index';
export default function ProjectPage() {
  return (
    <Container>
      <PageSection
        title='Projects'
      >
        <div className='mx-auto flex w-full flex-col flex-wrap gap-1 sm:flex-row sm:justify-center lg:gap-0'>
          {PROJECTS.map((project) => (
            <SingleProject project={project} key={project.name} />
          ))}
        </div>
      </PageSection>
      <ContactMe />
    </Container>
  );
}
