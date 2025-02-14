import React from 'react';
import MastodonPost from './MastodonPost';
import { Container } from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { ContactMe } from '@/components/ContactMe';

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
}

const fetchPosts = async (): Promise<MastodonPostType[]> => {
  try {
    const userResponse = await fetch(
      'https://sciences.social/api/v1/accounts/lookup?acct=neerajadhav',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: 'no-store', // Ensures fresh data on each request
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
  const posts = await fetchPosts(); // Fetching posts on the server

  return (
    <Container>
      {/* <PageHeader /> */}
      <div className="mx-auto flex flex-col gap-6">
        {posts.map((post) => (
          <MastodonPost key={post.id} post={post} />
        ))}
      </div>
      <ContactMe />
    </Container>
  );
};

export default MastodonFeed;
