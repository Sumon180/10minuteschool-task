"use client";

import { Checklist } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  checklist: Checklist[];
}

export default function CourseDetails({ checklist }: Props) {
  return (
    <>
      <div className="text-black mb-5 flex items-center gap-3">
        <span className="text-3xl font-bold">৳3850</span>{" "}
        <span className="line-through text-2xl font-medium text-gray-500">
          ৳5000
        </span>{" "}
        <span className="bg-amber-600 text-white px-3">1150 ৳ ছাড়</span>
      </div>
      <button className="w-full text-lg p-2 rounded-md bg-primary text-white">
        কোর্সটি কিনুন
      </button>
      <div>
        <p className="text-2xl mt-5 font-medium mb-2">এই কোর্সে যা থাকছে</p>
        <ul className="text-black space-y-3">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <Image
                src={item.icon || "/default-thumbnail.jpg"}
                alt={item.id}
                width={100}
                height={100}
                className="size-5"
              />
              <span className="text-lg">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
