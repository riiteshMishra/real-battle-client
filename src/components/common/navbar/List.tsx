import { navLinks } from "@/src/data/navlinks";
import Links from "./Links";

const List = () => {
  return (
    <ul className="font-roboto hidden items-center gap-x-10 font-semibold select-none sm:flex">
      {navLinks.map((link) => (
        <Links key={link.id} title={link.title} href={link.href} />
      ))}
    </ul>
  );
};

export default List;
