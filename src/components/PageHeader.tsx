import { NewspaperIcon as NewspaperIconOutline } from '@heroicons/react/24/outline';
import { NewspaperIcon as NewspaperIconSolid } from '@heroicons/react/24/solid';
import { Inknut_Antiqua } from 'next/font/google';
import Link from 'next/link';
import { GoHome, GoHomeFill } from 'react-icons/go';
import {
  HiMiniCodeBracketSquare,
  HiOutlineCodeBracketSquare,
} from 'react-icons/hi2';
import { PiMastodonLogo, PiMastodonLogoFill } from 'react-icons/pi';
import { ModeToggle } from './DarkModeBtn';
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
    icon: <GoHome className='h-6 w-6 lg:h-5 lg:w-5' />,
    activeIcon: <GoHomeFill className='h-6 w-6 lg:h-5 lg:w-5' />,
    tooltip: 'Home',
  },
  {
    name: 'My Feed',
    href: '/feed',
    icon: <PiMastodonLogo className='h-6 w-6 lg:h-5 lg:w-5' />,
    activeIcon: <PiMastodonLogoFill className='h-6 w-6 lg:h-5 lg:w-5' />,
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
    icon: <HiOutlineCodeBracketSquare className='h-6 w-6 lg:h-5 lg:w-5' />,
    activeIcon: <HiMiniCodeBracketSquare className='h-6 w-6 lg:h-5 lg:w-5' />,
    tooltip: 'Projects',
  },
];

const Header = () => {
  return (
    <header
      className={`w-full select-none bg-[#f6f6f6] dark:bg-black print:border-b-2`}
    >
      <div className='mx-auto max-w-[1300px] px-4 print:p-0'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div
            className={`${logoFont.className} text-gray-900 dark:text-white`}
          >
            <Link
              href='/'
              className='flex items-center gap-2 text-lg font-bold text-gray-700 dark:text-gray-300 lg:text-xl print:text-black'
            >
              <img
                src='/Fs.svg'
                alt='Logo'
                width={'2.5rem'}
                height={'2.5rem'}
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
          <div className='flex items-center gap-2'>
            <Navbar navLinks={NAVLINKS} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
