"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export function MovieGenreCarousel() {
  const GeneresValue = [
    {
      id: 1,
      name: "Action",
      image:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/genre/01.webp",
    },
    {
      id: 2,
      name: "Adventure",
      image:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/genre/02.webp",
    },
    {
      id: 3,
      name: "Animation",
      image:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/genre/03.webp",
    },

    {
      id: 4,
      name: "Comedy",
      image:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/genre/04.webp",
    },

    {
      id: 5,
      name: "Crime",
      image:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/genre/05.webp",
    },

    {
      id: 6,
      name: "Documentary",
      image:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/genre/06.webp",
    },

    {
      id: 7,
      image:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/genre/07.webp",
    },
  ];
  return (
    <div className="movie-geners-block">
      <div className="container-fliud py-6 lg:px-[2.95em] px-[12px]">
        <div className=" overflow-hidden card-stlye-slider">
          <div className="flex items-center justify-between md:px-7 px-2 mb-[-50px]">
            <h5 className="main-title text-capitalize mb-0">Movie Geners</h5>
            <a
              className="text-primary iq-view-all text-decoration-none text-[#3EE783]"
              href="/streamit/react/frontend/view-all"
            >
              View All
            </a>
          </div>
          <div className="swiper-wrapper">
            <Swiper
              slidesPerView={6}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
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
            >
              {GeneresValue.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="iq-card-geners card-hover-style-two">
                    <div className="block-imagess relative w-full">
                      <div className="img-box rounded relative">
                        <img
                          src={item.image}
                          alt="geners-img"
                          className=" w-full object-cover rounded mix-blend-overlay"
                        />
                        <div className="blog-description">
                          <h6 className="mb-0 iq-title">
                            <a
                              className="no-underline capitalize line-clamp-2 p-2"
                              href="/streamit/react/frontend/view-all"
                            >
                              {item.name}
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-button swiper-button-next swiper-button-disabled"></div>
              <div className="swiper-button swiper-button-prev"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieGenreCarousel;
