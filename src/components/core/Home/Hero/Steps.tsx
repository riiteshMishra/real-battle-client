import { Smartphone, Gamepad2, Trophy } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Join",
    description: "Join a tournament",
  },
  {
    icon: Gamepad2,
    title: "Play",
    description: "Compete & dominate",
  },
  {
    icon: Trophy,
    title: "Win",
    description: "Win real rewards",
  },
];

const Steps = () => {
  return (
    <div className="my-14 flex items-start justify-center select-none">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div key={step.title} className="flex items-start">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <h3 className="mt-2 text-xs font-semibold sm:text-sm">
                {step.title}
              </h3>

              <p className="mt-1 text-[8px] font-semibold sm:text-xs text-muted">
                {step.description}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="mx-3 mt-5 h-0.5 w-8 bg-linear-to-r from-orange-600 via-orange-400 to-orange-100 sm:w-12" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Steps;
