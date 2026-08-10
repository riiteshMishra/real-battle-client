import Link from "next/link";

//INTERFACE
interface LinksProp {
  title: string;
  href: string;
}
const Links = ({ title, href }: LinksProp) => {
  return (
    <li>
      <Link href={href} title={title} className=" text-sm">
        {title}
      </Link>
    </li>
  );
};

export default Links;
