import React from "react";
import { Footer, HeroSection } from "@/components";
import AvatarGenerator from "@/components/test/Avatar";
import { ContinueWatching, Top10Movies, OnlyonBilwills, TopMovie, PopularMovies, Top10Series, RecommendedForYou, TopPicsForYou } from "@/components/carousel";
import { MovieGenreCarousel } from "@/components/genere";
export default function Page() {
  return (
    <div >
      <div>

      <HeroSection />
      </div>
      <div>
        <ContinueWatching />
      </div>
      <div className="">
     <Top10Movies />
      </div>
      <div>
        <OnlyonBilwills />
      </div>
      <div className="pb-[20px]">
        <TopMovie />
      </div>
      <div>
        <PopularMovies /> 
      </div>
      <div>
        <Top10Series /> 
      </div>
      <div>
        <MovieGenreCarousel />
      </div>
      <div>
        <RecommendedForYou />
      </div>

      <div className="">
        <TopPicsForYou />
      </div>
        
      <Footer />
    </div>
  );
}
