interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className='mx-auto flex flex-col gap-2 md:max-w-[1300px] lg:px-4'>
      {children}
    </div>
  );
};
