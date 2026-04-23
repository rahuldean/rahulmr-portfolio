'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
import {
  XIcon,
  Camera,
  Share2,
  Brain,
  Play,
  Building2,
  Utensils,
  Server,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from 'lucide-react'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import {
  PROJECTS,
  EARLIER_PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  GISTS,
  EMAIL,
  SOCIAL_LINKS,
  type Project,
  type ProjectLink,
  type BlogPost,
} from './data'
import { BorderTrail } from '@/components/motion-primitives/border-trail'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

const PROJECT_ICONS: Record<string, LucideIcon> = {
  camera: Camera,
  'share-2': Share2,
  brain: Brain,
  play: Play,
  'building-2': Building2,
  utensils: Utensils,
  server: Server,
}

function ProjectThumbnail({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.name}
        className="h-14 w-14 shrink-0 rounded-xl object-cover"
      />
    )
  }

  if (project.video) {
    return (
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl">
        <ProjectVideo src={project.video} />
      </div>
    )
  }

  const Icon = PROJECT_ICONS[project.icon]

  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
      {Icon && <Icon className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />}
    </div>
  )
}

function trackedClick(eventName: string, eventData?: Record<string, string>) {
  if (typeof window !== 'undefined') {
    ;(window as any).umami?.track(eventName, eventData)
  }
}

function TrackedLink({
  href,
  eventName,
  eventData,
  children,
  className,
}: {
  href: string
  eventName: string
  eventData?: Record<string, string>
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackedClick(eventName, eventData)}
    >
      {children}
    </a>
  )
}

function ProjectLinkChip({
  link,
  eventName,
  eventData,
}: {
  link: ProjectLink
  eventName: string
  eventData?: Record<string, string>
}) {
  return (
    <TrackedLink
      href={link.href}
      eventName={eventName}
      eventData={eventData}
      className={`w-fit rounded-full border px-2.5 py-1 text-sm transition-colors sm:py-0.5 sm:text-xs ${
        link.label === 'Demo'
          ? 'border-blue-200 text-blue-500 hover:border-blue-400 hover:text-blue-600 dark:border-blue-800 dark:text-blue-400 dark:hover:border-blue-600'
          : 'border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500'
      }`}
    >
      {link.label}
    </TrackedLink>
  )
}

