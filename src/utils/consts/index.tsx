import { PublicationLinks } from '../../../generated/graphq';
import {
  faGithub,
  faHashnode,
  faInstagram,
  faLinkedin,
  faMastodon,
  faXTwitter,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export const SOCIAL_LINKS: {
  [key in keyof PublicationLinks]: IconDefinition;
} = {
  instagram: faInstagram,
  github: faGithub,
  website: faGlobe,
  hashnode: faHashnode,
  youtube: faYoutube,
  linkedin: faLinkedin,
  mastodon: faMastodon,
  twitter: faXTwitter,
};

export const PROJECTS: {
  name: string;
  url?: string;
  demoLink?: string;
  imageUrl?: string;
  desc?: string;
}[] = [
  {
    name: 'React Fake Shop',
    url: 'github.com/neerajadhav/ReactFakeShop',
    demoLink: 'fakeshop-neeraj.netlify.app/',
    imageUrl:
      'https://raw.githubusercontent.com/neerajadhav/ReactFakeShop/refs/heads/main/thumbnail.png',
    desc: 'A React js e-commerce website. It includes two pages, the homepage to display the list of products and page 2 to display the details of the selected product.',
  },
  {
    name: 'Dotfiles Manager',
    imageUrl: 'https://i.redd.it/20xt0rtgtzpb1.png',
    url: 'github.com/neerajadhav/.dotfiles',
    demoLink:
      'www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2F20xt0rtgtzpb1.png',
    desc: 'A simple DotFiles Setup - Menu based Bash Script for Linux Ricing with Configuration Files',
  },
];
