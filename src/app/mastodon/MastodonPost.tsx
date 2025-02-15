import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

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
    <div className='max-w-lg rounded-xl border border-gray-300 bg-white p-4 dark:border-gray-700 dark:bg-gray-900'>
      {/* User Info */}
      <div className='mb-3 flex items-center space-x-3'>
        <img
          src={post.account.avatar_static}
          alt='Avatar'
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
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>

      {/* Media Attachments */}
      {post.media_attachments.length > 0 && (
        <div className='mt-2'>
          {post.media_attachments.map((media) => (
            <img
              key={media.id}
              src={media.preview_url || media.url}
              alt='Post Attachment'
              className='max-h-64 w-full rounded-lg object-cover'
            />
          ))}
        </div>
      )}

      {/* Post Metadata */}
      <div className='mt-3 flex justify-between text-sm text-gray-500 dark:text-gray-400'>
        <a
          href={post.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          Join Thread
        </a>
      </div>
    </div>
  );
};

export default MastodonPost;