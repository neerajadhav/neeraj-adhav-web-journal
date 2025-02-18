import { PrinterIcon } from '@heroicons/react/24/outline';
import { FaPrint } from 'react-icons/fa';

interface PrintButtonProps {
  onClick: () => void;
}

const PrintButton: React.FC<PrintButtonProps> = ({ onClick }) => {
  return (
    <button
      className='rounded-full border border-zinc-100 p-1 text-sm hover:border-zinc-200 hover:bg-zinc-100 dark:border-gray-800 dark:hover:border-gray-700 dark:hover:bg-gray-950 dark:hidden'
      onClick={onClick}
    >
      <PrinterIcon className='h-5 w-5' />
    </button>
  );
};

export default PrintButton;
