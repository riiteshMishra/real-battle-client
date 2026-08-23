import { Scale } from "lucide-react";

interface ContactHeaderProps {
  title: string;
  description: string;
}

const ContactHeader = ({ title, description }: ContactHeaderProps) => {
  return (
    <div className="mb-8 flex items-start gap-4">
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-indigo-100
          dark:bg-indigo-950/60
        "
      >
        <Scale
          aria-hidden="true"
          className="
            h-6
            w-6
            text-indigo-600
            dark:text-indigo-400
          "
        />
      </div>

      <div>
        <h2
          id="contact-title"
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
            dark:text-white
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-2
            text-sm
            leading-relaxed
            text-slate-600
            md:text-base
            dark:text-slate-300
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
