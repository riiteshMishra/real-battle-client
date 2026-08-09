interface HeadingProps {
  title: string;
  className?: string;
}

const SubHeading = ({ title, className = "" }: HeadingProps) => {
  return <h2 className={`font-bold ${className}`}>{title}</h2>;
};

export default SubHeading;
