'use client';
import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { usePublicationQuery } from '../../generated/graphq';
import PageSection from './PageSection';
import { SingleBlog } from './SingleBlog';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const Blogs = () => {
  const { data } = usePublicationQuery({
    host,
  });

  if (!data || !data.publication) return null;
  const posts = data.publication.posts.edges;

  return (
    <>
      <PageSection
        title='Blogs'
        link={{
          href: '/blog',
          text: 'All blogs',
          icon: <ArrowRightIcon className='h-4 w-4' />,
        }}
      >
        {posts.length > 0 && (
          <div className='flex w-full flex-col gap-1 md:flex-row lg:gap-0'>
            {posts.map((edge) => (
              <SingleBlog blogInfo={edge.node} key={edge.node.id} />
            ))}
          </div>
        )}
        {posts.length === 0 && (
          <p className='flex w-full flex-1 items-center justify-center gap-3 text-lg font-semibold'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            No posts found
          </p>
        )}
      </PageSection>
    </>
  );
};
