import { Container } from '@/components/Container';
import { SingleProject } from '@/components/SingleProject';
import { ContactMe } from '@/components/ContactMe';
import { PROJECTS } from '@/utils/consts/index';
import PageHeader from '@/components/PageHeader';
export default function Project() {
  return (
    <Container>
      <div className='flex flex-col gap-5 rounded-3xl bg-white px-4 py-4 dark:border dark:border-slate-800 dark:bg-slate-900'>
        <PageHeader />
        <h1 className='w-full text-center text-3xl font-semibold text-slate-950 md:text-4xl dark:text-zinc-100'>
          Projects
        </h1>
        <div className='mx-auto flex w-full flex-col flex-wrap gap-5 sm:flex-row sm:justify-center md:gap-8'>
          {PROJECTS.map((project) => (
            <SingleProject project={project} key={project.name} />
          ))}
        </div>
      </div>
      <ContactMe />
    </Container>
  );
}
