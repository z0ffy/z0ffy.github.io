import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Layout from '../components/layout';
import Posts from '../components/posts';

import genRSS from '../lib/rss';
import { fetchPosts, fetchUser } from '../lib';

import type { NextPageWithLayout, Post, User } from 'gossip';

/**
 * Fetch user and post data at build time.
 * Generates an RSS feed if `process.env.rss` is "true".
 */
export const getStaticProps: GetStaticProps = async () => {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts(),
  ]);

  if (process.env.rss === 'true') {
    genRSS(posts, user);
  }

  return {
    props: {
      user,
      posts,
    },
  };
};

type Props = {
  posts: Post[];
  user: User;
};

/**
 * The homepage, showing the user's avatar, bio, and a list of posts.
 */
const Index: NextPageWithLayout<Props> = ({ posts, user }) => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid SSR mismatch by only updating theme client-side.
  useEffect(() => {
    setMounted(true);
    if (process.env.theme !== 'both') {
      setTheme(process.env.theme || 'dark');
    }
  }, [setTheme]);

  // If not mounted, skip rendering elements that might rely on client-only
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-8 mx-auto inline-block">
        <div className="relative select-none md:w-24 md:h-24 w-14 h-14 mb-3 hover:rotate-45 transition-transform">
          <Image
            src={user.avatar_url}
            alt="avatar"
            fill
            className="rounded-full"
          />
        </div>
        <p className="mx-auto lg:text-xl text-md italic font-en">
          {process.env.bio || user.bio}
        </p>
        <hr className="dark:border-dashed" />
      </div>

      <div className="space-y-10 dark:text-gray-400">
        <Posts posts={posts} />
      </div>
    </div>
  );
};

/**
 * Wraps the page with a shared `<Layout>`.
 */
Index.getLayout = (page) => <Layout middle={page} />;

export default Index;
