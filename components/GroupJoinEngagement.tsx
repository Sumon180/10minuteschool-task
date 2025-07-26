import React from "react";

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
    <div className="">
      {values.map((item) => (
        <div
          key={item.id}
          className="relative rounded-2xl overflow-hidden shadow-lg group p-10 flex items-center gap-5"
          style={{
            backgroundImage: `url(${item.background.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end h-full text-white">
            {/* Top-left icon */}
            <img
              src={item.top_left_icon_img}
              alt="Icon"
              className="w-56 h-auto shadow-md z-10"
            />
            {/* Title */}
            <h2
              className="text-2xl font-bold my-5"
              style={{ color: item.title_color || "#fff" }}
            >
              {item.title}
            </h2>

            {/* Description */}
            <p
              className="text-lg mb-4"
              style={{ color: item.description_color || "#ccc" }}
            >
              {item.description}
            </p>

            {/* CTA */}
            <a
              href={item.cta.clicked_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit bg-primary text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-primary transition"
              //   style={{ backgroundColor: item.cta.color || "#ffffff" }}
            >
              {item.cta.text}
            </a>
          </div>
          {/* Thumbnail */}
          <img
            src={item.thumbnail}
            alt="Thumbnail"
            className="w-1/2 h-auto rounded-md shadow-lg"
          />
        </div>
      ))}
    </div>
  );
}
