import { ShieldCheck } from "lucide-react";

const trustItems = ["Data Protection", "Secure Gaming", "Privacy Focused"];

const PrivacyHeroTrust = () => {
  return (
    <div
      className="
        mt-8
        flex
        flex-wrap
        items-center
        gap-x-6
        gap-y-3
        text-xs
        text-blue-100/80
        dark:text-slate-400
      "
    >
      {trustItems.map((item) => (
        <span key={item} className="flex items-center gap-2">
          <ShieldCheck aria-hidden="true" className="h-4 w-4 text-green-300" />

          {item}
        </span>
      ))}
    </div>
  );
};

export default PrivacyHeroTrust;
