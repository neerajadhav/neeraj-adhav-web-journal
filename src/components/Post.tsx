import { formatDate } from '../../public/utils/consts/format-date';
import { getBlurDataUrl } from '../../public/utils/getBlurDataUrl';
import { resizeImage } from '../../public/utils/image';
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

export const Post = (props: PostProps) => {
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
      className={`flex ${props.first ? 'w-full lg:w-2/3' : 'w-full'} flex-col items-center gap-4 rounded-xl hover:opacity-90`}
    >
      <div className='flex aspect-video w-full overflow-hidden rounded-lg'>
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
      <div className='flex w-full flex-col px-3 text-gray-950 dark:text-zinc-300'>
        <h3
          className={`mb-5 line-clamp-3 font-semibold dark:text-zinc-100 ${props.first ? 'text-2xl lg:text-4xl' : 'text-xl'}`}
        >
          {postInfo.title}
        </h3>
        <div className='mb-3 flex w-full flex-row justify-between text-xs'>
          <p className='flex flex-row items-center gap-1'>
            <ClockIcon className='h-4 w-4' />
            {formatDate(postInfo.publishedAt)}
          </p>
          {/* <p className='flex flex-row items-center gap-2'>
            <ArrowTrendingUpIcon className='h-4 w-4' />
            {postInfo.views}
          </p> */}
        </div>
      </div>
    </Link>
  );
};
