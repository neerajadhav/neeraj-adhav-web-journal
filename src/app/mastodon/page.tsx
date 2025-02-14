'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

interface MastodonUserResponse {
  id: string;
}

const MastodonFeed: React.FC = () => {
  const [posts, setPosts] = useState<MastodonPostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<MastodonUserResponse>(
          'https://sciences.social/api/v1/accounts/lookup?acct=neerajadhav',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const userId = response.data.id;

        const postsResponse = await axios.get<MastodonPostType[]>(
          `https://sciences.social/api/v1/accounts/${userId}/statuses`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setPosts(postsResponse.data);
      } catch (error) {
        console.error('Error fetching Mastodon posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <PageHeader />
      <div className='mx-auto flex flex-col gap-6'>
        {posts.map((post) => (
          <MastodonPost key={post.id} post={post} />
        ))}
      </div>
      <ContactMe />
    </Container>
  );
};

export default MastodonFeed;
