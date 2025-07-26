import Image from "next/image";
import React from "react";
import CourseMedium from "./CourseMedium";
import { Data } from "@/types";

interface Props {
  course: Data;
}

export default function CourseDescription({ course }: Props) {
  const medias = course.media;
  const checklist = course.checklist;

  return (
    <section
      className="p-3 py-20 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/ui_(1)_1716445506383.jpeg')",
      }}
    >
      <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-4">
        <div className="md:max-w-[61%]">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Dev_Handoff_Q1_24_Frame_2_1725444418666.jpeg"
              alt="star"
              width={100}
              height={50}
              className="w-40 h-auto"
            />
            <p>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: course.description }}
            className="text-lg text-gray-200 font-medium"
          />
        </div>
        <div className="md:absolute right-0 top-0 w-full md:max-w-[330px] lg:max-w-[440px] p-1 bg-white border border-gray-300">
          <CourseMedium medias={medias} checklist={checklist} />
        </div>
      </div>
    </section>
  );
}
