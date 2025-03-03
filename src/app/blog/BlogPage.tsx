'use client';

import Newsletter from '@/components/Newsletter';
import { Post } from '@/components/Post';
import { Post2 } from '@/components/Post2';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import {
  useInfinitePostsQuery,
  usePostsQuery,
} from '../../../generated/graphq';

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export default function BlogPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    useInfinitePostsQuery(
      {
        host,
        pageSize: 10,
        page: 1,
      },
      {
        queryFn: ({ pageParam }) =>
          usePostsQuery.fetcher({
            host,
            pageSize: 11,
            page: pageParam as number,
          })(),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          return lastPage.publication?.postsViaPage.pageInfo.nextPage ?? null;
        },
      }
    );

  if (!data || error) throw error;

  const posts =
    data.pages.flatMap((page) => page.publication?.postsViaPage.nodes) || [];

  return (
    <>
      {posts.length === 0 && (
        <p className='flex w-full flex-1 items-center justify-center gap-3 text-lg font-semibold text-gray-700 dark:text-gray-300'>
          <ExclamationTriangleIcon className='h-8 w-8 text-gray-500 dark:text-gray-400' />
          No posts found
        </p>
      )}

      <div className='flex flex-col gap-6'>
        {posts.length > 0 && (
          <div className='flex flex-col gap-6 p-4 md:flex-row lg:px-0'>
            <div className='flex flex-col justify-around md:w-1/2 md:border-0 lg:w-2/3 lg:pb-6'>
              {posts.length > 0 && <Post postInfo={posts[0]} first={true} />}
              <Newsletter />
            </div>
            <div className='flex flex-col justify-between gap-6 md:w-1/2 lg:w-1/3'>
              {posts.length > 1 && <Post postInfo={posts[1]} />}
              {posts.length > 2 && <Post postInfo={posts[2]} />}
            </div>
          </div>
        )}
      </div>

      {/* Archive Section */}
      <div className='mb-12 grid w-full grid-cols-1 gap-14 md:gap-4 lg:gap-20 px-4 sm:grid-cols-2 lg:px-0 lg:py-6'>
        {posts.slice(3).map((post, index) => (
          <div key={index + 1} className='w-full'>
            <Post2 postInfo={post} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className='flex select-none justify-center px-6'>
        {hasNextPage ? (
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className='flex items-center gap-2 rounded-full border border-gray-400 px-5 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-700 hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-950 lg:mb-3'
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </button>
        ) : (
          <p className='mt-4 text-center text-gray-500 dark:text-gray-400'>
            You have reached the end
          </p>
        )}
      </div>

      <div className='mb-3' />
    </>
  );
}
