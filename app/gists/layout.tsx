'use client'
import { ArrowLeftIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { GISTS } from '../data'

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
      className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
    >
      <ArrowLeftIcon className="h-3.5 w-3.5" />
      Back
    </button>
  )
}

function GistHeader() {
  const pathname = usePathname()
  const slug = pathname.split('/').pop()
  const gist = GISTS.find((g) => g.link === `/gists/${slug}`)

  return (
    <div className="mt-6 mb-6">
      <BackButton />
      {gist && (
        <div className="mt-4 flex flex-col gap-3 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
          <div className="flex flex-wrap gap-1.5">
            {gist.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-base font-medium leading-snug text-zinc-900 dark:text-zinc-50">
            {gist.title}
          </h1>
          <div className="rounded-lg bg-zinc-950 px-3 py-2.5 dark:bg-black">
            {gist.snippet.split('\n').map((line, i) => (
              <p key={i} className="font-mono text-xs leading-relaxed text-zinc-400">{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function LayoutGist({ children }: { children: React.ReactNode }) {
  return (
    <main className="pb-20">
      <hr className="border-zinc-200 dark:border-zinc-800" />
      <GistHeader />
      <div className="prose prose-sm prose-zinc dark:prose-invert prose-h2:text-sm prose-h2:font-medium prose-h2:mt-6 prose-h3:text-sm prose-h3:font-medium prose-p:text-zinc-600 dark:prose-p:text-zinc-400 prose-strong:font-medium prose-code:text-xs">
        {children}
      </div>
    </main>
  )
}
