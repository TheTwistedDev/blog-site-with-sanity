import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { VscSymbolKeyword } from 'react-icons/vsc'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Example Blog Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <div className="flex items-center justify-between py-10 border-black bg-slate-400 border-y ">
        <div className="px-10 space-y-5">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">Example Blog Site</span>{' '} 
            a place to write, read, and connect
          </h1>
          <h2 className="text-xl">
          Start your blog, share ideas, and connect with other people in the blogging community!
          </h2>
        </div>
        <VscSymbolKeyword className="inline-flex w-32 h-32 mx-auto md: lg:h-60 lg:w-60"/>
      </div>

      {/* Posts */}
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:p-6">
        {posts.map(post => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="overflow-hidden border rounded-lg shadow-md cursor-pointer group">
              <img className="object-cover w-full transition-transform duration-200 ease-in-out h-60 group-hover:scale-105" src={urlFor(post.mainImage).url()!} alt="" />
                <div className="flex justify-between p-2 md:p-6">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-sm">{post.description} by {post.author.name}</p> 
                  </div>
                  <img className="w-12 h-12 rounded-full" src={urlFor(post.author.image).url()!} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export const getServerSideProps= async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  return{
    props: {
      posts
    }
  }
}