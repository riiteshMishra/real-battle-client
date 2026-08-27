import { Mail, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="border-foreground/10 bg-foreground/3 h-fit rounded-2xl border p-6 backdrop-blur-xl lg:col-span-2">
      <h3 className="text-2xl font-semibold">Need Help?</h3>

      <p className="text-foreground/60 mt-3 text-sm leading-6">
        Whether you&apos;re facing a tournament issue, account problem, or
        simply have a question about Real Battle, send us a message.
      </p>

      <div className="mt-8 space-y-4">
        <div className="border-foreground/10 flex items-center gap-4 rounded-xl border p-4">
          <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
            <Mail className="h-5 w-5" />
          </div>

          <div>
            <p className="text-foreground/40 text-xs">Email</p>
            <p className="text-sm font-medium">support.realbattle@gmail.com</p>
          </div>
        </div>

        <div className="border-foreground/10 flex items-center gap-4 rounded-xl border p-4">
          <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
            <MessageCircle className="h-5 w-5" />
          </div>

          <div>
            <p className="text-foreground/40 text-xs">Support</p>
            <p className="text-sm font-medium">Player Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
