interface AuthCardProps {
  children: React.ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div className="border-border bg-card w-full max-w-6xl rounded-lg border p-6 shadow-lg">
      {children}
    </div>
  );
};

export default AuthCard;
