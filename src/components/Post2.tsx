import { formatDate } from '../utils/consts/format-date';
import { getBlurDataUrl } from '../utils/getBlurDataUrl';
import { resizeImage } from '../utils/image';
import { ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PostProps {
  postInfo:
    | {
        __typename?: 'Post' | undefined;
        id: string;
        slug: string;
        title: string;
        views: number;
        brief: string;
        publishedAt: any;
        coverImage?:
          | {
              __typename?: 'PostCoverImage' | undefined;
              url: string;
            }
          | null
          | undefined;
      }
    | undefined;
  first?: boolean;
}

export const Post2 = (props: PostProps) => {
  const { postInfo } = props;

  if (!postInfo) return null;

  const postImageSrc = postInfo.coverImage?.url
    ? resizeImage(postInfo.coverImage.url, {
        w: 1040,
        h: 585,
        c: 'cover',
      })
    : undefined;

  const blurDataURL = postImageSrc && getBlurDataUrl(postImageSrc);

  return (
    <Link
      href={`/${postInfo.slug}`}
      className={`flex flex-col items-start gap-3 lg:gap-4 rounded-lg border-0 p-2 hover:opacity-90 dark:border-bgDark lg:p-6`}
    >
      {formatDate(postInfo.publishedAt)}
      <div className='flex flex-col items-start gap-4 lg:flex-row'>
        <div className='flex w-full flex-col text-gray-950 dark:text-zinc-300'>
          <h3
            className={`mb-1 line-clamp-2 font-extrabold dark:text-zinc-100 text-xl`}
          >
            {postInfo.title}
          </h3>
          <p className='line-clamp-3 text-sm'>{postInfo.brief || 'none'}</p>
        </div>
        <div className='flex aspect-video overflow-hidden rounded-lg lg:w-3/5'>
          {postInfo.coverImage?.url ? (
            <Image
              src={postImageSrc}
              alt='Post Image'
              width={1040}
              height={585}
              className='flex-1'
              placeholder='blur'
              blurDataURL={blurDataURL}
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
      </div>
    </Link>
  );
};
