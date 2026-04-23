'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeftIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { BLOG_POSTS } from '../data'

function useScrollDepthTracking(slug: string) {
  const fired = useRef(false)

  useEffect(() => {
    fired.current = false

    function onScroll() {
      if (fired.current) return
      const el = document.documentElement
      const scrolled = el.scrollTop + el.clientHeight
      const total = el.scrollHeight
      if (total > 0 && scrolled / total >= 0.9) {
        fired.current = true
        ;(window as any).umami?.track('blog-scroll-complete', { slug })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug])
}

function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

function PostHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const slug = pathname.split('/').pop() ?? ''
  useScrollDepthTracking(slug)
  const post = BLOG_POSTS.find((p) => p.link === `/blog/${slug}`)

  function handleBack() {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <div className="mb-8 mt-6">
      <button
        onClick={handleBack}
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
      >
        <ArrowLeftIcon className="h-3.5 w-3.5" />
        Back
      </button>
      {post && (
        <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-50">
          {post.title}
        </h1>
      )}
    </div>
  )
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      <div className="absolute right-4 top-24">
        <CopyButton />
      </div>

      <main className="pb-20">
        <hr className="border-zinc-200 dark:border-zinc-800" />
        <PostHeader />
        <div className="prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
          {children}
        </div>
      </main>
    </>
  )
}
