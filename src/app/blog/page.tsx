import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogPage from './BlogPage';
import BlogTabs from './BlogTabs';

const BASE_TITLE = 'Blogs | Neeraj Adhav';
const BASE_DESCRIPTION =
  'Explore insightful blogs by Neeraj Adhav on Linux, programming, AI, and more.';
const BASE_URL = 'https://www.neerajadhav.in/blog';
const PREVIEW_IMAGE = '/OG-Images/blog.png';

export const metadata: Metadata = {
  title: BASE_TITLE,
  description: BASE_DESCRIPTION,
  keywords: [
    'Neeraj Adhav',
    'technology',
    'programming',
    'AI',
    'Next.js',
    'blogs',
  ],
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
  robots: 'index, follow',
  authors: [{ name: 'Neeraj Adhav', url: 'https://www.neerajadhav.in' }],
  alternates: {
    canonical: BASE_URL,
  },
};

const Page = () => {
  return (
    <>
      <div className='hidden'>
        <h1>{BASE_TITLE}</h1>
      </div>
      <Suspense fallback={<BlogPage />}>
        <BlogTabs />
      </Suspense>
    </>
  );
};

export default Page;
