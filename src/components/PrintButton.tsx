import { PrinterIcon } from '@heroicons/react/24/outline';
import { FaPrint } from 'react-icons/fa';

interface PrintButtonProps {
  onClick: () => void;
}

const PrintButton: React.FC<PrintButtonProps> = ({ onClick }) => {
  return (
    <button
      className='flex flex-row items-center gap-2 rounded-full border-gray-400 p-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-700 hover:text-white dark:border-gray-600 dark:text-zinc-300 dark:hover:bg-gray-950'
      onClick={onClick}
    >
      <FaPrint className='h-5 w-5 text-gray-600 dark:text-gray-400' />
    </button>
  );
};

export default PrintButton;
