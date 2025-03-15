'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CgDanger } from 'react-icons/cg';
import BlogPage from './BlogPage';

interface Tab {
  title: string;
  content: React.ReactNode;
}

const tabs: Tab[] = [
  {
    title: 'All Posts',
    content: <BlogPage />,
  },
  {
    title: 'Series',
    content: (
      <>
        <h1 className='flex h-52 w-full items-center justify-center gap-1'>
          <CgDanger /> <span>Page content under construction!</span>
        </h1>
      </>
    ),
  },
];

const BlogTabs: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const initialTab = Number(searchParams.get('tab')) || 0;
  const [activeTab, setActiveTab] = useState<number>(initialTab);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam !== null && !isNaN(Number(tabParam))) {
      setActiveTab(Number(tabParam));
    }
  }, [searchParams]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    router.push(`${pathname}?tab=${index}`);
  };

  return (
    <>
      <div className='w-full select-none overflow-x-auto py-3'>
        <div className='flex w-full gap-4'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`relative flex-shrink-0 rounded-lg border px-2 py-1 text-sm shadow-sm dark:border-bgDark dark:text-gray-400 dark:hover:bg-gray-50/10 lg:shadow-none ${
                activeTab === index
                  ? 'bg-gray-200 dark:bg-gray-50/10 dark:text-gray-50'
                  : 'bg-white hover:bg-white dark:bg-transparent dark:text-gray-400'
              }`}
            >
              {tab.title}
            </button>
          ))}
          <div className='text-transparent'>.</div>
        </div>
      </div>
      <div>{tabs[activeTab].content}</div>
    </>
  );
};

export default BlogTabs;
