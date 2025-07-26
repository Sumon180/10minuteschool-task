// utils/fetchIeltsCourse.ts
import axios from "axios";

export interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface MetaTag {
  content: string;
  type: "name" | "property";
  value: string;
}

export interface Schema {
  meta_name: string; // e.g., "ld-json"
  meta_value: string; // JSON string of the structured data
  type: string; // e.g., "ld-json"
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
  defaultMeta: MetaTag[];
  schema: Schema[];
}

export interface CtaText {
  // Fill as needed
}

export interface Section {
  type: string;
  name: string;
  values: any;
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

export interface ApiResponse {
  data: Data;
  success: boolean;
}
