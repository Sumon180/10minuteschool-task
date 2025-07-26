"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  description: string;
};

export default function CourseAbout({ values }: { values: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(values[0].id);

  const toggleAccordion = (id: string) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className="border rounded-md px-6">
      {values.map((item, i) => (
        <div
          key={item.id}
          className={`${
            values.length - 1 !== i
              ? "border-b border-gray-300 border-dashed"
              : ""
          }`}
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full cursor-pointer text-left text-xl py-4 focus:outline-none flex justify-between items-center"
          >
            <span dangerouslySetInnerHTML={{ __html: item.title }} />
            <ChevronDown
              className={`duration-300 ${
                openIndex === item.id && "rotate-180"
              }`}
            />
          </button>

          {openIndex === item.id && (
            <div
              className="pb-3 text-gray-700 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
