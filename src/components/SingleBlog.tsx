import Link from 'next/link';
import { resizeImage } from '../../public/utils/image';
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
    <Link
      href={`/${slug}`}
      className='group w-full items-center rounded-2xl px-1 py-2 text-gray-950 sm:max-w-72 md:max-w-80 lg:max-w-96'
    >
      <article className='relative flex w-full flex-col gap-3'>
        {coverImageSrc ? (
          <CoverImage title={title} src={coverImageSrc} priority={true} />
        ) : (
          <ImagePlaceholder />
        )}
        <div className='flex flex-col gap-3'>
          <h3 className='line-clamp-2 text-xl font-semibold dark:text-zinc-100'>
            {title}
          </h3>
          <p className='line-clamp-3 text-gray-500 dark:text-zinc-300'>
            {brief}
          </p>
        </div>
      </article>
    </Link>
  );
};
