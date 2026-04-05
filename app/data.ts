type Project = {
  name: string
  description: string
  link: string
  video: string
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

export const PROJECTS: Project[] = []

export const WORK_EXPERIENCE: WorkExperience[] = []

export const BLOG_POSTS: BlogPost[] = []

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
