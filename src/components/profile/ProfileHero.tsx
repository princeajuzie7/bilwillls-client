"use client";
import React from "react";
import LiveIsland from "react-live-island";
import { SubscriptionEnum } from "@/enum";
import { PlusIcon } from "@/assets/icons";
import UserImg from "@/assets/images/user.jpg";
import Image from "next/image";
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

  render(): React.ReactNode {
    return (
      <div className="w-full mt-32 flex flex-col gap-2 items-center justify-center h-auto lg:px-0 px-5">
        <div>{this.Plan()}</div>
        <div>{this.User()}</div>

        <div>{this.Option()}</div>
      </div>
    );
  }
}

export default ProfileHero;
