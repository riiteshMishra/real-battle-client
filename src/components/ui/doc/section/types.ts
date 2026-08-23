export interface Subsection {
  title: string;
  items: string[];
}

export type DocumentSection =
  | {
      id: string;
      title: string;
      type: "paragraphs";
      content: string[];
    }
  | {
      id: string;
      title: string;
      type: "list";
      items: string[];
    }
  | {
      id: string;
      title: string;
      type: "subsections";
      subsections: Subsection[];
    }
  | {
      id: string;
      title: string;
      type: "contact";
      content: string[];
    };
