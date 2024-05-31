"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export function Top10Series() {
  const movies = [
    {
      title: "The Hunter",

      imageUrl:
        "https://templates.iqonic.design/streamit/react/frontend/assets/images/tab-slider/01.webp",
      id: 1,
      seasons: [
        {
          season: 1,
          episodes: [
            {
              episode: 1,
              title: "Fire And Blood",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/01.webp",
              id: 1,
              duration: "45 minutes",
            },
            {
              episode: 2,
              title: "The Pointy Endr",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/03.webp",
              id: 2,
              duration: "45 minutes",
            },
            {
              episode: 3,
              title: "You Win or Die",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/04.webp",
              id: 3,
              duration: "45 minutes",
            },
            {
              episode: 4,
              title: "The Black Queen",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/05.webp",
              id: 4,
              duration: "45 minutes",
            },
          ],
        },
        {
          season: 2,
          episodes: [
            {
              episode: 1,
              title: "Valar Morghulis",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/05.webp",
              id: 1,
              duration: "45 minutes",
            },
            {
              episode: 2,
              title: "Black Water",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/06.webp",
              id: 2,
              duration: "45 minutes",
            },
            {
              episode: 3,
              title: "The Ghost Harrenrial",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/07.webp",
              id: 3,
              duration: "45 minutes",
            },
            {
              episode: 4,
              title: "Garden of Bones",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/08.webp",
              id: 4,
              duration: "45 minutes",
            },
          ],
        },
        {
          season: 3,
          episodes: [
            {
              episode: 1,
              title: "Mhysa",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/09.webp",
              id: 1,
              duration: "45 minutes",
            },
            {
              episode: 2,
              title: "Second Sons",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/10.webp",
              id: 2,
              duration: "45 minutes",
            },
            {
              episode: 3,
              title: "The Climb",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/11.webp",
              id: 3,
              duration: "45 minutes",
            },
            {
              episode: 4,
              title: "Kissed by Fire",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/12.webp",
              id: 4,
              duration: "45 minutes",
            },
          ],
        },
      ],
      description:
        "Sand and dust storms (SDS), also known as sirocco, haboob, yellow dust, white storms, and the harmattan, are a natural phenomenon linked with land",
    },

    {
      title: "Pirates of Dayones",
      imageUrl:
        "	https://templates.iqonic.design/streamit/react/frontend/assets/images/tab-slider/02.webp",
      id: 2,
      seasons: [
        {
          season: 1,
          episodes: [
            {
              episode: 1,
              title: "The Curse of the black Pearls",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/13.webp",
              id: 1,
              duration: "45 minutes",
            },
            {
              episode: 2,
              title: "Dead Man's Chest",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/14.webp",
              id: 2,
              duration: "45 minutes",
            },
            {
              episode: 3,
              title: "At World's End",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/15.webp",
              id: 3,
              duration: "45 minutes",
            },
            {
              episode: 4,
              title: "On Stranger Tides",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/16.webp",
              id: 4,
              duration: "45 minutes",
            },
          ],
        },
        {
          season: 2,
          episodes: [
            {
              episode: 1,
              title: "Valar Morghulis",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/17.webp",
              id: 1,
              duration: "45 minutes",
            },
            {
              episode: 2,
              title: "Black Water",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/18.webp",
              id: 2,
              duration: "45 minutes",
            },
            {
              episode: 3,
              title: "The Ghost Harrenrial",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/19.webp",
              id: 3,
              duration: "45 minutes",
            },
            {
              episode: 4,
              title: "Garden of Bones",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/20.webp",
              id: 4,
              duration: "45 minutes",
            },
          ],
        },
        {
          season: 3,
          episodes: [
            {
              episode: 1,
              title: "Mhysa",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/21.webp",
              id: 1,
              duration: "45 minutes",
            },
            {
              episode: 2,
              title: "Second Sons",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/22.webp",
              id: 2,
              duration: "45 minutes",
            },
            {
              episode: 3,
              title: "The Climb",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/23.webp",
              id: 3,
              duration: "45 minutes",
            },
            {
              episode: 4,
              title: "Kissed by Fire",
              bannerimg:
                "https://templates.iqonic.design/streamit/react/frontend/assets/images/tv-show/season/24.webp",
              id: 4,
              duration: "45 minutes",
            },
          ],
        },
      ],
      description:
        "Sand and dust storms (SDS), also known as sirocco, haboob, yellow dust, white storms, and the harmattan, are a natural phenomenon linked with land",
    },
  ];

  
 const [activeTab, setActiveTab] = React.useState<{ [key: number]: number }>(
   movies.reduce((acc, movie) => {
     acc[movie.id] = movie.seasons[0].season;
     return acc;
   }, {} as { [key: number]: number })
 );

 const handleNavigate = (movieId: number, season: number) => {
   setActiveTab((prevTabs) => ({
     ...prevTabs,
     [movieId]: season,
   }));
  };
 
  return (
    <div className="tab-slider">

      <div className="slider">
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          className="tab-slider-banner"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {movies.map((movie, idx) => (
            <SwiperSlide key={idx}>
              <div className="tab-slider-banner-images">
                <img src={movie.imageUrl} alt="tab-slider-background" />
              </div>

              <div className="relative w-full">
                <div className="container-fluid lg:px-[2.95em] px-0">
                  <div className=" flex flex-wrap justify-between items-center min-h-screen h-full my-4">
                    <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12">
                      <div className="tab-left-details">
                        <div className="flex items-center gap-3 mb-4">
                          <a href="/streamit/react/frontend">
                            <img
                              src="https://templates.iqonic.design/streamit/react/frontend/assets/images/movies/trending-label.webp"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                          <h5 className="text-gold lg:text-[1.333rem] text-base">
                            <span className="text-primary text-[#3EE783]">
                              #{movie.id}
                            </span>{" "}
                            in Series Yesterday
                          </h5>
                        </div>
                        <h1 className="texture-text mb-2 font-medium capitalize lg:text-[4.209rem] text-[1.5615rem] ">
                          {movie.title}
                        </h1>
                        <p className="mb-0 text-sm line-clamp-2">
                          {movie.description}
                        </p>
                        <ul className="flex items-center list-inline gap-2 p-0 mt-3 mb-10 movie-tag">
                          <li className="text-lg">Nov 2022</li>
                          <li className="text-lg">Season 1</li>
                        </ul>
                        <div className="iq-button">
                          <a
                            className="btn bg-[#3EE783] text-uppercase relative text-[14px] leading-4 border-[#3ee783] border-[.063rem] px-8 py-4 rounded-sm flex flex-row-reverse w-fit items-center text-center justify-center gap-2 "
                            href="/streamit/react/frontend/movies-detail"
                          >
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
                            <span className="button-text font-bold capitalize text-white">
                              STREAM NOW
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-1 col-lg-2 col-xxl-3"></div> */}
                    <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 mt-5 md:mt-0">
                      <div className="tab-block">
                        <h4 className="tab-title capitalize mb-2 text-[1.777rem] ">
                          All Episode
                        </h4>
                        <div className="tab-bottom-bordered border-0 trending-custom-tab">
                          <div
                            className="nav nav-tabs nav-pills mb-3   nav-pills flex items-center flex-nowrap overflow-x-auto overflow-y-hidden text-center"
                    
                          >
                            {movie.seasons.map((seasons, idx) => (
                              <div
                                className="nav-item cursor-pointer"
                                key={idx}
                              >
                                <div
                                
                                  className={
                                    activeTab[movie.id] === seasons.season
                                      ? "text-[#3EE783]"
                                      : ""
                                  }
                                  tabIndex={0}
                                  onClick={() =>
                                    handleNavigate(movie.id, seasons.season)
                                  }
                                >
                                  season {seasons.season}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div
                            className="tab-content trending-content
                          "
                          >
                            <div
                           
                              className="fade tab-pane active show"
                            >
                              <ul className="list-inline m-0 p-0">
                                {movie.seasons
                                  .find(
                                    (season) =>
                                      season.season === activeTab[movie.id]
                                  )
                                  ?.episodes.map((episode) => (
                                    <li
                                      className="flex items-center gap-3"
                                      key={episode.id}
                                    >
                                      <div className="image-box flex-shrink-0">
                                        <img
                                          src={episode.bannerimg}
                                          alt="image-icon"
                                          className="img-fluid rounded"
                                        />
                                      </div>
                                      <div className="image-details">
                                        <h6 className="mb-1 capitalize">
                                          <span className="text-primary text-[#3EE783]">
                                            E{episode.id}
                                          </span>{" "}
                                          - {episode.title}
                                        </h6>
                                        <small>{episode.duration}</small>
                                      </div>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="joint-arrows">
                <div className="swiper-button swiper-button-next"></div>
                <div className="swiper-button swiper-button-prev"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Top10Series;
