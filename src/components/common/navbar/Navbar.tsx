import Downloadbtn from "../Download";
import Logo from "../Logo";
import ThemeToggler from "../ThemeToggler";
import Burger from "./Burger";
import List from "./List";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-990 py-3 backdrop-blur-2xl px-4 sm:px-0 ">
        <nav className="max-w-6xl w-[97%]  mx-auto flex justify-between items-center">
          <Logo />
          <List />
          <div className="flex items-center gap-x-2">
            <Downloadbtn />
            <ThemeToggler />
            <Burger />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
