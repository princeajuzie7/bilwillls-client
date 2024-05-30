"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,EffectFade } from "swiper/modules";
import SwiperCore, { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export function HeroSection() {
  const firstSwiperRef = useRef<SwiperClass | null>(null);
  const secondSwiperRef = useRef<SwiperClass | null>(null);

  const slides = [
    {
      img: "https://cinewaves.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarvels.2d0280cd.jpg&w=3840&q=75",
      title: "The Hunter",
      duration: "2hr 6 minutes",
    },
    {
      img: "https://cinewaves.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflash.17d04f92.jpeg&w=3840&q=75",
      title: "The Hunter",
      duration: "2hr 6 minutes",
    },
    {
      img: "https://cinewaves.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspider.4490e5f5.jpg&w=3840&q=75",
      title: "The Hunter",
      duration: "2hr 6 minutes",
    },
  ];

  const handleSlideChangeFirst = (swiper: SwiperCore) => {
 if (
   secondSwiperRef?.current &&
   secondSwiperRef?.current?.realIndex !== swiper.realIndex
 ) {
   secondSwiperRef?.current.slideTo(swiper.realIndex);
 }
  };

  const handleSlideChangeSecond = (swiper: SwiperCore) => {
    if (
      firstSwiperRef?.current &&
      firstSwiperRef?.current.realIndex !== swiper?.realIndex
    ) {
      firstSwiperRef?.current.slideTo(swiper?.realIndex);
    }
  };

  return (
    <div>
      <div className="relative flex  justify-end  lg:h-screen h-[32.125rem;]">
        <div className="relative my-auto hidden lg:block">
          <div className=" custom-hero-bg w-[38em] relative mt-[74px]  pt-9 pb-9 pl-9 pr-0 right-0 z-10 ">
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
                slidesPerView={2}
                modules={[Navigation]}
                onSwiper={(swiper) => {
                  firstSwiperRef.current = swiper;
                  console.log("First Swiper initialized", swiper);
                }}
                effect={"fade"}
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
                  color={"#fff"}
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
                  color={"#fff"}
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
        <div className="absolute z-0 w-full lg:h-full flex h-[32rem]">
          <Swiper
            slidesPerView={1}
            effect={"fade"}
            modules={[Navigation, EffectFade]}
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
                <div className="w-full h-full overflow-hidden rounded slider--image ">
                  <img
                    src={slide.img}
                    className="object-cover w-full rounded  h-full transition-[3s] mix-blend-overlay  "
                    alt={slide.title}
                  />
                  <div className=" lg:left-16 md:left-8  left-0 lg:px-8 px-4 absolute top-[55%] z-[99] transform translate-y-[-50%] w-full">
                    <div className="flex items-center h-full">
                      <div className="lg:w-1/2 w-full">
                        <div className="slider-content">
                          <div className="flex items-center RightAnimate mb-3">
                            <span className="badge leading-none opacity-[1] font-bold rounded-0 text-dark text-uppercase px-3 py-2 me-3 bg-white mr-3 text-black">
                              G
                            </span>
                            <ul className="p-0 mb-0 list-inline flex flex-wrap items-center  movie-tag">
                              <li className="relative capitalize text-sm font-[600] tracking-wide pr-[1.65rem]  ">
                                <a
                                  className="no-underline text-[.875rem]"
                                  href="/streamit/react/frontend/view-all"
                                >
                                  History
                                </a>
                              </li>
                              <li className="relative capitalize text-sm tracking-wide font-[600]">
                                <a
                                  className="no-underline text-[.875rem]"
                                  href="/streamit/react/frontend/view-all"
                                >
                                  Action
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h1 className="texture-text big-font tracking-wide line-clamp-1 capitalize RightAnimate-two md:text-[3.4375rem] font-bold lg:text-[4.375rem] text-[1.5615rem]">
                            Better call saul
                          </h1>
                          <p className="line-clamp-3  mt-[.625rem] mb-8 max-w-full w-[37.5rem] RightAnimate-two ">
                            Ex-con artist Jimmy McGill turns into a small-time
                            attorney and goes through a series of trials and
                            tragedies, as he transforms into his alter ego Saul
                            Goodman, a morally challenged criminal lawyer.
                          </p>
                          <div className="flex flex-wrap items-center gap-3 RightAnimate-three">
                            <div className="slider-rating flex items-center">
                              <ul className="ratting-start p-0 m-0 list-inline text-yellow-500 flex items-center justify-start">
                                <li>
                                  <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    height={20}
                                    width={20}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <g id="SVGRepo_iconCarrier">
                                      {" "}
                                      <path
                                        d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                        fill="#ECBA12"
                                      />{" "}
                                    </g>
                                  </svg>
                                </li>
                              </ul>
                              <span className="text-white ms-2 font-size-14 fw-500">
                                4.3/5
                              </span>
                            </div>

                            <span className="text-sm font-medium">
                              2 Hr : 55 Mins
                            </span>
                            <div className="text-primary text-sm font-medium capitalize flex ">
                              <div className="text-[#3EE783]">genres: </div>
                              <a
                                className="no-underline ml-1"
                                href="/streamit/react/frontend/view-all"
                              >
                                horror
                              </a>
                            </div>
                            <div className="text-primary text-sm font-medium capitalize flex">
                              <div className="text-[#3EE783]">Starting: </div>

                              <a
                                className="no-underline ml-1"
                                href="/streamit/react/frontend/cast-detail"
                              >
                                Brenda Chapman{" "}
                              </a>
                              <span className="text-body">,</span>
                              <a
                                className="no-underline ml-1"
                                href="/streamit/react/frontend/cast-detail"
                              >
                                {" "}
                                Caleb Deschannel
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="iq-button mt-[2.812rem] flex items-center gap-2">
                          <a
                            className="btn bg-[#3EE783] text-uppercase relative text-[14px] leading-4 border-[#3ee783] border-[.063rem] px-6 py-4 rounded-sm flex flex-row-reverse w-fit items-center text-center justify-center gap-2 "
                            href="/streamit/react/frontend/movies-detail"
                          >
                            <span className="button-text font-bold capitalize">
                              Play
                            </span>
                            <svg
                              width="15px"
                              height="15px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              stroke="#fff"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                  d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                                  fill="#fff"
                                />{" "}
                              </g>
                            </svg>
                          </a>
                          <a
                            className=" bg-[#3EE783]/50 text-uppercase relative text-[14px] leading-4 border-[#3ee783]/25 border-[.063rem] px-6 lg:py-[11px] py-2 rounded-sm flex  w-fit items-center text-center justify-center gap-2 "
                            href="/streamit/react/frontend/movies-detail"
                          >
                            <svg
                              width="25px"
                              height="25px"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.6172 6.09517C9.00223 6.09517 6.07173 9.02567 6.07173 12.6406C6.07173 16.2556 9.00223 19.1861 12.6172 19.1861C16.2321 19.1861 19.1626 16.2556 19.1626 12.6406C19.1626 9.02567 16.2321 6.09517 12.6172 6.09517ZM4.61719 12.6406C4.61719 8.22235 8.19891 4.64062 12.6172 4.64062C17.0355 4.64062 20.6172 8.22235 20.6172 12.6406C20.6172 17.0589 17.0355 20.6406 12.6172 20.6406C8.19891 20.6406 4.61719 17.0589 4.61719 12.6406Z"
                                fill="white"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.6172 11.6406C13.1695 11.6406 13.6172 12.0137 13.6172 12.474V15.8073C13.6172 16.2675 13.1695 16.6406 12.6172 16.6406C12.0649 16.6406 11.6172 16.2675 11.6172 15.8073V12.474C11.6172 12.0137 12.0649 11.6406 12.6172 11.6406Z"
                                fill="white"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.6172 9.64062C11.6172 9.08834 12.0627 8.64062 12.6122 8.64062H12.6222C13.1717 8.64062 13.6172 9.08834 13.6172 9.64062C13.6172 10.1929 13.1717 10.6406 12.6222 10.6406H12.6122C12.0627 10.6406 11.6172 10.1929 11.6172 9.64062Z"
                                fill="white"
                              />
                            </svg>
                            <span className="button-text font-bold capitalize">
                              More Info
                            </span>
                         
                          </a>
                        </div>
                      </div>
                    </div>
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
