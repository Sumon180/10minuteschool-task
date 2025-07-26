"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Checklist, Section } from "@/types";
import CourseAbout from "./CourseAbout";
import CourseChecklist from "./CourseChecklist";
import CourseInstructor from "./CourseInstructor";
import CoursePointers from "./CoursePointers";
import FeatureExplanations from "./FeatureExplanations";
import Features from "./Features";
import GroupJoinEngagement from "./GroupJoinEngagement";

interface Props {
  checklist: Checklist[];
  sections: Section[];
}

// Helper to render section content
function renderSection(section: Section) {
  switch (section.type) {
    case "instructors":
      return <CourseInstructor values={section.values} />;
    case "features":
      return <Features values={section.values} />;
    case "group_join_engagement":
      return <GroupJoinEngagement values={section.values} />;
    case "pointers":
      return <CoursePointers values={section.values} />;
    case "about":
      return <CourseAbout values={section.values} />;
    case "feature_explanations":
      return <FeatureExplanations values={section.values} />;
    default:
      return null;
  }
}

// Main component
export default function CourseDetails({ checklist, sections }: Props) {
  const [showChecklist, setShowChecklist] = useState(false);

  // Memoized scroll handler for performance
  const handleScroll = useCallback(() => {
    setShowChecklist(window.scrollY > 1000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      className="w-full flex items-start justify-between"
      aria-label="Course Details"
    >
      <article className="md:w-[62%] space-y-10">
        {sections.map((section, i) => (
          <section key={i} aria-labelledby={`section-title-${i}`}>
            {[
              "instructors",
              "features",
              "group_join_engagement",
              "about",
              "feature_explanations",
            ].includes(section.type) && (
              <h2
                id={`section-title-${i}`}
                className="text-2xl md:text-3xl font-semibold mb-3"
              >
                {section.name}
              </h2>
            )}
            {renderSection(section)}
          </section>
        ))}
      </article>

      {/* Checklist Sidebar appears after scrollY > 1000 */}
      {showChecklist && (
        <aside
          className="hidden md:block bg-white border w-full md:max-w-[330px] lg:max-w-[440px] p-5 sticky top-20"
          aria-label="Course Checklist"
        >
          <CourseChecklist checklist={checklist} />
        </aside>
      )}
    </section>
  );
}
