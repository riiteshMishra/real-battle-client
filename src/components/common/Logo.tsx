interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <span
      title="platform-name"
      className={`text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 ${className}   `}
    >
      <strong>Real Battle</strong>
    </span>
  );
};

export default Logo;
