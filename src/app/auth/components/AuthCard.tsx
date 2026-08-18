interface AuthCardProps {
  children: React.ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div className="w-full max-w-6xl rounded-lg border border-border bg-card p-6 shadow-lg">
      {children}
    </div>
  );
};

export default AuthCard;
