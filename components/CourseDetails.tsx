"use client";

import { Checklist, Section } from "@/types";
import React, { useEffect, useState } from "react";
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

export default function CourseDetails({ checklist, sections }: Props) {
  const [showChecklist, setShowChecklist] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowChecklist(true);
      } else {
        setShowChecklist(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex items-start justify-between">
      <div className="md:w-[62%] space-y-10">
        {sections.map((section, i) => (
          <div key={i}>
            {(section.type === "instructors" ||
              section.type === "features" ||
              section.type === "group_join_engagement" ||
              section.type === "about" ||
              section.type === "feature_explanations") && (
              <p className="text-2xl md:text-3xl font-semibold mb-3">
                {section.name}
              </p>
            )}

            {section.type === "instructors" && (
              <CourseInstructor values={section.values} />
            )}
            {section.type === "features" && (
              <Features values={section.values} />
            )}
            {section.type === "group_join_engagement" && (
              <GroupJoinEngagement values={section.values} />
            )}
            {section.type === "pointers" && (
              <CoursePointers values={section.values} />
            )}
            {section.type === "about" && (
              <CourseAbout values={section.values} />
            )}
            {section.type === "feature_explanations" && (
              <FeatureExplanations values={section.values} />
            )}
          </div>
        ))}
      </div>

      {/* Checklist Sidebar appears after scrollY > 300 */}
      {showChecklist && (
        <div className="hidden md:block bg-white border w-full md:max-w-[330px] lg:max-w-[440px] p-5 sticky top-20">
          <CourseChecklist checklist={checklist} />
        </div>
      )}
    </div>
  );
}
