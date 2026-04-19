'use client'
import { ArrowLeftIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { GISTS } from '../data'

function GistHeader() {
  const pathname = usePathname()
  const slug = pathname.split('/').pop()
  const gist = GISTS.find((g) => g.link === `/gists/${slug}`)

  return (
    <div className="mb-8 mt-6">
      <BackButton />
      {gist && (
        <>
          <h1 className="text-xl font-medium text-zinc-900 dark:text-zinc-50">
            {gist.title}
          </h1>
          <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">{gist.date}</p>
        </>
      )}
    </div>
  )
}

function BackButton() {
  const router = useRouter()

  function handleBack() {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <button
      onClick={handleBack}
      className="mb-4 inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
    >
      <ArrowLeftIcon className="h-3.5 w-3.5" />
      Back
    </button>
  )
}

export default function LayoutGist({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-20">
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <GistHeader />
      <div className="prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {children}
      </div>
    </main>
  )
}
