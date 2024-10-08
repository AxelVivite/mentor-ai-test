interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
      {children}
    </h1>
  );
}

export default Title;
