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
        __typename?: 'Post';
        id: string;
        slug: string;
        title: string;
        views: number;
        publishedAt: any;
        brief: string;
        coverImage?: {
          __typename?: 'PostCoverImage';
          url: string;
        } | null;
      }
    | undefined;
  first?: boolean;
}

export const Post = ({ postInfo, first }: PostProps) => {
  if (!postInfo) return null;

  const postImageSrc = postInfo.coverImage?.url
    ? resizeImage(postInfo.coverImage.url, { w: 1040, h: 585, c: 'cover' })
    : undefined;
  const blurDataURL = postImageSrc && getBlurDataUrl(postImageSrc);

  return (
    <Link
      href={`/${postInfo.slug}`}
      className={`group flex flex-col items-center gap-6 w-full pb-6 transition-all duration-300 hover:opacity-85 dark:border-black md:flex-col ${
        first ? 'lg:pr-0' : ''
      }`}
    >
      {/* Content Section */}
      <div className="flex w-full flex-col gap-4 text-gray-900 dark:text-zinc-300">
        <h3
          className={`line-clamp-3 font-bold leading-tight transition-colors dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 ${
            first ? 'text-2xl lg:text-4xl' : 'text-xl'
          }`}
        >
          {postInfo.title}
        </h3>

        {/* Metadata */}
        <div className="flex w-full flex-row justify-between text-sm text-gray-600 dark:text-gray-400">
          <p className="flex items-center gap-1">
            <ClockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            {formatDate(postInfo.publishedAt)}
          </p>
        </div>

        {/* Show brief if it's the first post */}
        {first && (
          <p className="text-md text-gray-700 dark:text-gray-400 leading-relaxed">
            {postInfo.brief}
          </p>
        )}
      </div>

      {/* Image Section */}
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        {postInfo.coverImage?.url ? (
          <Image
            src={postImageSrc}
            alt={postInfo.title}
            width={1040}
            height={585}
            className="w-full h-auto object-cover rounded-lg"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
    </Link>
  );
};
