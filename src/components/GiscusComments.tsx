'use client';

import { useEffect, useRef } from 'react';

const GiscusComments = () => {
  const giscusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!giscusRef.current || giscusRef.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'neerajadhav/floaty-hashnode-headless');
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
  }, []);

  return <div ref={giscusRef}></div>;
};

export default GiscusComments;
