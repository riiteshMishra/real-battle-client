export type CookieSectionType =
  | "paragraphs"
  | "list"
  | "subsections"
  | "contact";

export interface CookieSection {
  id: string;
  title: string;
  type: CookieSectionType;

  content?: string[];
  items?: string[];

  subsections?: {
    title: string;
    items: string[];
  }[];
}
