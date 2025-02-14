import { Tomorrow } from 'next/font/google';
const poppins = Tomorrow({ subsets: ['latin'], weight: '800' });

const PageHeader = () => {
  return (
    <div
      className={`flex w-full flex-col items-center gap-7 rounded-xl border bg-slate-100 p-4 text-slate-500 shadow-md md:flex-row lg:text-left dark:border dark:border-slate-800 dark:bg-slate-700 dark:text-zinc-300 ${poppins.className}`}
    >
      <div className='w-full text-center text-2xl font-extrabold lg:text-3xl'>
        Neeraj Says
      </div>
    </div>
  );
};

export default PageHeader;
