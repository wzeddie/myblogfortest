import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="space-y-7">
        <h1>Home Page </h1>
        <h2>Why you should write
        </h2>

        <p>
        Look, I’m not a scientist, so I can’t present you with a study on what writing does for your health, or the benefits for your brain, or how you’ll look 25 years younger.
        </p>

        <p>
        But here’s what I do know: writing helps you get better. It ensures that you really get to know the topic as well as you thought you did. It helps formalize thoughts. It improves your ability to structure, organize, and create hierarchy. It makes you a better storyteller. It can help to bolster your public image with thought leadership. It educates. It creates discussion, introduces you to new points of view.  
        </p>
        <p>
        And, it’s cathartic. Dang. Coffee and a keyboard? Pretty great morning if you ask me. 
        </p>
        {/* <ul className="my-6 list-disc space-y-2 pl-4">
          <li>
            <Link className="link" href="https://nextjs.org/docs/app">
              Next.js - App Router
            </Link>
          </li>
          <li>
            <Link className="link" href="https://www.contentlayer.dev/">
              Contentlayer
            </Link>
          </li>
          <li>
            <Link className="link" href="https://mdxjs.com/">
              MDX
            </Link>
          </li>
          <li>
            <Link className="link" href="https://ui.shadcn.com/">
              shadcn-ui
            </Link>
          </li>
          <li>
            <Link className="link" href="https://tailwindcss.com/">
              Tailwind CSS
            </Link>
          </li>
        </ul> */}

        {/* <Button asChild>
          <a href="https://github.com/ChangoMan/nextjs-mdx-blog">
            <Github className="mr-1" /> Get the source code!
          </a>
        </Button> */}
      </div>

      <div className="mt-16">
        <h2>From the blog</h2>
        <p className="mt-2 leading-8">
          Blog posts are written with MDX and processed through Contentlayer.
        </p>
      </div>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}
