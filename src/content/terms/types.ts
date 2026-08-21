export type TermsParagraphSection = {
  id: string;
  title: string;
  type: "paragraphs";
  content: string[];
};

export type TermsListSection = {
  id: string;
  title: string;
  type: "list";
  items: string[];
};

export type TermsSubsection = {
  title: string;
  items: string[];
};

export type TermsSubsectionsSection = {
  id: string;
  title: string;
  type: "subsections";
  subsections: TermsSubsection[];
};

export type TermsContactSection = {
  id: string;
  title: string;
  type: "contact";
  content: string[];
};

export type TermsSection =
  | TermsParagraphSection
  | TermsListSection
  | TermsSubsectionsSection
  | TermsContactSection;
