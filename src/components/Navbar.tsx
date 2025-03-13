'use client';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavLink {
  name: string;
  href: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
  tooltip: string;
}

interface NavbarProps {
  navLinks: NavLink[];
}

export const Navbar = ({ navLinks }: NavbarProps) => {
  const [loadingLink, setLoadingLink] = useState<string | null>(null);
  const path = usePathname();

  useEffect(() => {
    setLoadingLink(null);
  }, [path]);

  const handleNavigation = (href: string) => {
    if (path !== href) {
      setLoadingLink(href);
    }
  };

  return (
    <div className='fixed bottom-0 left-0 z-40 flex w-full justify-center md:static lg:bottom-5 lg:w-auto print:hidden'>
      <nav className='flex w-full flex-row justify-around gap-3 bg-white py-2 dark:bg-black md:justify-center md:gap-5 md:bg-transparent dark:md:bg-transparent lg:w-auto lg:gap-2 lg:rounded-full'>
        {navLinks.map((navlink) => (
          <Link
            href={navlink.href}
            key={navlink.name}
            passHref
            onClick={() => handleNavigation(navlink.href)}
            className={`relative rounded-lg p-2 px-3 dark:text-gray-400 md:dark:hover:bg-gray-50/10 ${
              path === navlink.href
                ? 'bg-white dark:bg-transparent dark:text-gray-50'
                : 'bg-white dark:bg-transparent dark:text-gray-400'
            }`}
            title={navlink.tooltip}
          >
            <div className='flex flex-col md:flex-row items-center gap-1 md:gap-2 lg:text-sm'>
              {loadingLink === navlink.href ? (
                <div className='flex items-center justify-center'>
                  <div className='animate-spin rounded-full'>
                    <ArrowPathIcon className='h-6 w-6 lg:h-5 lg:w-5' />
                  </div>
                </div>
              ) : (
                <>
                  {path === navlink.href ? navlink.activeIcon : navlink.icon}
                  <span className='sr-only'>{navlink.tooltip}</span>
                </>
              )}
              <div className='text-xs md:text-sm'>{navlink.tooltip}</div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};
