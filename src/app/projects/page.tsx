import { Metadata } from 'next';
import ProjectPage from './ProjectPage';

const BASE_TITLE = 'Projects | Neeraj Adhav';
const BASE_DESCRIPTION =
  'Discover projects by Neeraj Adhav, covering Linux, AI, web development, and more.';
const BASE_URL = 'https://www.neerajadhav.in/projects';
const PREVIEW_IMAGE = '/OG-Images/projects.png';

export const metadata: Metadata = {
  title: BASE_TITLE,
  description: BASE_DESCRIPTION,
  keywords: [
    'Neeraj Adhav',
    'projects',
    'Linux',
    'AI',
    'web development',
    'open-source',
    'Next.js',
  ],
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

const Page = () => {
  return (
    <>
      <div className='hidden'>
        <h1>{BASE_TITLE}</h1>
      </div>
      <ProjectPage />
    </>
  );
};

export default Page;
