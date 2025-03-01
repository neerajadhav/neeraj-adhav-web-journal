
const Newsletter = () => {
  return (
    <section className='mb-3 w-full select-none rounded-lg border bg-[#f6f6f6] p-3 dark:border-bgDark dark:bg-bgDark lg:mb-2'>
      <div className='mx-auto flex flex-col items-center justify-center gap-3 lg:flex-row'>
        <h2 className='text text-center font-semibold'>Newsletter</h2>
        <form className='flex w-full items-center gap-3'>
          <input
            type='email'
            placeholder='Service currently disabled!'
            disabled
            className='w-19/20 h-10 flex-1 rounded-lg border border-gray-700 bg-white px-2 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-bgDark'
          />
          <button
            type='submit'
            disabled
            className='text-md w-1/20 flex items-center justify-center gap-2 rounded-lg border border-blue-400 bg-blue-500 px-3 py-2 font-medium text-white transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400 dark:border-gray-600 dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black md:flex lg:w-1/6'
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
