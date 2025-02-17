import {
  CodeBracketIcon,
  HomeIcon as HomeIconOutline,
  NewspaperIcon as NewspaperIconOutline,
} from '@heroicons/react/24/outline';
import { NewspaperIcon as NewspaperIconSolid } from '@heroicons/react/24/solid';
import { Inknut_Antiqua, Pattaya } from 'next/font/google';
import Link from 'next/link';
import { FaMastodon } from 'react-icons/fa';
import { Navbar } from './Navbar';

// Load the Google Font using next/font
const logoFont = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
});

const NAVLINKS = [
  {
    name: 'Home',
    href: '/',
    icon: <HomeIconOutline className='h-6 w-6 lg:h-5 lg:w-5' />,
    activeIcon: <HomeIconOutline className='h-6 w-6 lg:h-5 lg:w-5' />,
    tooltip: 'Home',
  },
  {
    name: 'My Feed',
    href: '/feed',
    icon: <FaMastodon className='h-6 w-6 lg:h-5 lg:w-5' />,
    activeIcon: <FaMastodon className='h-6 w-6 lg:h-5 lg:w-5' />,
    tooltip: 'My Feed',
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
    <header className={`w-full bg-[#f6f6f6] dark:bg-gray-950 print:border-b-2`}>
      <div className='mx-auto max-w-[1300px] px-4 lg:px-0 print:p-0'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div
            className={`${logoFont.className} text-gray-900 dark:text-white`}
          >
            <Link
              href='/'
              className='flex items-center gap-2 text-lg font-bold text-gray-700 lg:text-xl dark:text-gray-300'
            >
              <img
                src='/Fs.svg'
                alt='Logo'
                className='h-8 w-8 print:h-10 print:w-10'
              />
              <div className='flex flex-col'>
                Neeraj Says{' '}
                <span className='hidden font-serif text-sm font-medium italic print:block'>
                  www.neerajadhav.in
                </span>
              </div>
            </Link>
          </div>
          {/* Desktop Menu */}
          <Navbar navLinks={NAVLINKS} />
        </div>
      </div>
    </header>
  );
};

export default Header;
