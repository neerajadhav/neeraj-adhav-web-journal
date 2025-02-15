import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import PageSection from '@/components/PageSection';
import { SingleProject } from '@/components/SingleProject';
import { PROJECTS } from '@/utils/consts/index';
export default function Project() {
  return (
    <Container>
      <PageSection
        title='Projects'
      >
        <div className='mx-auto flex w-full flex-col flex-wrap gap-5 sm:flex-row sm:justify-center md:gap-8'>
          {PROJECTS.map((project) => (
            <SingleProject project={project} key={project.name} />
          ))}
        </div>
      </PageSection>
      <ContactMe />
    </Container>
  );
}
