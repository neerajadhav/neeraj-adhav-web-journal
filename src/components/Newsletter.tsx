import React from 'react';

const Newsletter = () => {
  return (
    <section className='mt-3'>
      <div className='mx-auto flex flex-col items-center justify-center gap-3 lg:flex-row'>
        <h2 className='text-center text-lg font-semibold'>
          Newsletter&nbsp;Signup
        </h2>
        <form className='flex w-full items-center gap-3'>
          <input
            type='email'
            placeholder='Service currently disabled!'
            disabled
            className='h-10 flex-1 rounded-lg border border-gray-700 px-2 focus:outline-none focus:ring-1 focus:ring-blue-500'
          />
          <button
            type='submit'
            disabled
            className='text-md flex items-center justify-center gap-2 rounded-lg border border-gray-400 px-3 py-2 font-medium text-gray-700 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400 dark:border-gray-600 dark:text-white dark:hover:bg-white dark:hover:text-black md:flex md:px-4 md:py-2 lg:w-1/6'
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