function projectEventName(label: string, projectId: string) {
  if (label === 'Github') return 'project-github-click'
  if (label === 'Demo') return 'project-demo-click'
  if (label === 'Website') return 'project-website-click'
  return 'project-link-click'
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
      <BorderTrail
        className="bg-linear-to-l from-zinc-300 via-zinc-100 to-zinc-300 dark:from-zinc-700 dark:via-zinc-500 dark:to-zinc-700"
        size={80}
      />
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ProjectThumbnail project={project} />
          <span className="text-base font-medium text-zinc-900 dark:text-zinc-50">
            {project.name}
          </span>
        </div>
        <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">{project.year}</span>
      </div>
      {project.hook && (
        <p className="mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {project.hook}
        </p>
      )}
      {/* TODO: add architecture diagram */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.links.map((l: ProjectLink) => (
          <ProjectLinkChip
            key={l.label}
            link={l}
            eventName={projectEventName(l.label, project.id)}
            eventData={{ project: project.id }}
          />
        ))}
      </div>
      <p className="mt-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1">
        {project.tag.split(', ').map((tech) => (
          <span
            key={tech}
            className="cursor-default rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-100 p-4 dark:border-zinc-800/60">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ProjectThumbnail project={project} />
          <span className="text-base font-medium text-zinc-900 dark:text-zinc-50">
            {project.name}
          </span>
        </div>
        <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">{project.year}</span>
      </div>
      {project.hook && (
        <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {project.hook}
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.links.map((l: ProjectLink) => (
          <ProjectLinkChip
            key={l.label}
            link={l}
            eventName={projectEventName(l.label, project.id)}
            eventData={{ project: project.id }}
          />
        ))}
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1">
        {project.tag.split(', ').map((tech) => (
          <span
            key={tech}
            className="cursor-default rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function EarlierWork() {
  const [open, setOpen] = useState(false)

  function handleToggle() {
    if (!open) trackedClick('earlier-work-expand')
    setOpen(!open)
  }

  return (
    <div>
      <button
        onClick={handleToggle}
        className="flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
      >
        Earlier work
        {open ? (
          <ChevronUp className="h-3.5 w-3.5" />
        ) : (
          <ChevronDown className="h-3.5 w-3.5" />
        )}
      </button>
      {open && (
        <div className="mt-4 flex flex-col gap-3">
          {EARLIER_PROJECTS.map((project) => (
            <div key={project.id} className="flex items-baseline gap-2 text-sm">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">{project.name}</span>
              <span className="text-zinc-400 dark:text-zinc-500">({project.year})</span>
              <span className="text-zinc-500 dark:text-zinc-400">- {project.description}</span>
              {project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-zinc-400 underline underline-offset-2 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function BlogPostRow({ post }: { post: BlogPost }) {
  const slug = post.link.replace('/blog/', '')

  if (post.published) {
    return (
      <TrackedLink
        href={post.link}
        eventName="blog-post-click"
        eventData={{ slug, source: 'home' }}
        className="group -mx-3 flex items-start justify-between gap-4 rounded-xl px-3 py-4 transition-colors first:pt-0 last:pb-0 hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-zinc-800/50 dark:active:bg-zinc-700/60"
      >
        <div className="min-w-0">
          <p className="text-base font-medium text-zinc-700 dark:text-zinc-300">{post.title}</p>
          <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-600">{post.description}</p>
        </div>
        {post.highlight ? (
          <motion.div
            className="mt-0.5 flex shrink-0 items-center gap-1.5 rounded-full bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">hot</span>
          </motion.div>
        ) : (
          <span className="mt-0.5 shrink-0 rounded-full bg-zinc-200/60 px-2 py-0.5 text-xs text-zinc-400 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-700/50 dark:text-zinc-500 dark:group-hover:bg-zinc-700">
            read
          </span>
        )}
      </TrackedLink>
    )
  }

  return (
    <div className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
      <div className="min-w-0">
        <p className="text-base font-medium text-zinc-400 dark:text-zinc-500">{post.title}</p>
        <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-600">{post.description}</p>
      </div>
      <span className="mt-0.5 shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
        soon
      </span>
    </div>
  )
}

function MagneticSocialLink({
  children,
  link,
  eventName,
}: {
  children: React.ReactNode
  link: string
  eventName: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackedClick(eventName)}
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

export default function Personal() {
  const featuredProject = PROJECTS.find((p) => p.featured)
  const gridProjects = PROJECTS.filter((p) => !p.featured)
  const aiPosts = BLOG_POSTS.filter((p) => p.cluster === 'ai')
  const homelabPosts = BLOG_POSTS.filter((p) => p.cluster === 'homelab')

  return (
    <motion.main
      className="space-y-4"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Featured Project */}
      {featuredProject && (
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          className="py-4"
        >
          <h3 className="mb-4 text-xl font-medium">Projects</h3>
          <FeaturedProject project={featuredProject} />
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {gridProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-6">
            <EarlierWork />
          </div>
        </motion.section>
      )}

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* Writing */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="py-4"
      >
        <h3 className="mb-5 text-xl font-medium">Writing</h3>

        <p className="mb-2 text-xs font-medium tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
          AI &amp; Platforms
        </p>
        <div className="mb-6 flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
          {aiPosts.map((post) => (
            <BlogPostRow key={post.uid} post={post} />
          ))}
        </div>

        <p className="mb-2 text-xs font-medium tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
          Homelab &amp; Self-Hosting
        </p>
        <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
          {homelabPosts.map((post) => (
            <BlogPostRow key={post.uid} post={post} />
          ))}
        </div>
      </motion.section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* Gists */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="py-4"
      >
        <h3 className="mb-5 text-xl font-medium">Gists</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {GISTS.map((gist) => (
            <TrackedLink
              key={gist.uid}
              href={gist.link}
              eventName="gist-click"
              eventData={{ slug: gist.uid }}
              className="group flex flex-col gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50/50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/30"
            >
              <div className="flex flex-wrap gap-1.5">
                {gist.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium leading-snug text-zinc-800 dark:text-zinc-200">
                {gist.title}
              </p>
              <div className="rounded-lg bg-zinc-950 px-3 py-2.5 dark:bg-black">
                {gist.snippet.split('\n').map((line, i) => (
                  <p key={i} className="font-mono text-xs leading-relaxed text-zinc-400">
                    {line}
                  </p>
                ))}
              </div>
            </TrackedLink>
          ))}
        </div>
      </motion.section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* Work Experience - minimal */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="py-4"
      >
        <h3 className="mb-4 text-xl font-medium">Work Experience</h3>
        <div className="flex flex-col gap-2">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.id} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-sm">
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-800 hover:underline dark:text-zinc-200"
              >
                {job.company}
              </a>
              <span className="text-zinc-400 dark:text-zinc-500">-</span>
              <span className="text-zinc-500 dark:text-zinc-400">{job.title}.</span>
              <span className="text-zinc-400 dark:text-zinc-500">
                {job.start}–{job.end}.
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">{job.description}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-zinc-400 dark:text-zinc-500">
          Full history on{' '}
          <a
            href="https://www.linkedin.com/in/rahulreddym"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            LinkedIn
          </a>
          .
        </p>
      </motion.section>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* Connect */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="py-4"
      >
        <h3 className="mb-3 text-lg font-medium">Connect</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink
                key={link.label}
                link={link.link}
                eventName={
                  link.label === 'Github'
                    ? 'social-github-click'
                    : 'social-linkedin-click'
                }
              >
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
          <button
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
            onClick={() => {
              navigator.clipboard.writeText('hi@rahulmx.com')
              trackedClick('contact-email-copy')
            }}
            title="Copy email"
          >
            <span onClick={() => trackedClick('contact-email-click')}>{EMAIL}</span>
          </button>
        </div>
      </motion.section>
    </motion.main>
  )
}
