import Script from 'next/script';
import { ResolvingMetadata, Metadata } from 'next';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { usePostQuery, PostQuery } from '../../../generated/graphq';
import getQueryClient from '../../utils/getQueryClient';
import { getAutogeneratedPostOG } from '../../utils/social/og';
import '../../utils/highlight';

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

interface SlugLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: usePostQuery.getKey({
      host,
      slug: props.params.slug,
    }),
    queryFn: usePostQuery.fetcher({
      host,
      slug: props.params.slug,
    }),
  });
  const data = queryClient.getQueryData<PostQuery>(
    usePostQuery.getKey({
      host,
      slug: props.params.slug,
    })
  );
  const post = data?.publication?.post!;
  if (!post) return {};

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.subtitle || post.brief,
    twitter: {
      card: 'summary_large_image',
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.subtitle || post.brief,
      images: [
        {
          url:
            post.ogMetaData?.image ||
            post.coverImage?.url ||
            getAutogeneratedPostOG(post, data?.publication!),
          width: 1200,
          height: 630,
        },
      ],
    },
    openGraph: {
      title: post.seo?.title || post.title,
      url: post.url,
      type: 'article',
      description: post.seo?.description || post.subtitle || post.brief,
      images: [
        {
          url:
            post.ogMetaData?.image ||
            post.coverImage?.url ||
            getAutogeneratedPostOG(post, data?.publication!),
          width: 1200,
          height: 630,
        },
      ],
    },
    other: {
      'fediverse:creator': '@neerajadhav@sciences.social',
    },
  };
}

export default async function SlugLayout({
  children,
  params,
}: SlugLayoutProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: usePostQuery.getKey({
      host,
      slug: params.slug,
    }),
    queryFn: usePostQuery.fetcher({
      host,
      slug: params.slug,
    }),
  });

  return (
    <>
      <div className='fixed top-0 z-50 hidden h-full w-full flex-col items-center justify-center bg-white text-black dark:print:flex'>
        <h1 className='text-3xl font-bold'>
          Print your document in Light mode
        </h1>
        <p>You can find the toggle in the footer of the website</p>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
      <Script src='../utils/highlight.js' />
    </>
  );
}
