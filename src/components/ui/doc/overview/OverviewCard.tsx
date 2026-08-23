import { OVERVIEW_CARD_STYLES } from "./overviewCardStyles";
import type { OverviewItem } from "./types";

const OverviewCard = ({
  title,
  description,
  icon: Icon,
  color = "blue",
}: OverviewItem) => {
  const style = OVERVIEW_CARD_STYLES[color];

  return (
    <article
      className={`cursor-pointer rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${style.card} `}
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${style.iconBox} `}
        >
          <Icon aria-hidden="true" className={`h-5 w-5 ${style.icon}`} />
        </div>

        <h3 className={`font-semibold ${style.title}`}>{title}</h3>
      </div>

      <p className={`text-sm leading-6 ${style.description} `}>{description}</p>
    </article>
  );
};

export default OverviewCard;
