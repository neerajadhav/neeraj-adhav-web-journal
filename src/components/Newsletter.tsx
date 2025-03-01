const Newsletter = () => {
  return (
    <section className='mb-4 w-full select-none rounded-lg border bg-gray-100 p-4 dark:border-gray-700 dark:bg-bgDark lg:mb-3'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 lg:flex-row'>
        {/* Title */}
        <h2 className='text-center text-lg font-semibold text-gray-900 dark:text-gray-200'>
          Newsletter
        </h2>

        {/* Form Section */}
        <form className='flex w-full items-center gap-4'>
          <input
            type='email'
            placeholder='Service currently disabled!'
            disabled
            className='h-10 w-full flex-1 rounded-lg border border-gray-400 bg-white px-3 text-gray-600 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400'
          />
          <button
            type='submit'
            disabled
            className='flex h-10 w-auto items-center rounded-lg border border-blue-400 bg-blue-500 px-4 py-2 font-medium text-white transition-all hover:shadow-lg dark:border-gray-600 dark:bg-gray-200 dark:text-black dark:hover:bg-white dark:hover:text-black'
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
