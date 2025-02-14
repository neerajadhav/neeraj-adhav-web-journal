import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import MastodonPost from './MastodonPost';

const accessToken = process.env.NEXT_MASTODON_ACCESS_TOKEN as string;

const MASTODON_USERNAME = 'neerajadhav';
const MASTODON_INSTANCE = 'https://sciences.social';
const PROFILE_URL = `${MASTODON_INSTANCE}/@${MASTODON_USERNAME}`;

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

const fetchPosts = async () => {
  try {
    const userResponse = await fetch(
      `${MASTODON_INSTANCE}/api/v1/accounts/lookup?acct=${MASTODON_USERNAME}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: 'no-store',
      }
    );

    if (!userResponse.ok) throw new Error('Failed to fetch user data');

    const userData = await userResponse.json();
    const userId = userData.id;

    const postsResponse = await fetch(
      `${MASTODON_INSTANCE}/api/v1/accounts/${userId}/statuses?limit=10`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: 'no-store',
      }
    );

    if (!postsResponse.ok) throw new Error('Failed to fetch posts');

    return await postsResponse.json();
  } catch (error) {
    console.error('Error fetching Mastodon posts:', error);
    return [];
  }
};

const MastodonFeed = async () => {
  const posts: MastodonPostProps['post'][] = await fetchPosts();

  return (
    <Container>
      <div className='flex flex-col gap-5 rounded-3xl bg-white px-4 py-4 dark:border dark:border-slate-800 dark:bg-slate-900'>
        <PageHeader />
        <div className='flex w-full flex-row items-center justify-between border-b dark:border-slate-800 pb-4'>
          <h2 className='text-2xl font-semibold dark:text-zinc-100'>Feed</h2>
          <a
            href={PROFILE_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='hidden flex-row items-center gap-2 rounded-full border border-slate-400 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-700 hover:text-white md:flex dark:border-slate-600 dark:text-zinc-300 dark:hover:bg-slate-950'
          >
            Visit Mastodon <ArrowTopRightOnSquareIcon className='h-4 w-4' />
          </a>
        </div>
        <div className='mx-auto flex flex-col gap-6'>
          {posts.length > 0 ? (
            <>
              {posts.map((post: MastodonPostProps['post']) => (
                <MastodonPost key={post.id} post={post} />
              ))}
            </>
          ) : (
            <p className='text-gray-500 dark:text-gray-400'>
              No posts available
            </p>
          )}
        </div>
        <Link
          href={PROFILE_URL}
          target='_blank'
          className='flex flex-row items-center gap-2 self-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 sm:text-base md:hidden'
        >
          Visit Mastodon <ArrowTopRightOnSquareIcon className='h-4 w-4' />
        </Link>
      </div>
      <ContactMe />
    </Container>
  );
};

export default MastodonFeed;
