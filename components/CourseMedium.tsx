"use client";
import React, { useEffect, useState } from "react";
import { Checklist, Medium } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import CourseChecklist from "./CourseChecklist";

interface Props {
  medias: Medium[];
  checklist: Checklist[];
}

export default function CourseMedium({ medias, checklist }: Props) {
  const [playVideo, setPlayVideo] = useState(false);

  const videoMedias = medias.filter((media) => media.resource_type === "video");
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(
    videoMedias[0]?.resource_value || null
  );

  useEffect(() => {
    setPlayVideo(false);
  }, [selectedVideoId]);

  return (
    <>
      {/* Video Preview */}
      {selectedVideoId && (
        <div className="w-full max-w-4xl mx-auto aspect-video">
          {!playVideo ? (
            <div
              onClick={() => setPlayVideo(true)}
              className="w-full h-full relative cursor-pointer group"
            >
              <Image
                src={
                  videoMedias.find((m) => m.resource_value === selectedVideoId)
                    ?.thumbnail_url || "/default-thumbnail.jpg"
                }
                alt="Video Thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center">
                <button className="bg-white rounded-full p-1 border-4 border-black/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-primary opacity-80 group-hover:opacity-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
              title="Video Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            ></iframe>
          )}
        </div>
      )}

      <div className="p-5">
        {/* Thumbnail Swiper */}
        <div className="md:mb-10">
          <Swiper
            spaceBetween={12}
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {videoMedias.map((media, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => setSelectedVideoId(media.resource_value)}
                  className={`cursor-pointer rounded-sm overflow-hidden border-2 transition-transform hover:scale-105 ${
                    selectedVideoId === media.resource_value
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={media.thumbnail_url || "/default-thumbnail.jpg"}
                    alt={media.name}
                    width={500}
                    height={400}
                    className="w-full h-10 md:h-9 object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:block">
          <CourseChecklist checklist={checklist} />
        </div>
      </div>
    </>
  );
}
