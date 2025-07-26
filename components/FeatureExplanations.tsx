import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

type FeatureItem = {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
};

export default function FeatureExplanations({
  values,
}: {
  values: FeatureItem[];
}) {
  return (
    <div className="rounded-md md:border md:border-gray-300 divide-y divide-gray-300 bg-white md:px-6">
      {values.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row md:items-start items-center justify-between gap-6 py-8"
        >
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <ul className="text-lg text-gray-600 space-y-1">
              {item.checklist.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-primary w-5 h-5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="w-full md:w-48 flex-shrink-0">
            <Image
              src={item.file_url}
              alt={item.title}
              width={192}
              height={108}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
