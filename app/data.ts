export const NAME = 'Rahul Malkireddy'
export const TITLE = 'Staff Software Engineer'
export const SUMMARY =
  'Building AI-powered data platforms and distributed infrastructure. Currently architecting agentic systems, semantic layers, and MLOps pipelines at the intersection of reliability and intelligence.'

export const SKILLS = [
  'Go', 'Python', 'TypeScript', 'Swift',
  'Next.js', 'React', 'Node.js', 'FastAPI',
  'LLM Orchestration', 'LiteLLM', 'Agentic Systems', 'MLOps',
  'PostgreSQL', 'BigQuery', 'Redis', 'MongoDB',
  'GCP', 'Docker', 'Terraform', 'GitHub Actions',
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
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'AI Property Inspector API',
    description:
      'Open source service that analyzes property photos and returns structured inspection reports. Deployed on GCP Cloud Run with Terraform IaC, GitHub Actions CI/CD, and LiteLLM model-agnostic routing (Claude + Gemini).',
    links: [
      { label: 'Github', href: 'https://github.com/rahuldean/property-inspector' },
      { label: 'Demo', href: 'https://github.com/rahuldean/property-inspector' },
    ],
    tag: 'Go, Docker, LiteLLM, Gemini (LLM), Claude (LLM), GCP Cloud Run, GCP Artifact Registry, GCP BigQuery, GCP Secret Manager, GCP Workload Identity, Terraform, GitHub Actions, NextJS',
    year: '2025',
    icon: 'camera',
    id: 'project1',
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
    tag: 'JavaScript, Web, Microsoft',
    year: '2016',
    icon: 'play',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Frontdoor',
    title: 'Staff Software Engineer',
    start: '2022',
    end: 'Present',
    link: 'https://www.frontdoorhome.com',
    id: 'work1',
  },
  {
    company: 'Stream (acquired by Frontdoor)',
    title: 'Cross-Platform Tech Lead',
    start: '2019',
    end: '2022',
    link: 'https://www.linkedin.com/in/rahulreddym',
    id: 'work2',
  },
  {
    company: 'Code Particle',
    title: 'Software Engineer',
    start: '2017',
    end: '2019',
    link: 'https://www.linkedin.com/in/rahulreddym',
    id: 'work3',
  },
  {
    company: 'Microsoft',
    title: 'Software Engineer',
    start: '2015',
    end: '2017',
    link: 'https://www.microsoft.com',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Deploying a vision ML API on GCP',
    description: 'Architecture decisions behind the property inspector service',
    link: '/blog/gcp-vision-api',
    uid: 'blog-1',
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

export const EMAIL = 'hi [at] rahulmr.dev'
