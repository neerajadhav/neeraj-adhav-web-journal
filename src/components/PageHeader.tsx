import { Tomorrow } from 'next/font/google'; // Import Google Font
import { usePublicationQuery } from '../../generated/graphq';
const poppins = Tomorrow({ subsets: ['latin'], weight: '800' }); // Load font with weight
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

const PageHeader = () => {
  const { data } = usePublicationQuery({
    host,
  });
  return (
    <div
      className={`flex w-full flex-col items-center gap-7 rounded-xl bg-slate-100 p-4 text-slate-500 shadow-md md:flex-row lg:text-left dark:border dark:border-slate-800 dark:bg-slate-700 dark:text-zinc-300 ${poppins.className}`}
    >
      <div className='w-full text-center text-2xl font-extrabold lg:text-3xl'>
        {data?.publication?.title}
      </div>
      {/* <div className='w-full'></div> */}
      {/* <div className='w-full'></div> */}
    </div>
  );
};

export default PageHeader;
