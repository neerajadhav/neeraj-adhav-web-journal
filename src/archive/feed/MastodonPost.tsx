import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Image from 'next/image';
import React from 'react';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

type MediaAttachment = {
  id: string;
  type: string;
  url: string;
  preview_url?: string;
};

type Account = {
  username: string;
  display_name: string;
  avatar_static: string;
  acct: string;
};

type MastodonPostProps = {
  post: {
    id: string;
    created_at: string;
    content: string;
    replies_count: number;
    reblogs_count: number;
    favourites_count: number;
    account: Account;
    media_attachments: MediaAttachment[];
    url: string;
  };
};

const MastodonPost: React.FC<MastodonPostProps> = ({ post }) => {
  return (
    <div className='border-b border-gray-300 p-4 dark:border-gray-700 lg:border-t-0 last:border-b-0'>
      {/* User Info */}
      <div className='mb-3 flex items-center space-x-3'>
        <img
          src={post.account.avatar_static}
          alt='Avatar'
          width={'2.5rem'}
          height={'2.5rem'}
          className='h-10 w-10 rounded-full'
        />
        <div>
          <p className='font-semibold text-gray-900 dark:text-gray-100'>
            {timeAgo.format(new Date(post.created_at))}
          </p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            <a
              href={`https://sciences.social/@${post.account.acct}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              @{post.account.acct}
            </a>
          </p>
        </div>
      </div>

      {/* Post Content */}
      <div
        className='hashnode-content-style mb-3 text-gray-800 dark:text-gray-200'
        style={{ fontSize: '16px' }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>

      {/* Media Attachments */}
      {post.media_attachments.length > 0 && (
        <div className='mt-2'>
          {post.media_attachments.map((media) => (
            <Image
              key={media.id}
              width={500}
              height={500}
              src={media.preview_url || media.url}
              alt='Post Attachment'
              priority
              className='max-h-64 w-full rounded-lg object-cover'
            />
          ))}
        </div>
      )}

      {/* Post Metadata */}
      <div className='mt-3 flex w-full justify-between text-sm text-gray-500 dark:text-gray-400'>
        <a
          href={post.url}
          target='_blank'
          rel='noopener noreferrer'
          className='w-full text-end text-blue-500 hover:underline'
        >
          Open Thread
        </a>
      </div>
    </div>
  );
};

export default MastodonPost;
