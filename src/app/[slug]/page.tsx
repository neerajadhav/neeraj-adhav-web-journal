'use client';
import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import { CoverImage } from '@/components/CoverImage';
import { MarkdownToHtml } from '@/components/MarkdownToHtml';
import { formatDate } from '@/utils/consts/format-date';
import handleMathJax from '@/utils/handle-math-jax';
import { resizeImage } from '@/utils/image';
import { loadIframeResizer } from '@/utils/services/embed';
import { triggerCustomWidgetEmbed } from '@/utils/trigger-custom-widget-embed';
import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usePostQuery } from '../../../generated/graphq';
import { useEmbeds } from '../../../hooks/useEmbeds';

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export default function BlogContent({ params }: { params: { slug: string } }) {
  const { data, error } = useQuery({
    queryKey: usePostQuery.getKey({
      host,
      slug: params.slug,
    }),
    queryFn: usePostQuery.fetcher({
      host,
      slug: params.slug,
    }),
  });

  if (!data || error) throw error;
  const post = data.publication?.post;
  if (!post) notFound();

  const [, setMobMount] = useState(false);
  const [canLoadEmbeds, setCanLoadEmbeds] = useState(false);
  useEmbeds({ enabled: canLoadEmbeds });

  useEffect(() => {
    if (screen.width <= 425) {
      setMobMount(true);
    }

    if (!data) {
      return;
    }

    (async () => {
      await loadIframeResizer();
      triggerCustomWidgetEmbed(post.id.toString());
      setCanLoadEmbeds(true);
    })();
  }, [data, post.id]);

  if (post.hasLatexInPost) {
    setTimeout(() => {
      handleMathJax(true);
    }, 500);
  }

  const coverImageSrc = post.coverImage?.url
    ? resizeImage(post.coverImage.url, {
        w: 1600,
        h: 840,
        c: 'thumb',
      })
    : undefined;

  return (
    <Container>
      <article className='mx-auto w-full max-w-4xl border bg-white p-4 dark:border dark:border-slate-800 dark:bg-slate-900 print:border-0 print:p-0 print:text-justify print:shadow-none'>
        <div className='mb-4 flex w-full flex-col gap-5 text-slate-950 dark:text-zinc-300'>
          <h1 className='mb-2 w-full pt-4 text-center text-2xl font-bold md:text-3xl dark:text-zinc-100 print:text-3xl print:font-extrabold'>
            {post.title}
          </h1>
          {post.coverImage?.url && (
            <CoverImage
              title={post.title}
              priority={true}
              src={coverImageSrc}
            />
          )}
          <div className='flex w-full flex-wrap items-center justify-center text-sm italic'>
            Article by&nbsp;{' '}
            <span className='font-medium'>{post.author.name}</span> &nbsp;
            &#x2022; &nbsp;Published on&nbsp;{' '}
            <time className='font-medium'>{formatDate(post.publishedAt)}</time>
          </div>
        </div>

        <hr className='mb-6 h-px border-0 bg-zinc-200 dark:bg-slate-800' />
        {post.content.markdown && (
          <MarkdownToHtml contentMarkdown={post.content.markdown} />
        )}
        <hr className='mb-4 h-px border-0 bg-zinc-200 dark:bg-slate-800' />
        {post.tags?.length && (
          <div className='flex w-full flex-wrap gap-3 text-slate-950 dark:text-zinc-300 print:hidden'>
            {post.tags.map((tag) => (
              <li key={tag.id} className='list-none'>
                <a
                  href={`//hashnode.com/n/${tag.slug}`}
                  target='_blank'
                  className='rounded-full border border-zinc-100 px-3 py-1 text-sm hover:border-zinc-200 hover:bg-zinc-100 dark:border-slate-800 dark:hover:border-slate-700 dark:hover:bg-slate-950'
                >
                  #{tag.name}
                </a>
              </li>
            ))}
          </div>
        )}
      </article>
      <ContactMe />
    </Container>
  );
}
