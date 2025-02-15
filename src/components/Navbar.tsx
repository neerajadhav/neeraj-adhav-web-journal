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
    <div className='fixed bottom-0 z-20 flex w-full left-0 justify-center lg:static lg:bottom-5 lg:w-auto print:hidden'>
      <nav className='flex w-full flex-row justify-center gap-3 border border-zinc-100 bg-slate-100 px-3 py-2 md:gap-5 lg:w-auto lg:rounded-full lg:border-0 lg:bg-transparent dark:border-slate-800 dark:bg-slate-900'>
        {navLinks.map((navlink) => (
          <Link
            href={navlink.href}
            key={navlink.name}
            passHref
            onClick={() => handleNavigation(navlink.href)}
            className={`relative rounded-full p-3 shadow-sm dark:text-slate-400 dark:hover:bg-slate-50/10 ${
              path === navlink.href
                ? 'bg-slate-300 dark:bg-slate-50/10 dark:text-slate-50'
                : 'bg-white dark:bg-slate-950 dark:text-slate-400'
            }`}
            title={navlink.tooltip}
          >
            {loadingLink === navlink.href ? (
              <div className='flex items-center justify-center'>
                <div className='animate-spin rounded-full'>
                  <ArrowPathIcon className='h-6 w-6' />
                </div>
              </div>
            ) : (
              <>
                {path === navlink.href ? navlink.activeIcon : navlink.icon}
                <span className='sr-only'>{navlink.tooltip}</span>
              </>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};
