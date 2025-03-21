import Link from 'next/link';
import { resizeImage } from '../utils/image';
import { CoverImage } from './CoverImage';
import { ImagePlaceholder } from './ImagePlaceholder';

interface SingleBlogProps {
  blogInfo: {
    __typename?: 'Post' | undefined;
    id: string;
    slug: string;
    title: string;
    brief: string;
    publishedAt?: any;
    coverImage?:
      | {
          __typename?: 'PostCoverImage' | undefined;
          url: string;
        }
      | null
      | undefined;
  };
}

export const SingleBlog = (props: SingleBlogProps) => {
  const { brief, title, slug } = props.blogInfo;
  const coverImageSrc = props.blogInfo.coverImage?.url
    ? resizeImage(props.blogInfo.coverImage.url, {
        w: 1600,
        h: 840,
        c: 'thumb',
      })
    : undefined;

  return (
    <Link href={`/${slug}`} className='group block w-full md:w-1/3'>
      <article className='relative flex w-full flex-col gap-3 overflow-hidden rounded-lg p-4'>
        {coverImageSrc ? (
          <CoverImage title={title} src={coverImageSrc} priority={true} />
        ) : (
          <ImagePlaceholder />
        )}
        <div className='flex flex-col gap-3'>
          <h3 className='line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400'>
            {title}
          </h3>
          <p className='line-clamp-3 text-gray-700 dark:text-gray-400'>
            {brief}
          </p>
        </div>
      </article>
    </Link>
  );
};
