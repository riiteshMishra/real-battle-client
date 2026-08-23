interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <span
      title="platform-name"
      className={`bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent ${className} `}
    >
      <strong>Real Battle</strong>
    </span>
  );
};

export default Logo;
