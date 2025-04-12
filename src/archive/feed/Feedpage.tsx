import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import PageSection from '@/components/PageSection';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import MastodonPost from './MastodonPost';

const accessToken = process.env.NEXT_MASTODON_ACCESS_TOKEN as string;
const MASTODON_USERNAME = process.env.NEXT_MASTODON_USERNAME as string;
const MASTODON_INSTANCE = process.env.NEXT_MASTODON_INSTANCE as string;
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
    in_reply_to_id?: string | null;
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

    const posts = await postsResponse.json();

    // Filter out replies
    return posts.filter(
      (post: MastodonPostProps['post']) => !post.in_reply_to_id
    );
  } catch (error) {
    console.error('Error fetching Mastodon posts:', error);
    return [];
  }
};

const FeedPage = async () => {
  const posts: MastodonPostProps['post'][] = await fetchPosts();

  return (
    <Container>
      <PageSection
        title='Feed'
        link={{
          href: PROFILE_URL,
          text: 'Mastodon',
          icon: <ArrowTopRightOnSquareIcon className='h-4 w-4' />,
        }}
        className='p-0 lg:p-0'
      >
        <div className='mx-auto flex max-w-xl flex-col gap-6'>
          {posts.length > 0 ? (
            posts.map((post: MastodonPostProps['post']) => (
              <MastodonPost key={post.id} post={post} />
            ))
          ) : (
            <p className='text-center text-gray-500 dark:text-gray-400'>
              No posts available
            </p>
          )}
          <div className='flex items-center justify-center'>
            <a
              href='//sciences.social/@neerajadhav'
              className='flex items-center gap-2 rounded-full border border-gray-400 px-5 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-950 lg:mb-3'
            >
              Visit Mastodon Profile{' '}
              <ArrowTopRightOnSquareIcon className='h-4 w-4' />
            </a>
          </div>
        </div>
      </PageSection>
      <ContactMe />
    </Container>
  );
};

export default FeedPage;
