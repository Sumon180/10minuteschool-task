import Image from "next/image";
import React from "react";

export default function CourseInstructor({ values }: { values: any[] }) {
  return (
    <div className="space-y-6">
      {values.map((instructor, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-4 border border-gray-300 rounded-md p-4"
        >
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={200}
            height={200}
            className="w-40 h-40 md:w-20 md:h-20 rounded-full object-cover"
          />
          <div className="flex flex-col max-md:items-center">
            <p className="text-xl font-semibold hover:text-primary">
              {instructor.name}
            </p>
            <p className="text-gray-500 max-md:text-center">
              {instructor.short_description}
            </p>
            <div
              className="text-sm text-gray-600 mt-1 max-md:text-center"
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
