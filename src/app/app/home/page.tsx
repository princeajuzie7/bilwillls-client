import React from "react";
import { HeroSection } from "@/components";
import AvatarGenerator from "@/components/test/Avatar";
import { ContinueWatching, Top10Movies } from "@/components/carousel";
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
      <AvatarGenerator />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at fugiat odit rerum accusamus alias quasi reprehenderit quis, nesciunt velit.
      </div>
    </div>
  );
}
