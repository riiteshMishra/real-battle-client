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
        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
      >
        {link.icon && (
          <link.icon className="w-4 h-4 group-hover:text-orange-500 transition-colors" />
        )}
        <span>{link.text}</span>
      </Link>
    </li>
  );
};

export default FooterLink;
