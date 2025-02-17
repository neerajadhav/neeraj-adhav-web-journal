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
    <div className='fixed bottom-0 left-0 z-20 flex w-full justify-center border-t border-zinc-100 lg:static lg:bottom-5 lg:w-auto lg:border-0 dark:border-gray-900 print:hidden'>
      <nav className='flex w-full flex-row justify-center gap-3 bg-white py-2 md:gap-5 lg:w-auto lg:gap-2 lg:rounded-full lg:bg-transparent dark:lg:bg-transparent dark:bg-black'>
        {navLinks.map((navlink) => (
          <Link
            href={navlink.href}
            key={navlink.name}
            passHref
            onClick={() => handleNavigation(navlink.href)}
            className={`relative rounded-full p-3 shadow-sm lg:rounded-lg lg:px-3 lg:py-2 lg:shadow-none dark:text-gray-400 dark:hover:bg-gray-50/10 ${
              path === navlink.href
                ? 'bg-gray-200 hover:bg-gray-200 dark:bg-gray-50/10 dark:text-gray-50'
                : 'bg-white dark:bg-transparent dark:text-gray-400'
            }`}
            title={navlink.tooltip}
          >
            <div className='flex items-center gap-2 lg:text-sm'>
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
              <div className='hidden lg:block'>{navlink.tooltip}</div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};
