'use client';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const StarOnGithub = () => {
  const handleStarClick = () => {
    window.open(
      'https://github.com/neerajadhav/neeraj-adhav-web-journal',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleStarClick}
      className={`relative flex items-center gap-1 rounded-lg border p-1 px-2 font-sans text-sm shadow-sm dark:border-0 dark:text-gray-400 dark:hover:bg-gray-50/10 lg:shadow-none ${'bg-white hover:bg-white dark:bg-transparent dark:text-gray-400'}`}
    >
      <AiFillStar className='text-yellow-400' size={20} />
      Star on GitHub
    </button>
  );
};

export default StarOnGithub;
