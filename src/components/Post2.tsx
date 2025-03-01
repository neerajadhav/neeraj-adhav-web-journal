import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../utils/consts/format-date';
import { getBlurDataUrl } from '../utils/getBlurDataUrl';
import { resizeImage } from '../utils/image';
import { ImagePlaceholder } from './ImagePlaceholder';

interface PostProps {
  postInfo:
    | {
        __typename?: 'Post';
        id: string;
        slug: string;
        title: string;
        views: number;
        brief: string;
        publishedAt: any;
        coverImage?: {
          __typename?: 'PostCoverImage';
          url: string;
        } | null;
      }
    | undefined;
  first?: boolean;
}

export const Post2 = ({ postInfo }: PostProps) => {
  if (!postInfo) return null;

  const postImageSrc = postInfo.coverImage?.url
    ? resizeImage(postInfo.coverImage.url, { w: 1040, h: 585, c: 'cover' })
    : undefined;
  const blurDataURL = postImageSrc && getBlurDataUrl(postImageSrc);

  return (
    <Link
      href={`/${postInfo.slug}`}
      className="group flex flex-col gap-2 rounded-xl transition-all duration-300 hover:opacity-85 dark:border-bgDark"
    >
      {/* Date */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {formatDate(postInfo.publishedAt)}
      </div>

      {/* Content Container */}
      <div className="flex flex-col-reverse lg:flex-row gap-3">
        {/* Text Section */}
        <div className="flex flex-col gap-2 text-gray-900 dark:text-zinc-300 w-full lg:w-2/3">
          <h3 className="text-xl font-semibold leading-snug dark:text-zinc-100 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {postInfo.title}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
            {postInfo.brief || 'none'}
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/3 overflow-hidden rounded-lg">
          {postImageSrc ? (
            <Image
              src={postImageSrc}
              alt={postInfo.title}
              width={1040}
              height={585}
              className="w-full h-auto object-cover rounded-lg shadow-sm"
              placeholder="blur"
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
