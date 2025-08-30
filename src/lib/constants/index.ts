import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import XIcon from '@/components/ui/icons/x.astro'
import GithubIcon from '@/components/ui/icons/github.astro'

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Projects",
    href: "/projects",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    icon: GithubIcon,
    url: "https://github.com/justaguygittin",
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/srikar-guddanti/",
  },
  {
    name: '',
    icon: XIcon,
    url: "https://x.com/Louai_Dourov",
  },
];