export const NAME = 'Rahul Malkireddy'
export const TITLE = 'Staff Software Engineer'
export const SUMMARY =
  'Staff engineer focused on AI-powered platforms, distributed infrastructure, and agentic systems.'

export const SKILLS = [
  'Go', 'Python', 'TypeScript', 'Swift',
  'Next.js', 'React', 'Node.js', 'FastAPI',
  'LLM Orchestration', 'LiteLLM', 'Agentic Systems', 'MLOps',
  'PostgreSQL', 'BigQuery', 'Redis', 'MongoDB',
  'GCP', 'Docker', 'Terraform', 'GitHub Actions',
  'Cloudflare Workers', 'Cloudflare R2', 'Cloudflare D1',
  'Distributed Systems', 'Data Pipelines', 'Semantic Layer', 'API Design',
]

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  description: string
  links: ProjectLink[]
  tag: string
  year: string
  icon: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  published?: boolean
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'AI Property Inspector API',
    description:
      'Open source vision ML service that analyzes property photos and returns structured inspection reports. Deployed on GCP Cloud Run with Terraform IaC, GitHub Actions CI/CD, and LiteLLM model-agnostic routing across Claude and Gemini.',
    links: [
      { label: 'Github', href: 'https://github.com/rahuldean/property-inspector' },
      { label: 'Demo', href: 'https://github.com/rahuldean/property-inspector' },
    ],
    tag: 'Go, Docker, LiteLLM, Gemini (LLM), Claude (LLM), GCP Cloud Run, GCP Artifact Registry, GCP BigQuery, GCP Secret Manager, GCP Workload Identity, Terraform, GitHub Actions, Next.js',
    year: '2025',
    icon: 'camera',
    id: 'project1',
  },
  {
    name: 'Rentomator',
    description:
      'AI-powered rental management platform for landlords. Centralizes property operations including tenant management, lease tracking, rent payments, and maintenance requests. Features AI photo inspections that compare property conditions at move-in/move-out with automated reports.',
    links: [
      { label: 'Website', href: 'https://rentomator.com' },
    ],
    tag: 'Next.js, React, Vercel, Cloudflare R2, Cloudflare Workers, Cloudflare D1',
    year: '2023',
    icon: 'building-2',
    id: 'project5',
  },
  {
    name: 'Archy',
    description:
      'iOS application (MVP) for sending and receiving referrals for products, services, and recommendations. Built a real-time referral graph with SocketIO and a Redis-backed NodeJS API on Google Compute Engine.',
    links: [
      { label: 'Demo', href: 'https://www.youtube.com/watch?v=V3IAef1WsAw' },
    ],
    tag: 'Swift, iOS, Node.js, Express, SocketIO, MongoDB, Redis, Docker, Google Compute Engine',
    year: '2019',
    icon: 'share-2',
    id: 'project2',
  },
  {
    name: 'Handwritten Number Synthesis via GAN',
    description:
      'Deep neural network that synthesizes handwritten numbers using Generative Adversarial Networks. Trained on the MNIST database using Keras and TensorFlow on Google Compute Engine.',
    links: [
      { label: 'Presentation', href: 'https://onedrive.live.com/:p:/g/personal/AFEBC0B85CC8D9CE/s!As7ZyFy4wOuvgQqeDlvgzY58FDc2?resid=AFEBC0B85CC8D9CE!138&ithint=file%2Cpptx&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvcyFBczdaeUZ5NHdPdXZnUXFlRGx2Z3pZNThGRGMy' },
    ],
    tag: 'Python, TensorFlow, Keras, GAN, MNIST, Google Compute Engine, Ubuntu',
    year: '2018',
    icon: 'brain',
    id: 'project3',
  },
  {
    name: 'Gifsy',
    description:
      'GIF discovery and sharing platform built during tenure at Microsoft. Largest collection of curated GIFs with fast search and browsing experience.',
    links: [
      { label: 'App', href: 'https://www.amazon.com/Gifsy-latest-viral-animated-images/dp/B01GLXSMIQ' },
    ],
    tag: 'Android, Kotlin, Azure',
    year: '2016',
    icon: 'play',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Streem (acq. by Frontdoor)',
    title: 'Staff Software Engineer | Cross-Platform Tech Lead | Architect',
    start: '2021',
    end: 'Present',
    link: 'https://www.streem.com',
    id: 'work1',
  },
  {
    company: 'Code Particle',
    title: 'Senior Software Engineer',
    start: '2018',
    end: '2021',
    link: 'https://www.linkedin.com/in/rahulreddym',
    id: 'work3',
  },
  {
    company: 'Microsoft',
    title: 'Software Engineer',
    start: '2012',
    end: '2017',
    link: 'https://www.microsoft.com',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Shipping a property inspection API',
    description: 'Architecture decisions, tradeoffs, and what I would change',
    link: '/blog/property-inspection-api',
    uid: 'blog-1',
    published: true,
  },
  {
    title: 'Building reliable ML pipelines',
    description:
      'Structured outputs, eval loops, and drift detection in production',
    link: '/blog/reliable-ml-pipelines',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/rahuldean',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rahulreddym',
  },
]

export const EMAIL = 'hi [at] rahulmx.com'
