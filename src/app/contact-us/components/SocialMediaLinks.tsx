import { socialMediaLinks } from "./social-links";

const SocialMediaLinks = () => {
  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Connect With Us
      </h2>

      <p className="mb-8 max-w-2xl text-slate-600 dark:text-slate-400">
        Choose your favorite platform to reach us instantly. We&apos;re active
        across our social channels.
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {socialMediaLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center rounded-lg p-4 transition-all duration-200 ${social.bgColor}`}
              aria-label={`Connect on ${social.name}`}
            >
              <Icon
                className={`mb-2 h-6 w-6 ${social.color}`}
                aria-hidden="true"
              />

              <span className="text-center text-xs font-semibold text-slate-900 dark:text-white">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default SocialMediaLinks;
