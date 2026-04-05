'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { NAME, TITLE, SUMMARY } from './data'

export function Header() {
  return (
    <header className="mb-5">
      <Link href="/" className="font-medium text-black dark:text-white">
        {NAME}
      </Link>
      <p className="text-zinc-600 dark:text-zinc-500">{TITLE}</p>
      <TextEffect
        as="p"
        preset="fade"
        per="word"
        className="mt-1 text-sm text-zinc-600 dark:text-zinc-400"
        delay={0.5}
      >
        {SUMMARY}
      </TextEffect>
    </header>
  )
}
