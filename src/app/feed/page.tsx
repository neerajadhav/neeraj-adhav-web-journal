import React from 'react';
import FeedPage from './Feedpage';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

// const MASTODON_USERNAME = process.env.NEXT_MASTODON_USERNAME as string;
// const MASTODON_INSTANCE = process.env.NEXT_MASTODON_INSTANCE as string;

const font = Inter({ subsets: ['latin'], weight: '400' });

const BASE_TITLE = 'My Feed | Neeraj Adhav';
const BASE_DESCRIPTION =
  'Stay updated with my latest Social Media posts. Follow me for insights and updates!';
const PREVIEW_IMAGE = '/OG-Images/feed.png';
const BASE_URL = 'https://www.neerajadhav.in/feed';

export const metadata: Metadata = {
  title: BASE_TITLE,
  description: BASE_DESCRIPTION,
  keywords: ['Mastodon', 'social media', 'feed', 'updates', 'posts', 'Next.js'],
  robots: 'index, follow',
  authors: [{ name: 'Neeraj Adhav', url: 'https://www.neerajadhav.in' }],
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
    <div className={`${font.className}`}>
      <div className='hidden'>
        <h1>{BASE_TITLE}</h1>
      </div>
      <FeedPage />
    </div>
  );
};

export default page;
