import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import { SingleProject } from '@/components/SingleProject';
import { PROJECTS } from '@/utils/consts/index';
export default function Project() {
  return (
    <Container>
      <div className='flex flex-col gap-5 border bg-white dark:border dark:border-slate-800 dark:bg-slate-900'>
        <div className='flex w-full flex-row items-center justify-between border-b px-4 py-1 lg:py-2 dark:border-slate-800'>
          <h2 className='font-semibold lg:text-xl dark:text-zinc-100'>
            Projects
          </h2>
        </div>
        <div className='mx-auto flex w-full flex-col flex-wrap gap-5 px-5 pb-5 sm:flex-row sm:justify-center md:gap-8'>
          {PROJECTS.map((project) => (
            <SingleProject project={project} key={project.name} />
          ))}
        </div>
      </div>
      <ContactMe />
    </Container>
  );
}
