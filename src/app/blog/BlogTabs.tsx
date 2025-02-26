'use client';

import { Container } from '@/components/Container';
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
    <Container>
      <div className='w-full select-none overflow-x-auto border-y border-gray-700'>
        <div className='flex w-full'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`flex-shrink-0 px-4 py-3 transition-colors focus:outline-none ${
                activeTab === index
                  ? 'border-b-2 border-blue-500 font-bold text-blue-500 dark:text-blue-400'
                  : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div>{tabs[activeTab].content}</div>
    </Container>
  );
};

export default BlogTabs;
