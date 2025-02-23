import Header from '@/components/PageHeader';
import { ReactQueryProvider } from '@/components/ReactQueryProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata, ResolvingMetadata } from 'next';
import { Ubuntu } from 'next/font/google';
import { PublicationQuery, usePublicationQuery } from '../../generated/graphq';
import getQueryClient from '../../public/utils/getQueryClient';
import './globals.css';
import Notice from '@/components/Notice';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '400' }); // Load font with weight

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;
config.autoAddCss = false;

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: usePublicationQuery.getKey({ host }),
    queryFn: usePublicationQuery.fetcher({ host }),
  });

  const data = queryClient.getQueryData<PublicationQuery>(
    usePublicationQuery.getKey({ host })
  );

  if (!data?.publication) return {};

  return {
    title: data.publication.author.name,
    description:
      data.publication.descriptionSEO ||
      `${data.publication.author.name}'s Blog` ||
      '',
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || 'https://neerajadhav.in'
    ),
    icons: {
      icon: '/favicon.ico',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        data.publication.displayTitle ||
        data.publication.title ||
        'Web Journal',
      description:
        data.publication.descriptionSEO ||
        data.publication.title ||
        `${data.publication.author.name}'s Blog` ||
        '',
      // images: [
      //   {
      //     url:
      //       data.publication.ogMetaData?.image ||
      //       getAutogeneratedPublicationOG(data.publication),
      //     width: 1200,
      //     height: 630,
      //   },
      // ],
    },
    openGraph: {
      title:
        data.publication.displayTitle ||
        data.publication.title ||
        'Hashnode Blog Starter Kit',
      description:
        data.publication.descriptionSEO ||
        data.publication.title ||
        `${data.publication.author.name}'s Blog` ||
        '',
      // images: [
      //   {
      //     url:
      //       data.publication.ogMetaData?.image ||
      //       getAutogeneratedPublicationOG(data.publication),
      //     width: 1200,
      //     height: 630,
      //   },
      // ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: usePublicationQuery.getKey({ host }),
    queryFn: usePublicationQuery.fetcher({ host }),
  });

  const data = queryClient.getQueryData<PublicationQuery>(
    usePublicationQuery.getKey({ host })
  );

  if (!data?.publication)
    throw new Error('Please check the host name in your .env file');

  return (
    <html lang='en'>
      <body className={`${ubuntu.className} bg-[#f6f6f6] dark:bg-black`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <Header />
              <Notice />
              {children}
              <SpeedInsights />
              <Analytics />
              {/* <Navbar /> */}
            </HydrationBoundary>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
