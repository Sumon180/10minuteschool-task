import React from "react";
import { Check } from "lucide-react"; // Replace or customize this icon as needed

type Pointer = {
  id: string;
  text: string;
  icon: string; // Currently unused because "0" provided — you can replace it later
  color: string;
};

export default function CoursePointers({ values }: { values: Pointer[] }) {
  return (
    <div className="bg-white rounded-md border border-gray-300 p-6 grid grid-cols-2 gap-5">
      {values.map((item) => (
        <div key={item.id} className="flex items-start space-x-3">
          {/* Icon */}
          <div className="mt-1">
            <Check className="text-primary w-5 h-5" />
            {/* You can switch icon logic here based on item.icon */}
          </div>

          {/* Text */}
          <p className="text-gray-800 text-base leading-relaxed font-medium">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
