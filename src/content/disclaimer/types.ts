export type DisclaimerSectionType =
  | "paragraphs"
  | "list"
  | "subsections"
  | "contact";

export interface DisclaimerSection {
  id: string;
  title: string;
  type: DisclaimerSectionType;

  content?: string[];
  items?: string[];

  subsections?: {
    title: string;
    items: string[];
  }[];
}
