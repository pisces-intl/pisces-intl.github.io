import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from '../../components/Layout'
import { Button, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import NewsCard from '../../components/NewsCard'

export default function Post({ post, allPosts }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout title={`PISCES | ${post.title}`} background='alt'>
      <Link href="/news" passHref>
        <Button mt={10} pl={0} variant='ghost' leftIcon={<ArrowBackIcon />}>Back to all news</Button>
      </Link>
      <Text py={5} fontSize='16px' fontWeight={400} color='#CCCCCC'>{new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
      <Text fontSize='32px' fontWeight={500}>{post.title}</Text>
      <Text pb={8} fontSize='16px' color='#BABABA' fontWeight={500}>{post?.author?.name}</Text>
      <div className='markdown' dangerouslySetInnerHTML={{ __html: post.content }} />

      <Box maxW='inherit' position='absolute' bottom='5vh'>
        <Text fontSize='24px' pb={4}>Other Posts</Text>
        <SimpleGrid columns={3} spacing={8} w='100%'>
          {
            allPosts.slice(0, 3).map((post, index) => (
              <NewsCard key={index} post={post} />
            ))
          }
        </SimpleGrid>
      </Box>
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
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
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