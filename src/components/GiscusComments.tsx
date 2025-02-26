'use client';

import { useEffect, useRef, useState } from 'react';

const GiscusComments = () => {
  const giscusRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState<number>(0); // State to force component re-render

  useEffect(() => {
    if (!giscusRef.current || giscusRef.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'neerajadhav/neeraj-adhav-web-journal');
    script.setAttribute('data-repo-id', 'R_kgDON20ryA');
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', 'DIC_kwDON20ryM4CnQVF');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    giscusRef.current.appendChild(script);
  }, [key]);

  const handleRefresh = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className='mt-4'>
      <div ref={giscusRef}></div>
      <button
        onClick={handleRefresh}
        className={`relative rounded-full border bg-white p-2 text-sm shadow-sm hover:bg-white dark:border-0 dark:bg-transparent dark:text-gray-400 dark:hover:bg-gray-50/10 lg:rounded-lg lg:px-3 lg:py-2 lg:shadow-none print:hidden mt-4`}
      >
        Refresh Comments
      </button>
    </div>
  );
};

export default GiscusComments;
