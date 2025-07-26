import React from "react";
import Image from "next/image";

export default function Features({ values }: { values: any[] }) {
  return (
    <div className="bg-[#121828] text-white py-10 px-6 md:px-10 rounded-md grid grid-cols-1 sm:grid-cols-2 gap-8">
      {values.map((item) => (
        <div
          key={item.id}
          className="flex items-start gap-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="min-w-[48px]">
            <Image
              src={item.icon}
              alt={item.title}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
