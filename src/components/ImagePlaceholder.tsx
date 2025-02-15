import { PhotoIcon } from '@heroicons/react/24/outline';

export const ImagePlaceholder = () => {
  return (
    <div className='flex aspect-video w-full items-center justify-center rounded-xl bg-gray-300 dark:bg-gray-950'>
      <PhotoIcon className='h-12 w-12 font-semibold text-gray-950 dark:text-zinc-300' />
    </div>
  );
};
