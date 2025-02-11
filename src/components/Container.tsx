interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className='mx-auto flex flex-col gap-6 px-4 py-6 md:max-w-[1300px] md:px-6'>
      {children}
    </div>
  );
};
