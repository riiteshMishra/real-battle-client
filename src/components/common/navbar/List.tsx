import { navLinks } from "@/src/data/navlinks";
import Links from "./Links";

const List = () => {
  return (
    <ul className="hidden sm:flex gap-x-10 items-center select-none font-roboto font-semibold">
      {navLinks.map((link) => (
        <Links key={link.id} title={link.title} href={link.href} />
      ))}
    </ul>
  );
};

export default List;
