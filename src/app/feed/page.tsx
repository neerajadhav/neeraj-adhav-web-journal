import React from 'react';
import FeedPage from './Feedpage';
import { Metadata } from 'next';

// const MASTODON_USERNAME = process.env.NEXT_MASTODON_USERNAME as string;
// const MASTODON_INSTANCE = process.env.NEXT_MASTODON_INSTANCE as string;

const BASE_TITLE = 'My Feed | Neeraj Adhav';
const BASE_DESCRIPTION =
  'Stay updated with my latest Social Media posts. Follow me for insights and updates!';
const PREVIEW_IMAGE = '/OG-Images/feed.png';
const BASE_URL = 'www.neerajadhav.in/feed';

export const metadata: Metadata = {
  title: BASE_TITLE,
  description: BASE_DESCRIPTION,
  keywords: ['Mastodon', 'social media', 'feed', 'updates', 'posts', 'Next.js'],
  robots: 'index, follow',
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: BASE_TITLE,
    description: BASE_DESCRIPTION,
    url: BASE_URL,
    type: 'website',
    images: [PREVIEW_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: BASE_TITLE,
    description: BASE_DESCRIPTION,
    images: [PREVIEW_IMAGE],
  },
};

const page = () => {
  return (
    <>
      <div className='hidden'>
        <h1>{BASE_TITLE}</h1>
      </div>
      <FeedPage />
    </>
  );
};

export default page;
