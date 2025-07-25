// utils/fetchIeltsCourse.ts
import axios from "axios";

export interface Medium {
  // Fill as needed
}

export interface Checklist {
  // Fill as needed
}

export interface Seo {
  // Fill as needed
}

export interface CtaText {
  // Fill as needed
}

export interface Section {
  // Fill as needed
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
