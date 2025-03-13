'use client';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { FaComment, FaRetweet, FaStar } from 'react-icons/fa';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Image from 'next/legacy/image';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

const MediaAttachment = ({ media, index, onClick, isFirst }: any) => (
  <div
    className={`relative cursor-pointer overflow-hidden rounded-lg ${
      isFirst ? 'h-80 w-full' : 'h-28 w-full'
    }`}
    onClick={() => onClick(index)}
  >
    <Image
      src={media.preview_url || media.url}
      alt='Post Attachment'
      layout='fill'
      objectFit='cover'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      className='rounded-lg'
      priority={isFirst} // Prioritize first image
    />
  </div>
);

type MediaAttachmentType = {
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
    media_attachments: MediaAttachmentType[];
    url: string;
  };
};

const MastodonPost: React.FC<MastodonPostProps> = ({ post }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className='flex gap-3 p-1'>
      {/* Post Content */}
      <div className='flex w-full flex-col space-y-2'>
        <div className='flex items-center gap-3'>
          {/* User Info */}
          <Image
            src={post.account.avatar_static}
            alt='Avatar'
            width={45}
            height={45}
            className='h-10 w-10 rounded-lg'
          />
          <div>
            <p className='font-semibold text-gray-900 dark:text-gray-100'>
              {timeAgo.format(new Date(post.created_at))}
            </p>
            <p className='text-gray-500 dark:text-gray-400'>
              <a
                href={`https://sciences.social/@${post.account.acct}`}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                @{post.account.acct}
              </a>
            </p>
          </div>
        </div>

        {/* Post Text */}
        <div
          className='masto-content-style overflow-hidden break-words text-gray-800 dark:text-gray-200'
          style={{ fontSize: '16px', wordWrap: 'break-word' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Media Attachments */}
        {post.media_attachments.length > 0 && (
          <div className='my-2'>
            <MediaAttachment
              key={post.media_attachments[0].id}
              media={post.media_attachments[0]}
              index={0}
              onClick={openLightbox}
              isFirst={true}
            />

            {post.media_attachments.length > 1 && (
              <div className='mt-2 flex gap-2 overflow-x-auto'>
                {post.media_attachments.slice(1, 4).map((media, index) => (
                  <MediaAttachment
                    key={media.id}
                    media={media}
                    index={index + 1}
                    onClick={openLightbox}
                    isFirst={false}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Reply Link */}
        <div className='flex items-center justify-end'>
          <p className='text-sm font-bold text-gray-500 dark:text-gray-400'>
            <a
              href={post.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex w-full text-end text-blue-500 hover:underline'
            >
              Reply
            </a>
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={post.media_attachments[photoIndex].url}
          nextSrc={
            post.media_attachments[
              (photoIndex + 1) % post.media_attachments.length
            ].url
          }
          prevSrc={
            post.media_attachments[
              (photoIndex + post.media_attachments.length - 1) %
                post.media_attachments.length
            ].url
          }
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + post.media_attachments.length - 1) %
                post.media_attachments.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % post.media_attachments.length)
          }
        />
      )}
    </div>
  );
};

export default MastodonPost;
