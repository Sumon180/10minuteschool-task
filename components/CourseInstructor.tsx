import Image from "next/image";
import React from "react";

type Instructor = {
  name: string;
  image: string;
  short_description: string;
  description: string;
};

export default function CourseInstructor({ values }: { values: Instructor[] }) {
  return (
    <div className="space-y-6">
      {values.map((instructor, index) => (
        <div
          key={index}
          className="flex flex-row items-center gap-4 md:border md:border-gray-300 rounded-md md:p-4"
        >
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={200}
            height={200}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex flex-col">
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
