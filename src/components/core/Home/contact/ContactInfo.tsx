import { Mail, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-foreground/3 p-6 backdrop-blur-xl lg:col-span-2">
      <h3 className="text-2xl font-semibold">Need Help?</h3>

      <p className="mt-3 text-sm leading-6 text-foreground/60">
        Whether you&apos;re facing a tournament issue, account problem, or
        simply have a question about Real Battle, send us a message.
      </p>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-4 rounded-xl border border-foreground/10 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>

          <div>
            <p className="text-xs text-foreground/40">Email</p>
            <p className="text-sm font-medium">support@realbattle.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-foreground/10 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MessageCircle className="h-5 w-5" />
          </div>

          <div>
            <p className="text-xs text-foreground/40">Support</p>
            <p className="text-sm font-medium">Player Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
