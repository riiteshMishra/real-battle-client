// components/Footer/FooterLink.tsx
import React from "react";
import Link from "next/link";
import { FooterLink as FooterLinkType } from "@/src/data/footer-data";

interface FooterLinkProps {
  link: FooterLinkType;
}

const FooterLink: React.FC<FooterLinkProps> = ({ link }) => {
  return (
    <li>
      <Link
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
      >
        {link.icon && (
          <link.icon className="h-4 w-4 transition-colors group-hover:text-orange-500" />
        )}
        <span>{link.text}</span>
      </Link>
    </li>
  );
};

export default FooterLink;
