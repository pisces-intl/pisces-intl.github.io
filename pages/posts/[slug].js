import React from 'react';
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Layout from '../../components/Layout'
import { Button, SimpleGrid, Box, Text, VStack, Heading } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import NewsCard from '../../components/NewsCard'
import ReactMarkdown from 'react-markdown';
import ReactPlayer from 'react-player/lazy'
import NewsletterSubscribe from '../../components/NewsletterSubscribe';

export default function Post({ post, allPosts }) {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    setIsMobile(Boolean(window.innerWidth < 890))
  }, [])

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout title={`PISCES | ${post.title}`} background='other'>
      <Link href="/news" passHref>
        <Button mt={10} pl={0} variant='ghost' leftIcon={<ArrowBackIcon />}>Back to all news</Button>
      </Link>
      <Text py={5} fontSize='16px' fontWeight={400} color='#CCCCCC'>{new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
      <Heading mt='' size='lg'>{post.title}</Heading>
      {post?.author?.name && <Text pb={8} fontSize='1.1em' color='#BABABA' fontWeight={500}>{post?.author?.name}</Text>}
      <Box pb={isMobile ? '2em' : '33vh'}>
        <ReactMarkdown className='markdown'>{post.content}</ReactMarkdown>
        {post?.video && <ReactPlayer controls width='100%' url={post.video} />}
      </Box>
      <br />

      {isMobile ?
        <VStack spacing={6} pt={20} pb={5}>
          <NewsletterSubscribe />

          <Heading size='md'>Other Posts</Heading>
          {
            allPosts.filter(element => element.slug !== post.slug).slice(0, 3).map((nextPost, index) => (
              <NewsCard key={index} post={nextPost} />
            ))
          }
        </VStack>
        :
        <Box position='absolute' h='inherit' bottom='0' pb='3vh' maxW='inherit'>
          <NewsletterSubscribe />
          <Text fontSize='24px' pb={4}>Other Posts</Text>
          <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={8} >
            {
              allPosts.filter(element => element.slug !== post.slug).slice(0, 3).map((nextPost, index) => (
                <NewsCard key={index} post={nextPost} />
              ))
            }
          </SimpleGrid>
        </Box>
      }
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'video',
  ])

  return {
    props: {
      allPosts,
      post: {
        ...post
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}