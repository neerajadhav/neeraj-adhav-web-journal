'use client';
import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import { Post } from '@/components/Post';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import {
  useInfinitePostsQuery,
  usePostsQuery,
} from '../../../generated/graphq';

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export default function Blog() {
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
            pageSize: 12,
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
    <Container>
      <div className='bg-erd-min-h-80 flex flex-col border bg-white text-slate-950 dark:border dark:border-slate-800 dark:bg-slate-900 dark:text-zinc-300'>
        <div className='flex w-full flex-row items-center justify-between border-b p-4 dark:border-slate-800'>
          <h2 className='text-2xl font-semibold dark:text-zinc-100'>Blog</h2>
        </div>
        {posts.length === 0 && (
          <p className='flex w-full flex-1 items-center justify-center gap-3 text-lg font-semibold'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            No posts found
          </p>
        )}
        <div className='flex flex-col gap-4 p-4'>
          {posts.length > 0 && (
            <>
              <div className='flex flex-col gap-4 lg:flex-row'>
                {posts.length > 0 && <Post postInfo={posts[0]} first={true} />}
                <div className='flex flex-col gap-6 lg:w-1/3'>
                  {posts.length > 0 && <Post postInfo={posts[1]} />}
                  {posts.length > 0 && <Post postInfo={posts[2]} />}
                </div>
              </div>
              <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {posts.slice(3).map((post, index) => (
                  <div key={index + 1} className='mb-4 w-full'>
                    <Post postInfo={post} />
                  </div>
                ))}
              </div>
              <div className='flex justify-center px-5'>
                {hasNextPage && (
                  <button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className='mt-5 flex-row items-center gap-2 rounded-full border border-slate-400 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-700 hover:text-white dark:border-slate-600 dark:text-zinc-300 dark:hover:bg-slate-950'
                  >
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                  </button>
                )}
                {!hasNextPage && (
                  <p className='mt-3 text-center text-gray-500'>
                    You have reached the end
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <ContactMe />
    </Container>
  );
}
