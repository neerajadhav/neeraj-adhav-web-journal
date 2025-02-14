import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import MastodonPost from './MastodonPost';

const accessToken = process.env.NEXT_MASTODON_ACCESS_TOKEN as string;

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

interface MastodonPostType {
  id: string;
  created_at: string;
  content: string;
  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  account: Account;
  media_attachments: MediaAttachment[];
  url: string;
}

const fetchPosts = async (): Promise<MastodonPostType[]> => {
  try {
    const userResponse = await fetch(
      'https://sciences.social/api/v1/accounts/lookup?acct=neerajadhav',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: 'no-store',
      }
    );

    if (!userResponse.ok) throw new Error('Failed to fetch user data');

    const userData = await userResponse.json();
    const userId = userData.id;

    const postsResponse = await fetch(
      `https://sciences.social/api/v1/accounts/${userId}/statuses`,
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
  const posts = await fetchPosts();

  return (
    <Container>
      <div className='flex flex-col gap-5 rounded-3xl bg-white px-4 py-4 dark:border dark:border-slate-800 dark:bg-slate-900'>
        <PageHeader />
        <div className='flex w-full flex-row items-center justify-between'>
          <h2 className='text-2xl font-semibold dark:text-zinc-100'>Feed</h2>
        </div>
        <div className='mx-auto flex flex-col gap-6'>
          {posts.map((post) => (
            <MastodonPost key={post.id} post={post} />
          ))}
        </div>
      </div>
      <ContactMe />
    </Container>
  );
};

export default MastodonFeed;
