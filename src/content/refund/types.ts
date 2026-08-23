export type RefundSectionType =
  "paragraphs" | "list" | "subsections" | "contact";

export interface RefundSubsection {
  id: string;
  title: string;
  items: string[];
}

export interface RefundSection {
  id: string;
  title: string;
  type: RefundSectionType;
  content?: string[];
  items?: string[];
  subsections?: RefundSubsection[];
}
