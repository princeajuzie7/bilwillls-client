"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";
// import { Navigation } from "swiper/react";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);
export function ContinueWatching() {
  // Array of movie data
  const movies = [
    {
      title: "Movie 1",
      duration: "60 of 134 m",
      imageUrl:
        "	https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/01.webp",
    },
    {
      title: "Movie 2",
      duration: "45 of 120 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/02.webp",
    },
    {
      title: "Movie 3",
      duration: "30 of 90 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
    },
    {
      title: "Movie 4",
      duration: "70 of 140 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/04.webp",
    },
    {
      title: "Movie 5",
      duration: "20 of 60 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/05.webp",
    },
    {
      title: "Movie 6",
      duration: "50 of 110 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
    },
    {
      title: "Movie 7",
      duration: "40 of 100 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
    },
    {
      title: "Movie 8",
      duration: "55 of 130 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
    },
    {
      title: "Movie 9",
      duration: "35 of 95 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
    },
    {
      title: "Movie 10",
      duration: "25 of 70 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
    },
  ];

  const handleclick = (e: Event | any) => {
    e?.stopPropagation()
  }
  return (
    <div className=" lg:pt-24 pt-2 flex items-center justify-center px-4 xl:px-12 ">
      <div className=" overflow-hidden">
        <div className="flex items-center justify-between px-1 md:px-3 mb-4">
          <h5 className="main-title capitalize mb-0">Continue Watching</h5>
        </div>
        <div className="flex justify-center">
          <Swiper
            slidesPerView={5}
            // spaceBetween={10}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={index} className="swiper-slide-center">
                <div className=" w-full  px-[.4687rem] lg:px-4">
                  <div className="relative">
                    <div className="relative">
                      <div className="image-box">
                        <a href="#" className="block">
                          <img
                            src={movie.imageUrl}
                            alt="movie-card"
                            className="w-full object-cover block border-0 lg:h-[180px] h-[100px] rounded-[.188rem] mix-blend-overlay"
                          />
                        </a>
                      </div>
                      <div className="absolute left-0 right-0 bottom-4 top-auto">
                        <span className="mb-[.5rem] pl-5 block font-[500] text-sm lowercase">
                          {movie.duration}
                        </span>
                        <div className="h-[1px] w-full bg-[#d0e3f3]">
                          <div
                            role="progressbar"
                            className="progress-bar flex flex-col overflow-hidden justify-center text-center whitespace-nowrap h-full transition bg-[#3EE783] text-white"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            style={{ width: "60%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div
              className="swiper-button swiper-button-next swiper-button-disabled "
              onClick={handleclick}
            />
            <div className="swiper-button swiper-button-prev" />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ContinueWatching;
