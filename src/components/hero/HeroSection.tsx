"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore, { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function HeroSection() {
  const firstSwiperRef = useRef<SwiperClass | null>(null);
  const secondSwiperRef = useRef<SwiperClass | null>(null);

  const slides = [
    {
      img: "https://templates.iqonic.design/streamit/react/frontend/assets/images/movies/ott1.webp",
      title: "The Hunter",
      duration: "2hr 6 minutes",
    },
    {
      img: "https://templates.iqonic.design/streamit/react/frontend/assets/images/movies/ott3.webp",
      title: "The Hunter",
      duration: "2hr 6 minutes",
    },
    {
      img: "https://templates.iqonic.design/streamit/react/frontend/assets/images/movies/ott2.webp",
      title: "The Hunter",
      duration: "2hr 6 minutes",
    },
  ];

  const handleSlideChangeFirst = (swiper: SwiperCore) => {
    if (
      secondSwiperRef.current &&
      secondSwiperRef.current.realIndex !== swiper.realIndex
    ) {
      secondSwiperRef.current.slideTo(swiper.realIndex);
    }
  };

  const handleSlideChangeSecond = (swiper: SwiperCore) => {
    if (
      firstSwiperRef.current &&
      firstSwiperRef.current.realIndex !== swiper.realIndex
    ) {
      firstSwiperRef.current.slideTo(swiper.realIndex);
    }
  };

  return (
    <div>
      <div className="relative flex  justify-end  h-screen mt[-20px]">
        <div className="relative my-auto">
          <div className=" custom-hero-bg w-[27rem] relative mt-[74px] pt-9 pb-9 pl-9 pr-0 right-0 ">
            {/* <h1 className=" text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, non
              tempore culpa ullam suscipit architecto. Doloribus iste odit vitae
              culpa! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore consectetur illum fuga animi provident doloremque minima
              ullam ex unde sint! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Eveniet officiis nemo saepe sunt sapiente
              molestias distinctio dolore hic quasi sequi. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aliquid, eveniet. Doloremque
              hic, officia, modi perspiciatis et illo soluta inventore quibusdam
              omnis optio quo quisquam dolorem, facilis voluptatum non porro
              labore asperiores tempora officiis ut adipisci voluptates quas
              repudiandae dicta? Doloremque animi harum officia tempora. Nobis
              ratione id voluptatem nihil iure! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Alias non laborum veniam officia
              blanditiis neque ut quia eos itaque sed!{" "}
            </h1> */}
            <div className="relative pb-[3.4375rem]">
              <Swiper
                spaceBetween={20}
                slidesPerView={2}
                modules={[Navigation]}
                onSwiper={(swiper) => {
                  firstSwiperRef.current = swiper;
                  console.log("First Swiper initialized", swiper);
                }}
                loop={true}
                navigation={{
                  prevEl: ".slider-prev",
                  nextEl: ".slider-next",
                }}
                onSlideChange={handleSlideChangeFirst}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <div className="w-full h-full overflow-hidden rounded">
                        <img
                          src={slide.img}
                          className="object-cover w-full rounded mix-blend-overlay h-[20.625rem]"
                          alt={slide.title}
                        />
                        <div className="absolute bottom-4 top-auto right-0 left-4">
                          <h6 className="font-[500] mb-0 text-[16px] text-white">
                            {slide.title}
                          </h6>
                          <span className="inline-block text-[.75rem] text-white">
                            {slide.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="slider-prev swiper-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="slider-next swiper-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-0 w-full h-full flex ">
          <Swiper
            slidesPerView={1}
            modules={[Navigation]}
            onSwiper={(swiper) => {
              secondSwiperRef.current = swiper;
              console.log("Second Swiper initialized", swiper);
            }}
            loop={true}
            navigation={{
              prevEl: ".slider-prev",
              nextEl: ".slider-next",
            }}
            onSlideChange={handleSlideChangeSecond}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full overflow-hidden rounded">
                  <img
                    src={slide.img}
                    className="object-cover w-full rounded mix-blend-overlay h-full transition-[3s]"
                    alt={slide.title}
                  />
                  <div className="absolute bottom-4 top-auto right-0 left-4">
                    <h6 className="font-[500] mb-0 text-[16px] text-white">
                      {slide.title}
                    </h6>
                    <span className="inline-block text-[.75rem] text-white">
                      {slide.duration}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
