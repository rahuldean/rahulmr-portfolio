'use client'
import { motion } from 'motion/react'
import { XIcon, Camera, Share2, Brain, Play, Briefcase, Building2, Utensils, type LucideIcon } from 'lucide-react'
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
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  type Project,
  type ProjectLink,
} from './data'

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

function MagneticSocialLink({
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
  return (
    <motion.main
      className="space-y-4"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="rounded-2xl bg-zinc-50 px-5 py-4 dark:bg-zinc-900/40"
      >
        <h3 className="mb-5 text-base font-medium">Projects</h3>
        <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
          {PROJECTS.map((project) => (
            <div key={project.name} className="py-6 first:pt-0 last:pb-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ProjectThumbnail project={project} />
                  <span className="text-base font-medium text-zinc-900 dark:text-zinc-50">{project.name}</span>
                </div>
                <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">{project.year}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.links.map((l: ProjectLink) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-fit rounded-full border px-2.5 py-1 text-sm transition-colors sm:py-0.5 sm:text-xs ${
                      l.label === 'Demo'
                        ? 'border-blue-200 text-blue-500 hover:border-blue-400 hover:text-blue-600 dark:border-blue-800 dark:text-blue-400 dark:hover:border-blue-600'
                        : 'border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-700 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-500'
                    }`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <p className="mt-3 text-base leading-relaxed text-justify text-zinc-700 dark:text-zinc-300">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {project.tag.split(', ').map((tech) => (
                  <span key={tech} className="cursor-default rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-100 dark:hover:text-zinc-900">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="rounded-2xl bg-zinc-50 px-5 py-4 dark:bg-zinc-900/40"
      >
        <h3 className="mb-5 text-base font-medium">Work Experience</h3>
        <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.id} className="py-6 first:pt-0 last:pb-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <Briefcase className="h-3.5 w-3.5 text-zinc-400 dark:text-zinc-500" />
                  </div>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-zinc-900 dark:text-zinc-50 hover:underline"
                  >
                    {job.company}
                  </a>
                </div>
                <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
                  {job.start} - {job.end}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{job.title}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="rounded-2xl bg-zinc-50 px-5 py-4 dark:bg-zinc-900/40"
      >
        <h3 className="mb-5 text-base font-medium">Writing</h3>
        <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
          {BLOG_POSTS.map((post) => (
            <div key={post.uid} className="flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0">
              {post.published ? (
                <a href={post.link} className="group min-w-0">
                  <p className="text-base font-medium text-zinc-700 group-hover:underline dark:text-zinc-300">{post.title}</p>
                  <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-600">{post.description}</p>
                </a>
              ) : (
                <div>
                  <p className="text-base font-medium text-zinc-400 dark:text-zinc-500">{post.title}</p>
                  <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-600">{post.description}</p>
                </div>
              )}
              <span className="mt-0.5 shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
                {post.published ? 'read' : 'soon'}
              </span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="rounded-2xl bg-zinc-50 px-5 py-4 dark:bg-zinc-900/40"
      >
        <h3 className="mb-5 text-base font-medium">Connect</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                {link.label}
              </MagneticSocialLink>
            ))}
          </div>
          <span className="text-sm text-zinc-400 dark:text-zinc-500">{EMAIL}</span>
        </div>
      </motion.section>
    </motion.main>
  )
}
