'use client';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Image from 'next/legacy/image';
import React, { useState } from 'react';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';

TimeAgo.addLocale(en);
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const imageUrls = post.media_attachments.map((media) => media.url);
  const attachmentCount = post.media_attachments.length;

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className='p-4'>
      {/* User Info */}
      <div className='mb-3 flex items-center space-x-3'>
        <Image
          src={post.account.avatar_static}
          alt='Avatar'
          width={40}
          height={40}
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

      {/* Media Attachments with Finetuned Layout */}
      {attachmentCount > 0 && (
        <div className='mt-2'>
          {attachmentCount === 1 && (
            <div
              className='relative h-80 w-full cursor-pointer overflow-hidden rounded-lg'
              onClick={() => openLightbox(0)}
            >
              <Image
                src={
                  post.media_attachments[0].preview_url ||
                  post.media_attachments[0].url
                }
                alt='Post Attachment'
                layout='fill'
                objectFit='cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='rounded-lg'
              />
            </div>
          )}

          {attachmentCount === 2 && (
            <div className='grid grid-cols-2 gap-2'>
              {post.media_attachments.map((media, index) => (
                <div
                  key={media.id}
                  className='relative h-60 w-full cursor-pointer overflow-hidden rounded-lg'
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={media.preview_url || media.url}
                    alt='Post Attachment'
                    layout='fill'
                    objectFit='cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='rounded-lg'
                  />
                </div>
              ))}
            </div>
          )}

          {attachmentCount === 3 && (
            <div className='grid grid-cols-3 gap-2'>
              {/* Large image on the left */}
              <div
                className='relative col-span-2 row-span-2 h-80 w-full cursor-pointer overflow-hidden rounded-lg'
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={
                    post.media_attachments[0].preview_url ||
                    post.media_attachments[0].url
                  }
                  alt='Post Attachment'
                  layout='fill'
                  objectFit='cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw'
                  className='rounded-lg'
                />
              </div>
              {/* Two smaller images on the right */}
              <div
                className='relative h-40 w-full cursor-pointer overflow-hidden rounded-lg'
                onClick={() => openLightbox(1)}
              >
                <Image
                  src={
                    post.media_attachments[1].preview_url ||
                    post.media_attachments[1].url
                  }
                  alt='Post Attachment'
                  layout='fill'
                  objectFit='cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw'
                  className='rounded-lg'
                />
              </div>
              <div
                className='relative h-40 w-full cursor-pointer overflow-hidden rounded-lg'
                onClick={() => openLightbox(2)}
              >
                <Image
                  src={
                    post.media_attachments[2].preview_url ||
                    post.media_attachments[2].url
                  }
                  alt='Post Attachment'
                  layout='fill'
                  objectFit='cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw'
                  className='rounded-lg'
                />
              </div>
            </div>
          )}

          {attachmentCount >= 4 && (
            <div className='grid grid-cols-2 gap-2'>
              {post.media_attachments.slice(0, 4).map((media, index) => (
                <div
                  key={media.id}
                  className='relative h-60 w-full cursor-pointer overflow-hidden rounded-lg'
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={media.preview_url || media.url}
                    alt='Post Attachment'
                    layout='fill'
                    objectFit='cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='rounded-lg'
                  />
                  {index === 3 && attachmentCount > 4 && (
                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                      <span className='text-2xl font-bold text-white'>
                        +{attachmentCount - 4}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Lightbox for Full Resolution Images using yet-another-react-lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={post.media_attachments.map((media) => ({
            src: media.url,
            alt: 'Post Attachment',
          }))}
          index={photoIndex}
        />
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
