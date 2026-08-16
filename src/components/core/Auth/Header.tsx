import Logo from "../../common/Logo";

interface HeaderProps {
  isLogin: boolean;
}

const Header = ({ isLogin }: HeaderProps) => {
  return (
    <div className="mb-5 text-center space-y-4">
      <Logo className="font-sekuya mb-10" />

      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        {isLogin ? "Welcome back" : "Create your account"}
      </h1>

      <p className="mt-1 text-xs text-muted-foreground">
        {isLogin
          ? "Login to continue to your account"
          : "Create an account to get started"}
      </p>
    </div>
  );
};

export default Header;
