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
export function PopularMovies() {
  // Array of movie data
  const movies = [
    {
      title: "Movie 1",
      duration: "60 of 134 m",
      imageUrl:
        "	https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/movies/popular/01.webp",
      id: 1,
    },

    {
      title: "Movie 2",
      duration: "45 of 120 m",
      imageUrl:
        "	https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/movies/popular/02.webp",
      id: 2,
    },
    {
      title: "Movie 3",
      duration: "30 of 90 m",
      imageUrl:
        "	https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/movies/popular/03.webp",
      id: 3,
    },
    {
      title: "Movie 4",
      duration: "70 of 140 m",
      imageUrl:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/movies/popular/04.webp",
      id: 4,
    },
    {
      title: "Movie 5",
      duration: "20 of 60 m",
      imageUrl:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/movies/popular/05.webp",
      id: 5,
    },
    {
      title: "Movie 6",
      duration: "50 of 110 m",
      imageUrl:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/movies/popular/06.webp",
      id: 6,
    },
    {
      title: "Movie 7",
      duration: "40 of 100 m",
      imageUrl:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/continue-watch/03.webp",
      id: 7,
    },
    {
      title: "Movie 8",
      duration: "55 of 130 m",
      imageUrl:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/continue-watch/03.webp",
      id: 8,
    },
    {
      title: "Movie 9",
      duration: "35 of 95 m",
      imageUrl:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/continue-watch/03.webp",
      id: 9,
    },
    {
      title: "Movie 10",
      duration: "25 of 70 m",
      imageUrl:
        "https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/continue-watch/03.webp",
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

  const scaleupanimate = false;

  const handleclick = (e: Event | any) => {
    e?.stopPropagation();
  };
  return (
    <div className=" lg:pt-5 relative pt-2 flex items-center justify-center px-4 lg:px-12  w-full">
      <div
        className={` overflow-x-hidden ${
          scaleupanimate ? "card-style-slider" : ""
        }  `}
      >
        <div className="flex items-center justify-between md:px-7 px-2 lg:mb-[-120px] mb-[-90px]">
          <h5 className="main-title text-capitalize mb-0">Popular Movies</h5>
          <a
            className="text-primary iq-view-all text-decoration-none text-[#3EE783]"
            href="/streamit/react/frontend/view-all"
          >
            View All
          </a>
        </div>

        <div className="flex justify-center lg:py-20 py-10 onlyon-bilwills-block-slider">
          <Swiper
            slidesPerView={6}
            spaceBetween={20}
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
                <div className="iq-card card-hover">
                  <div className="block-images relative w-full block-image">
                    <div className="img-box w-full">
                      <a
                        className="absolute inset-0"
                        href="/streamit/react/frontend/movies-detail"
                      ></a>
                      <img
                        src={movie.imageUrl}
                        alt="movie-card"
                        className="img-fluid object-cover w-full block border-0"
                      />
                    </div>
                    <div className="card-description with-transition">
                      <div className="cart-content">
                        <div className="content-left">
                          <h5 className="iq-title capitalize">
                            <a
                              href="/streamit/react/frontend/movies-detail"
                              className=" font-medium text-xl"
                            >
                              Giikre
                            </a>
                          </h5>
                          <div className="movie-time flex items-center my-2">
                            <span className="movie-time-text font-normal">
                              2hr: 12mins
                            </span>
                          </div>
                        </div>
                        <div className="watchlist ">
                          <a
                            className="watch-list-not flex items-center text-center gap-1"
                            href="/streamit/react/frontend/playlist"
                          >
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon-10"
                            >
                              <path
                                d="M12 4V20M20 12H4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span className="watchlist-label">Watchlist</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block-social-info items-center">
                      <ul className="p-0 m-0 flex gap-2 music-play-lists">
                        <li className="share relative flex items-center justify-center mb-0 text-center">
                          <span className="w-full h-full inline-block bg-transparent">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="-1 0 26 26"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M333 744c-1.77 0-3.315.925-4.204 2.312l-5.355-3.06c.346-.68.559-1.438.559-2.252 0-.503-.097-.979-.235-1.437l5.571-3.183A4.97 4.97 0 00333 738a5 5 0 005-5 5 5 0 00-5-5 5 5 0 00-5 5c0 .503.097.979.235 1.438l-5.571 3.182A4.973 4.973 0 00319 736a5 5 0 00-5 5 5 5 0 005 5c1.14 0 2.179-.396 3.02-1.038l6.035 3.498c-.02.18-.055.354-.055.54a5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5"
                                transform="translate(-314 -728)"
                                fill="#ffff"
                                stroke="none"
                                strokeWidth={1}
                                fillRule="evenodd"
                              />
                            </svg>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs inline-block">
                              <svg
                                width="25"
                                height="25"
                                className="share-shape"
                                viewBox="0 0 15 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                  fill="#191919"
                                ></path>
                              </svg>
                              <div className="overflow-hidden ">
                                <div className=" ">
                                  <a
                                    href="/streamit/react/frontend"
                                    target="_blank"
                                    className=""
                                  >
                                    <i className="fab fa-facebook-f">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16px"
                                        height="16px"
                                        fill="currentColor"
                                        className="bi bi-facebook"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                      </svg>
                                    </i>
                                  </a>
                                  <a
                                    href="/streamit/react/frontend"
                                    target="_blank"
                                  >
                                    <i className="fab fa-twitter">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16px"
                                        height="16px"
                                        fill="currentColor"
                                        className="bi bi-twitter-x"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                      </svg>
                                    </i>
                                  </a>
                                  <a href="/streamit/react/frontend">
                                    <i className="fas fa-link">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="currentColor"
                                        className="bi bi-link-45deg"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M4.715 6.542L3.343 7.914a3 3 0 104.243 4.243l1.828-1.829A3 3 0 008.586 5.5L8 6.086a1 1 0 00-.154.199 2 2 0 01.861 3.337L6.88 11.45a2 2 0 11-2.83-2.83l.793-.792a4 4 0 01-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 007.414 9.5l.775-.776a2 2 0 01-.896-3.346L9.12 3.55a2 2 0 112.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 10-4.243-4.243z" />
                                      </svg>
                                    </i>
                                    {/* <i className="fas fa-link"></i> */}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="share relative flex items-center justify-center mb-0 text-center">
                          <span className="w-full h-full inline-block bg-transparent">
                            <i className="far fa-heart">
                              <svg
                                width="12px"
                                height="12px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 6c-1.8-2.097-4.806-2.745-7.06-.825-2.255 1.92-2.573 5.131-.802 7.402 1.472 1.888 5.927 5.87 7.387 7.16.163.144.245.216.34.245a.456.456 0 00.258 0c.095-.029.176-.1.34-.245 1.46-1.29 5.915-5.272 7.387-7.16 1.77-2.27 1.492-5.502-.802-7.402C16.755 3.275 13.8 3.903 12 6z"
                                  stroke="#fff"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs inline-block">
                              <svg
                                width="15"
                                height="40"
                                className="share-shape "
                                viewBox="0 0 15 40"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                                  fill="#fff"
                                ></path>
                              </svg>
                              <div className="overflow-hidden">
                                <span>+51</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="iq-button">
                        <a
                          className="btn uppercase relative rounded-full p-4  text-center flex justify-center"
                          href="/streamit/react/frontend/movies-detail"
                        >
                          <svg
                            className=" size-[.75rem]  text-white
                            "
                            viewBox="0 0 24 24"
                            fill="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.409 9.353a2.998 2.998 0 010 5.294L8.597 21.614C6.534 22.736 4 21.276 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968z"
                              fill="#ffff"
                            />
                          </svg>

                          {/* <i className="fas fa-play ms-0"></i> */}
                        </a>
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

export default PopularMovies;
