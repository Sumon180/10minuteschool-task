import React from "react";
import Image from "next/image";

type EngagementCard = {
  background: {
    image: string;
    primary_color?: string;
    secondary_color?: string;
  };
  cta: {
    clicked_url: string;
    color?: string;
    text: string;
  };
  description: string;
  description_color?: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color?: string;
  top_left_icon_img: string;
};

export default function GroupJoinEngagement({
  values,
}: {
  values: EngagementCard[];
}) {
  return (
    <div className="space-y-6">
      {values.map((item) => (
        <div
          key={item.id}
          className="relative rounded-2xl overflow-hidden shadow-xl group p-6 md:p-10 flex flex-col md:flex-row items-center gap-6"
          style={{
            backgroundImage: `url(${item.background.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: item.background.primary_color || "#000",
          }}
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col max-md:items-center justify-center text-white w-full md:w-1/2 space-y-4">
            {/* Top-left icon */}
            <div className="w-32 md:w-56">
              <Image
                src={item.top_left_icon_img}
                alt="Top left icon"
                width={224}
                height={100}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h2
              className="text-xl md:text-3xl font-bold max-md:text-center"
              style={{ color: item.title_color || "#ffffff" }}
            >
              {item.title}
            </h2>

            {/* Description */}
            <p
              className="text-base md:text-lg max-md:text-center"
              style={{ color: item.description_color || "#eeeeee" }}
            >
              {item.description}
            </p>

            {/* CTA */}
            <a
              href={item.cta.clicked_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-primary text-white font-semibold py-2 px-4 rounded-md shadow hover:opacity-90 transition"
              // style={{ backgroundColor: item.cta.color || "#1d4ed8" }}
            >
              {item.cta.text}
            </a>
          </div>

          {/* Thumbnail */}
          <div className="w-full md:w-1/2">
            <Image
              src={item.thumbnail}
              alt="Thumbnail"
              width={500}
              height={300}
              className="rounded-md shadow-lg w-full h-auto object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
