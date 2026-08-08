interface HeadingProps {
  title: string;
  className?: string;
}

const Heading = ({ title, className = "" }: HeadingProps) => {
  return <h2 className={`text-3xl font-bold ${className}`}>{title}</h2>;
};

export default Heading;
