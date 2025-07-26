"use client";

import React, { useEffect, useRef, useState } from "react";
import { Checklist, Medium } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import CourseChecklist from "./CourseChecklist";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Props {
  medias: Medium[];
  checklist: Checklist[];
}

export default function CourseMedium({ medias, checklist }: Props) {
  const videoMedias = medias.filter((media) => media.resource_type === "video");

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const mainSwiperRef = useRef<SwiperType | null>(null);
  // to control main swiper

  const [navReady, setNavReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // track current main swiper index
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavReady(true);
    }
  }, []);

  // When activeIndex changes, update selectedVideoId
  useEffect(() => {
    setSelectedVideoId(null); // stop playing video on slide change
  }, [activeIndex]);

  return (
    <div className="md:absolute right-0 top-0 w-full md:max-w-[330px] lg:max-w-[440px] md:p-1 md:bg-white md:border md:border-gray-300">
      {/* Main Video Swiper */}
      <div className="relative">
        {navReady && (
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          >
            {videoMedias.map((video, i) => (
              <SwiperSlide key={i}>
                <div className="w-full max-w-4xl mx-auto aspect-video">
                  {selectedVideoId !== video.resource_value ? (
                    <div
                      onClick={() => setSelectedVideoId(video.resource_value)}
                      className="w-full h-full relative group"
                    >
                      <Image
                        src={video.thumbnail_url || "/default-thumbnail.jpg"}
                        alt="Video Thumbnail"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center">
                        <button className="bg-white cursor-pointer rounded-full p-1 border-4 border-black/20">
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
                      src={`https://www.youtube.com/embed/${video.resource_value}?autoplay=1`}
                      title="Video Preview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full"
                    ></iframe>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Prev/Next buttons */}
        <button
          ref={prevRef}
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer z-50 bg-white/80 text-black p-0.5 rounded-full hover:bg-white"
        >
          <ChevronLeftIcon />
        </button>
        <button
          ref={nextRef}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-50 bg-white/80 text-black p-0.5 rounded-full hover:bg-white"
        >
          <ChevronRightIcon />
        </button>
      </div>

      {/* Thumbnail Swiper */}
      <div className="p-5">
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
                  onClick={() => {
                    mainSwiperRef.current?.slideTo(index);
                    setSelectedVideoId(null);
                  }}
                  className={`cursor-pointer rounded-sm overflow-hidden border-2 ${
                    activeIndex === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={media.thumbnail_url || "/default-thumbnail.jpg"}
                    alt={media.name}
                    width={500}
                    height={400}
                    className="w-full h-10 md:h-9 object-cover transition-transform hover:scale-105"
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
    </div>
  );
}
