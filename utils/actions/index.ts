"use server";

import { ApiResponse } from "@/types";
import axios from "axios";

export async function getIeltsCourseData(lang: "en" | "bn" = "en") {
  try {
    const data = await axios.get<ApiResponse>(
      "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
      {
        params: { lang },
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          Accept: "application/json",
        },
      }
    );
    // console.log(data);

    return { success: true, data };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error: "Failed to fetch course data" };
  }
}
