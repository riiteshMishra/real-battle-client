import { Accordion } from "@/components/ui/accordion";

import TermsFAQHeader from "./TermsFAQHeader";
import TermsFAQItem from "./TermsFAQItem";

const TermsFAQ = () => {
  return (
    <section
      aria-labelledby="terms-faq-title"
      className="mb-12 rounded-xl border border-slate-200 bg-slate-50/80 p-6 md:p-8 dark:border-slate-800 dark:bg-slate-900/60"
    >
      <TermsFAQHeader />

      <Accordion type="single" collapsible className="space-y-2">
        <TermsFAQItem
          value="accept-terms"
          question="What happens when I accept these Terms?"
          answer="By creating an account, accessing Real Battle, registering for a tournament, or using our services, you agree to follow these Terms of Service and any applicable tournament-specific rules."
        />

        <TermsFAQItem
          value="freefire-account"
          question="Do I need to provide my Free Fire password?"
          answer="No. Real Battle does not require your Free Fire account password for ordinary tournament registration. You may need to provide tournament-related information such as your Free Fire UID or in-game name."
        />

        <TermsFAQItem
          value="cheating"
          question="What happens if I cheat?"
          icon="shield"
          answer="Cheating, hacks, unauthorized software, exploits, collusion, match manipulation, and other unfair practices are prohibited. Depending on the circumstances, violations may result in penalties, disqualification, reward cancellation, suspension, or account termination."
        />

        <TermsFAQItem
          value="tournament-rules"
          question="Do tournament-specific rules also apply?"
          icon="trophy"
          answer="Yes. Individual tournaments may have additional rules covering format, scoring, maps, match timing, check-in, room settings, proof submission, eligibility, and prizes. These rules apply together with the general Terms of Service."
        />

        <TermsFAQItem
          value="refund"
          question="Can I get a refund if I miss a tournament?"
          icon="wallet"
          answer="Not necessarily. Refund eligibility depends on the applicable tournament rules, cancellation circumstances, payment conditions, and applicable law. A refund should not be assumed solely because a participant misses a match or fails to check in."
        />

        <TermsFAQItem
          value="prize"
          question="When am I eligible for a tournament prize?"
          icon="prize"
          answer="Prize eligibility depends on the applicable tournament rules, verified results, eligibility requirements, and any required identity or payment verification. A prize may be delayed while suspected cheating, fraud, or other issues are reviewed."
        />

        <TermsFAQItem
          value="dispute"
          question="What should I do if I disagree with a match result?"
          answer="Report the issue through the designated Real Battle support or tournament channel within the applicable dispute period. Provide relevant screenshots, recordings, match information, or other evidence that can help administrators review the issue."
        />

        <TermsFAQItem
          value="suspension"
          question="Can Real Battle suspend my account?"
          icon="ban"
          answer="Yes. Real Battle may restrict, suspend, or terminate an account when reasonably necessary because of serious or repeated Terms violations, cheating, fraud, abuse, unauthorized access, security concerns, or other prohibited activity."
        />
      </Accordion>
    </section>
  );
};

export default TermsFAQ;
