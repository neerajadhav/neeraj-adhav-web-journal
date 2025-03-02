import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import PageSection from '@/components/PageSection';
import { Metadata } from 'next';
import { Suspense } from 'react';
import BlogPage from './BlogPage';
import BlogTabs from './BlogTabs';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

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
      <Container>
        <PageSection
          title='Blog'
          link={{
            href: 'https://github.com/neerajadhav/neeraj-adhav-web-journal/discussions',
            text: 'Visit Forum',
            icon: <ArrowTopRightOnSquareIcon className='h-4 w-4' />,
          }}
        >
          <Suspense fallback={<BlogPage />}>
            <BlogTabs />
          </Suspense>
        </PageSection>
        <ContactMe />
      </Container>
    </>
  );
};

export default Page;
