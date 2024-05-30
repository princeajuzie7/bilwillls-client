"use client";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Swiper as SwiperClass } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Pagination  , EffectFade} from "swiper/modules";

export function TopMovie() {
  const firstSwiperRef = React.useRef<SwiperClass | null>(null);
  const SecondSwiperRef = React.useRef<SwiperClass | null>(null);
  const movies = [
    {
      title: "Movie 1",
      duration: "60 of 134 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-10/01.webp",
      id: 1,
    },

    {
      title: "Movie 2",
      duration: "45 of 120 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-10/02.webp",
      id: 2,
    },
    {
      title: "Movie 3",
      duration: "30 of 90 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-10/03.webp",
      id: 3,
    },
    {
      title: "Movie 4",
      duration: "70 of 140 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-10/04.webp",
      id: 4,
    },
    {
      title: "Movie 5",
      duration: "20 of 60 m",
      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/top-10/05.webp",
      id: 5,
    },
  ];


  const [isHorizontal, setIsHorizontal] = useState( typeof window !== "undefined"  ?window.innerWidth < 991 : null );
 
   useEffect(() => {
     const handleResize = () => {
       if (typeof window !== 'undefined'){
         
         setIsHorizontal(window.innerWidth < 991);
       }
     };

     if (typeof window !== 'undefined') { 
       
       window.addEventListener("resize", handleResize); 
     }
     handleResize(); // Set initial state

     return () => {
       if (typeof window !== 'undefined') { 
         
         window.removeEventListener("resize", handleResize);
       }
     };
   }, []);


  const handleSlideChangeFirst = (swiper: SwiperCore) => {
    if (
      SecondSwiperRef?.current &&
      SecondSwiperRef?.current?.realIndex !== swiper.realIndex
    ) {
      SecondSwiperRef?.current.slideTo(swiper.realIndex);
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
    <div className="   w-full px-0">
      <div className="verticle-slider pb-[6.25rem] px-0 pt-0">
        <div className="slider">
          <div className="flex items-start relative">
            <div className="slider--col relative hidden lg:block">
              <div className=" vertical-slider-prev swiper-button absolute z-10 left-0 right-0 my-0 mx-auto top-[-40px]  ">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#fff"}
                    fill={"none"}
                  >
                    <path
                      d="M18 15C18 15 13.5811 9.00001 12 9C10.4188 8.99999 6 15 6 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
              <div className=" slider-thumbs hidden lg:block   ">
                <div className=" container w-full h-full overflow-hidden  ">
                  <Swiper
                    direction={"vertical"}
                    slidesPerView={3}
                    className="h-[40em] w-[21.875em] overflow-hidden"
                    onSwiper={(swiper) => {
                      firstSwiperRef.current = swiper;
                      console.log("First Swiper initialized", swiper);
                    }}
                    loop={true}
                    navigation={{
                      prevEl: ".vertical-slider-prev",
                      nextEl: ".vertical-slider-next",
                    }}
                    onSlideChange={handleSlideChangeFirst}
                    modules={[Pagination]}
                  >
                    {movies.map((movie, index) => (
                      <SwiperSlide key={movie.id}>
                        <div className="block-images  relative top-movieblock">
                          <div className=" img-box">
                            <img
                              src={movie.imageUrl}
                              className=" mix-blend-overlay max-w-full h-auto"
                              alt="X-Men"
                              loading="lazy"
                            />
                          </div>
                          <div className="absolute top-auto bottom-[1.25rem] py-0 px-[1.25rem]">
                            <h6 className="text-white text-[21.3px] font-medium leading-8 capitalize">
                              <a href="/streamit/react/frontend/shows-details">
                                X-Men
                              </a>
                            </h6>
                            <div className="flex items-center my-2 movie-time">
                              <span className="text-body">1 hr : 45mins</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="vertical-slider-next swiper-button absolute z-10 left-0 right-0 my-0 mx-auto bottom-[-40px] ">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#ffff"}
                    fill={"none"}
                  >
                    <path
                      d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </div>
            </div>
            <div className="slider-images  lg:absolute  z-0 w-full lg:h-full h-auto ">
              <div className="w-full h-full overflow-hidden">
                <Swiper
                  direction={isHorizontal ? "horizontal" : "vertical"}
                  slidesPerView={1}
                  className=" lg:h-full h-[25rem]"
                  navigation={{
                    prevEl: ".vertical-slider-prev",
                    nextEl: ".vertical-slider-next",
                  }}
                  onSwiper={(swiper) => {
                    SecondSwiperRef.current = swiper;
                    console.log("Second Swiper initialized", swiper);
                  }}
                  loop={true}
                  onSlideChange={handleSlideChangeSecond}
                  modules={[Pagination, EffectFade]}
                  effect={isHorizontal ? "fade" : ""}
                >
                  {movies.map((movie, index) => (
                    <SwiperSlide key={movie.id}>
                      <div className="lg:relative lg:top-movieblock h-full w-full ">
                        <div className="slider--image img-box">
                          <img
                            src={movie.imageUrl}
                            className=" mix-blend-overlay max-w-full h-full w-full object-cover"
                            alt="X-Men"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="description">
                        <div className="block-description">
                          <ul className="flex flex-wrap items-center p-0 mb-1 pb-1 list-none movie-tag">
                            <li className="relative text-capitalize text-sm tracking-wider">
                              <a
                                className="text-white no-underline"
                                href="/streamit/react/frontend/view-all"
                              >
                                Comedy
                              </a>
                            </li>
                            <li className="relative text-capitalize text-sm tracking-wider ml-2">
                              <a
                                className="text-white no-underline"
                                href="/streamit/react/frontend/view-all"
                              >
                                Romance
                              </a>
                            </li>
                            <li className="relative text-capitalize text-sm tracking-wider ml-2">
                              <a
                                className="text-white no-underline"
                                href="/streamit/react/frontend/view-all"
                              >
                                Action
                              </a>
                            </li>
                          </ul>
                          <h2 className="iq-title mb-3 text-[3.157rem]">
                            <a
                              className="text-white no-underline"
                              href="/streamit/react/frontend/shows-details"
                            >
                              X-Men
                            </a>
                          </h2>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center slider-ratting">
                              <ul className="flex items-center justify-left p-0 m-0 list-none text-yellow-500">
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
                              <span className="text-white ml-2 text-sm font-medium">
                                4.3/5
                              </span>
                            </div>
                            <span className="text-body">1 hr : 45mins</span>
                          </div>
                          <p className="mt-0 mb-3 line-clamp-2">
                            The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as
                            opposed to using Content here.
                          </p>
                          <div className="iq-button">
                            <a
                              className="btn bg-[#3EE783] text-uppercase relative text-[14px] leading-4 border-[#3ee783] border-[.063rem] px-8 py-4 rounded-sm flex flex-row-reverse w-fit items-center text-center justify-center gap-2 "
                              href="/streamit/react/frontend/movies-detail"
                            >
                              <span className="button-text font-bold capitalize text-white">
                                Play Now
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
                                    fill="#ffff"
                                  />{" "}
                                </g>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMovie;
