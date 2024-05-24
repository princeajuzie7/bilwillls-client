"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";
// import { Navigation } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; // Add Swiper CSS
import "swiper/css/navigation"; // Add Swiper Navigation CSS

SwiperCore.use([Navigation]);
export function Top10Movies() {
  // Array of movie data
  const movies = [
    {
      title: "Movie 1",
      duration: "60 of 134 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-ten-number/01.webp",
      id: 1,
    },

    {
      title: "Movie 2",
      duration: "45 of 120 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-ten-number/02.webp",
      id: 2,
    },
    {
      title: "Movie 3",
      duration: "30 of 90 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-ten-number/03.webp",
      id: 3,
    },
    {
      title: "Movie 4",
      duration: "70 of 140 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-ten-number/04.webp",
      id: 4,
    },
    {
      title: "Movie 5",
      duration: "20 of 60 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-ten-number/05.webp",
      id: 5,
    },
    {
      title: "Movie 6",
      duration: "50 of 110 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-ten-number/06.webp",
      id: 6,
    },
    {
      title: "Movie 7",
      duration: "40 of 100 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
      id: 7,
    },
    {
      title: "Movie 8",
      duration: "55 of 130 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
      id: 8,
    },
    {
      title: "Movie 9",
      duration: "35 of 95 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
      id: 9,
    },
    {
      title: "Movie 10",
      duration: "25 of 70 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/continue-watch/03.webp",
      id: 10,
    },
  ];

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner, or placeholder content
  }

  const handleclick = (e: Event | any) => {
    e?.stopPropagation();
  };
  return (
    <div className=" lg:pt-24 pt-2 flex items-center justify-center px-4 lg:px-12  ">
      <div className=" overflow-hidden">
        <div className="flex items-center justify-between md:px-3 px-2 mb-4">
          <h5 className="main-title text-capitalize mb-0">
            Top Ten Movies To Watch
          </h5>
          <a
            className="text-primary iq-view-all text-decoration-none text-[#3EE783]"
            href="/streamit/react/frontend/view-all"
          >
            View All
          </a>
        </div>

        <div className="flex justify-center iq-top-ten-block-slider">
          <Swiper
            slidesPerView={6}
         
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
                slidesPerView: 4,
                spaceBetween: 0,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={index} className="swiper-slide-center">
                <div className="relative lg:px-4 px-0">
                  <div className="">
                    <a href="" className="relative z-[1] block">
                      <img
                        src={movie.imageUrl}
                        alt={movie.title}
                        className="w-full h-auto max-w-full object-cover rounded-[0.188rem] transition"
                      />
                    </a>
                    <span
                      className="absolute lg:bottom-[-65px] right-0 texture-text font-extrabold transition-all z-[5] lg:text-[7.5em] text-[4.5rem] bottom-[-40px] hover:bottom-[-30px] lg:hover:bottom-[-50px]"
                      style={{
                        transitionDuration: "0.4s",
                        transitionTimingFunction: "ease-out",
                      }}
                    >
                      {movie.id}
                    </span>
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

export default Top10Movies;
