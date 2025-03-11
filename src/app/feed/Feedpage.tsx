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

const FeedPage = async () => {
  const posts: MastodonPostProps['post'][] = await fetchPosts();

  return (
    <Container>
      <PageSection
        title='My Feed'
        link={{
          href: PROFILE_URL,
          text: 'Visit Mastodon',
          icon: <ArrowTopRightOnSquareIcon className='h-4 w-4' />,
        }}
        className='p-0 lg:p-0'
      >
        <div className='mx-auto flex max-w-lg flex-col gap-3 lg:gap-0 lg:pt-0'>
          {posts.length > 0 ? (
            <>
              {posts.map((post: MastodonPostProps['post']) => (
                <MastodonPost key={post.id} post={post} />
              ))}
            </>
          ) : (
            <p className='text-center text-gray-500 dark:text-gray-400'>
              No posts available
            </p>
          )}
        </div>
      </PageSection>
      <ContactMe />
    </Container>
  );
};

export default FeedPage;
