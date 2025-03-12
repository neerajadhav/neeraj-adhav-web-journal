'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Container } from './Container';

const bgColors: Record<'info' | 'warning' | 'error' | 'success', string> = {
  info: 'bg-blue-100 border border-blue-200 text-blue-800 dark:bg-blue-900 dark:border-blue-800 dark:text-blue-200',
  warning:
    'bg-yellow-100 border border-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-800 dark:text-yellow-200',
  error:
    'bg-red-100 text-red-800 border border-red-700 dark:bg-red-900 dark:border-red-800 dark:text-red-200',
  success:
    'bg-green-100 border border-green-200 text-green-800 dark:bg-green-900 dark:border-green-800 dark:text-green-200',
};

const Notice = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [hideNotice, setHideNotice] = useState<boolean>(true);

  const router = useRouter();

  const routerPush = (url: string) => {
    router.push(url);
  };

  const toggleFullscreenBtn = () => {
    disableNotice();
    routerPush('/blog');
    toggleFullscreen();
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const NOTICE_VERSION = '';

  const noticeData: {
    message: ReactNode;
    type: 'info' | 'warning' | 'error' | 'success';
  }[] = [
    {
      message: (
        <div className='flex w-full items-center justify-between gap-3 text-sm'>
          <div>
            <strong>Update :</strong> Checkout the new <b>Feed</b> section.
          </div>
          <div>
            <button
              onClick={() => {
                routerPush('/feed');
                setHideNotice(true);
              }}
              className='rounded-lg bg-black px-3 py-1 text-sm text-white hover:bg-opacity-70 dark:bg-white dark:text-black dark:hover:bg-gray-950 dark:hover:text-white'
            >
              Go
            </button>
          </div>
        </div>
      ),
      type: 'success',
    },
    {
      message: (
        <div className='flex w-full items-center justify-between gap-3 text-sm'>
          <div>
            <strong>Update :</strong> New Blog has been dropped checkout.
          </div>
          <div>
            <button
              onClick={() => {
                routerPush('/feed');
                setHideNotice(true);
              }}
              className='rounded-lg bg-black px-3 py-1 text-sm text-white hover:bg-opacity-70 dark:bg-white dark:text-black dark:hover:bg-gray-950 dark:hover:text-white'
            >
              Go
            </button>
          </div>
        </div>
      ),
      type: 'info',
    },
    {
      message: (
        <div className='flex w-full items-center justify-between gap-3 text-sm'>
          <div>
            <strong>Warning :</strong> Site is under construction!
          </div>
        </div>
      ),
      type: 'warning',
    },
  ];

  useEffect(() => {
    const storedVersion = localStorage.getItem('disabledNoticeVersion');
    if (storedVersion !== NOTICE_VERSION) {
      setHideNotice(false);
      localStorage.removeItem('disabledNoticeVersion');
    }
  }, []);

  const disableNotice = () => {
    localStorage.setItem('disabledNoticeVersion', NOTICE_VERSION);
    setHideNotice(true);
  };

  if (hideNotice || !noticeData[parseInt(NOTICE_VERSION)]) {
    return null;
  }

  const { message, type } = noticeData[parseInt(NOTICE_VERSION)];
  const bgColorClass =
    bgColors[type] ||
    'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';

  return (
    <Container>
      {/* <PageSection
        title='Notice'
        
        extraButtons={
          
        }
      > */}
      <div className='mb-4 px-3 lg:px-0'>
        <div
          className={`${bgColorClass} flex items-center justify-between rounded-xl p-3`}
        >
          <div>{message}</div>
          <button
            onClick={disableNotice}
            className='rounded-full p-1 text-sm text-red-400 hover:bg-zinc-100 dark:hover:bg-gray-950'
          >
            <FaTimes className='h-5 w-5' />
          </button>
        </div>
        {/* </PageSection> */}
      </div>
    </Container>
  );
};

export default Notice;
