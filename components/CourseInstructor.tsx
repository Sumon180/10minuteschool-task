import Image from "next/image";
import React from "react";

export default function CourseInstructor({ values }: { values: any[] }) {
  console.log(values);

  return (
    <div className="space-y-6">
      {values.map((instructor, index) => (
        <div
          key={index}
          className="flex items-center gap-4 border border-gray-300 rounded-md p-4"
        >
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="text-xl font-semibold hover:text-primary">
              {instructor.name}
            </p>
            <p className="text-gray-500">{instructor.short_description}</p>
            <div
              className="text-sm text-gray-600 mt-1"
              dangerouslySetInnerHTML={{
                __html: instructor.description,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
