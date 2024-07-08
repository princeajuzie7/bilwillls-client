"use client";
import React from "react";
import LiveIsland from "react-live-island";
import { SubscriptionEnum } from "@/enum";
import { PlusIcon, LoveIcon, PlayIcon, FavIcon } from "@/assets/icons";
import UserImg from "@/assets/images/user.jpg";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
interface ProfileHeroProps {
  planType: SubscriptionEnum;
}
export class ProfileHero extends React.Component<{}, ProfileHeroProps> {
  constructor(props: {}) {
    super(props);
    this.state = { planType: SubscriptionEnum.BASIC }; // Directly assign the enum value here
  }

  private async UpdatePlanOption(newplanoption: SubscriptionEnum) {
    this.setState({ planType: newplanoption });
  }
  private RenderPlanOption() {
    return Object.values(SubscriptionEnum).map((plan) => {
      return (
        <li
          key={plan}
          onClick={() => this.UpdatePlanOption(plan)}
          className={`cursor-pointer ${
            plan === this.state.planType ? "text-[#3EE783]" : ""
          }`}
        >
          {plan}
        </li>
      );
    });
  }

  private Plan() {
    return (
      <div>
        <LiveIsland
          className="px-2.5 py-1 sticky "
          wrapperClassName=""
          initialAnimation={false}
          largeClassName=" pl-[20px]"
          triggerType="hover"
          top={90}
        >
          {(isSmall) =>
            isSmall ? (
              <p className="text-center text-[#3EE783]">
                {this.state.planType}
              </p>
            ) : (
              <div className="flex flex-col justify-center items-center gap-2 h-full">
                <h1>choose your Plan Type</h1>
                <ul className="gap-4">{this.RenderPlanOption()}</ul>
              </div>
            )
          }
        </LiveIsland>
      </div>
    );
  }
  private User() {
    return (
      <div className="flex items-center justify-center flex-col gap-3">
        <div className="relative">
          <div>
            <PlusIcon
              height={25}
              width={25}
              color="#fff"
              className="absolute bottom-[-7px]  p-1 rounded-full bg-[#191919] border-[3px] border-black cursor-pointer right-[-7px]"
            />
          </div>
          <Image
            src={UserImg}
            alt="user"
            width={200}
            height={200}
            className=" h-[149px] object-cover rounded-md w-[156px]"
          />
        </div>
        <div className="text-center ">
          <h2 className=" font-bold text-2xl ">Mark Poul</h2>
          <span className="text-[#545453] text-base ">@markpaul01</span>
        </div>
      </div>
    );
  }

  private Option() {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex  items-center gap-2">
          <div className="flex flex-col items-center text-center  bg-[#191919] lg:px-8 px-5 rounded-lg py-1">
            <h5 className="font-bold">21</h5>
            <span className="text-[#545453] text-sm">Following</span>
          </div>
          <div className="flex flex-col items-center text-center  bg-[#191919] lg:px-8 px-5 rounded-lg py-1">
            <h5 className="font-bold">18</h5>
            <span className="text-[#545453] text-sm">Folllowers</span>
          </div>
          <div className="flex flex-col items-center text-center  bg-[#191919] lg:px-8 px-5 rounded-lg py-1">
            <h5 className="font-bold">21</h5>
            <span className="text-[#545453] text-sm">Liked Movies</span>
          </div>
        </div>
        <div className="w-full bg-[#191919] px-4 py-2 text-center rounded-lg cursor-pointer">
          <span className="text-[#545453]">Edit Profile</span>
        </div>
      </div>
    );
  }

  private Recentlywatched() {
    return (
      <div>
        <TabPanel>
          <div>
            <div className="">
              <div className="relative h-auto w-[350px] bg-[#292929] rounded-lg p-[2px]">
                <div className="">
                  <div className="absolute flex text-center flex-col top-2  left-2">
                    <div className="rounded-full p-[8px] cursor-pointer flex item-center justify-center bg-black w-fit ">
                      <LoveIcon
                        height={20}
                        width={20}
                        color=""
                        fill="#3EE783"
                      />
                    </div>
                    <span>21k</span>
                  </div>
                  <img
                    alt="hello"
                    src={
                      "https://cinewaves.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fspider.4490e5f5.jpg&w=3840&q=75"
                    }
                    height={200}
                    width={200}
                    className="object-cover rounded-md w-[auto] h-[233px]"
                    loading="lazy"
                  />
                </div>

                <div className="pl-1">
                  <div>
                    <h1 className="font-bold text-2xl pt-2 ">The Hunter</h1>
                    <p className="text-sm text-[#545453] ">
                      PG-13 2hr 49min . Adventure, Drama, Sci-Fi
                    </p>
                  </div>
                  <div>
                    <span className=" font-medium text-sm mb-2 ">Summary</span>
                    <p className="text-[13px] text-[#545453]  w-full">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Odit natus esse illo, obcaecati voluptatum doloribus quos
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center my-3">
                    <div>
                      <button className="flex items-center text-center border-2 border-[#3EE783] px-2 rounded-sm">
                        <PlayIcon
                          height={20}
                          width={20}
                          color=""
                          className="border-none"
                          fill="#3EE783"
                        />
                        <p className="text-[#3EE783] text-sm">Watch Trailer</p>
                      </button>
                    </div>
                    <div className="pr-3">
                      <FavIcon
                        height={25}
                        width={25}
                        color=""
                        className="border-none cursor-pointer"
                        fill="#3EE783"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    );
  }

  private RenderLiked() {
    return (
      <div>
        <TabPanel>Content 2</TabPanel>
      </div>
    );
  }

  private TabHead() {
    return (
      <TabList
        className={`flex items-center gap-4 mb-3 justify-center lg:justify-start `}
      >
        <Tab className="data-[selected]:text-[#3EE783] data-[hover]:text-[#3EE783] outline-none font-semibold">
          Recently Watched
        </Tab>
        <Tab className="data-[selected]:text-[#3EE783] data-[hover]:text-[#3EE783] outline-none font-semibold">
          Liked Movies
        </Tab>
      </TabList>
    );
  }

  private RenderTabs() {
    return (
      <TabGroup>
        {this.TabHead()}
        <TabPanels className=" px-4 lg:px-0 mb-7">
          {this.Recentlywatched()}
          {this.RenderLiked()}
        </TabPanels>
      </TabGroup>
    );
  }
  render(): React.ReactNode {
    return (
      <div className="flex flex-col gap-5">
        <div className="w-full mt-32 flex flex-col gap-2 items-center justify-center h-auto lg:px-0 px-5">
          <div>{this.Plan()}</div>
          <div>{this.User()}</div>

          <div>{this.Option()}</div>
        </div>

        <div className="lg:pl-28 pl-0 flex lg:items-start items-center justify-center lg:justify-start ">
          {" "}
          {this.RenderTabs()}
        </div>
      </div>
    );
  }
}

export default ProfileHero;
