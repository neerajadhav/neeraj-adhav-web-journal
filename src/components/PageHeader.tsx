import {
  CodeBracketIcon,
  HomeIcon as HomeIconOutline,
  NewspaperIcon as NewspaperIconOutline,
} from '@heroicons/react/24/outline';
import { NewspaperIcon as NewspaperIconSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { FaMastodon } from 'react-icons/fa';
import { Navbar } from './Navbar';

const NAVLINKS = [
  {
    name: 'Home',
    href: '/',
    icon: <HomeIconOutline className='h-6 w-6 lg:h-5 lg:w-5' />,
    activeIcon: <HomeIconOutline className='h-6 w-6 lg:h-5 lg:w-5' />,
    tooltip: 'Home',
  },
  {
    name: 'Mastodon',
    href: '/mastodon',
    icon: <FaMastodon className='h-6 w-6 lg:h-5 lg:w-5' />,
    activeIcon: <FaMastodon className='h-6 w-6 lg:h-5 lg:w-5' />,
    tooltip: 'Mastodon',
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: <NewspaperIconOutline className='h-6 w-6 lg:h-5 lg:w-5' />,
    activeIcon: <NewspaperIconSolid className='h-6 w-6 lg:h-5 lg:w-5' />,
    tooltip: 'Blog',
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: <CodeBracketIcon className='h-6 w-6 lg:h-5 lg:w-5' />,
    activeIcon: <CodeBracketIcon className='h-6 w-6 lg:h-5 lg:w-5' />,
    tooltip: 'Projects',
  },
];

const Header = () => {
  return (
    <header className='sticky top-0 z-50 mb-2 w-full border bg-white dark:border-slate-800 dark:bg-slate-900 print:border-0 print:border-b'>
      <div className='mx-auto max-w-7xl px-4 lg:px-0'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='text-xl font-bold text-gray-900 dark:text-white'>
            <Link href='/'>Neeraj Says</Link>
          </div>

          {/* Desktop Menu */}
          <Navbar navLinks={NAVLINKS} />
        </div>
      </div>
    </header>
  );
};

export default Header;
