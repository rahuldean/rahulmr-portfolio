'use client'
import Link from 'next/link'
import { NAME, TITLE, SUMMARY, SKILLS } from './data'
import { ScrollProgress } from '@/components/ui/scroll-progress'

function SkillsMarquee() {
  const items = [...SKILLS, ...SKILLS]

  return (
    <div className="marquee-container mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-2">
        {items.map((skill, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Header() {
  return (
    <>
      <ScrollProgress className="fixed z-50 bg-zinc-900 dark:bg-zinc-100" />
      <header className="mb-6">
        <Link href="/" className="text-3xl font-semibold tracking-tight leading-none text-black sm:text-3xl dark:text-white">
          {NAME}
        </Link>
        <p className="mt-1 text-base text-zinc-400 dark:text-zinc-500">{TITLE}</p>
        <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{SUMMARY}</p>
        <SkillsMarquee />
      </header>
    </>
  )
}
