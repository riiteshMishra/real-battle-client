import Link from "next/link";

//INTERFACE
interface LinksProp {
  title: string;
  href: string;
}
const Links = ({ title, href }: LinksProp) => {
  return (
    <li>
      <Link href={href} title={title} className="font-semibold text-sm">
        {title}
      </Link>
    </li>
  );
};

export default Links;
