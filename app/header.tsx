'use client'
import Link from 'next/link'
import { NAME, TITLE, SUMMARY, SKILLS, SOCIAL_LINKS, EMAIL } from './data'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { Magnetic } from '@/components/ui/magnetic'

function SkillsMarquee() {
  // Items duplicated so the CSS translateX(-50%) animation loops seamlessly
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

function HeroCTA({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
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
        <p className="mt-2 text-base font-medium text-zinc-700 dark:text-zinc-300">{TITLE}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{SUMMARY}</p>
        <div className="mt-4 flex items-center gap-2">
          {SOCIAL_LINKS.map((s) => (
            <HeroCTA key={s.label} link={s.link}>
              {s.label}
            </HeroCTA>
          ))}
          <span className="text-sm text-zinc-400 dark:text-zinc-500">{EMAIL}</span>
        </div>
        <SkillsMarquee />
      </header>
    </>
  )
}
