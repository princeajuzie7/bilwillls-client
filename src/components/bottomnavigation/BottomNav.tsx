"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function BottomNav() {
  const bottomItem = [
    {
      name: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="inline-block w-6 h-6 mb-1"
          height="2em"
          width="2em"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "New & Popular",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          height="1em"
          width="1em"
          className="inline-block w-6 h-6 mb-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.89">
            <path
              d="M3.12327 4.90853C3.04375 4.362 3.42233 3.85449 3.96886 3.77497L11.8855 2.62307C12.432 2.54355 12.9395 2.92214 13.0191 3.46867L13.2 4.71214H15.2211L14.8542 2.19111C14.6952 1.09805 13.6802 0.340883 12.5871 0.499927L2.69131 1.93979C1.59825 2.09884 0.841079 3.11387 1.00012 4.20693L2.43999 14.1027C2.58495 15.099 3.44103 15.8162 4.41915 15.815V13.8871C4.41915 13.8389 4.41567 13.7908 4.40873 13.7431L3.12327 4.90853Z"
              fill="#ffff"
            />
            <path
              d="M10.7211 15.6159V9.38413C10.7211 9.22233 10.9032 9.12749 11.0357 9.22028L15.487 12.3362C15.6007 12.4158 15.6007 12.5842 15.487 12.6638L11.0357 15.7797C10.9032 15.8725 10.7211 15.7777 10.7211 15.6159Z"
              fill="#ffff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.7211 5.5H7.72105C6.61648 5.5 5.72105 6.39543 5.72105 7.5V17.5C5.72105 18.6046 6.61648 19.5 7.72105 19.5H17.7211C18.8256 19.5 19.7211 18.6046 19.7211 17.5V7.5C19.7211 6.39543 18.8256 5.5 17.7211 5.5ZM16.7211 7.5L8.72105 7.5C8.16877 7.5 7.72105 7.94772 7.72105 8.5V16.5C7.72105 17.0523 8.16877 17.5 8.72105 17.5H16.7211C17.2733 17.5 17.7211 17.0523 17.7211 16.5V8.5C17.7211 7.94771 17.2733 7.5 16.7211 7.5Z"
              fill="#ffff"
            />
            <path
              d="M3.89687 3.28018C3.07707 3.39946 2.5092 4.16073 2.62848 4.98053L3.91394 13.8151C3.91741 13.839 3.91915 13.863 3.91915 13.8871V15.2294C3.41139 15.0494 3.01772 14.6008 2.93478 14.0307L1.49491 4.13493C1.37563 3.31514 1.94351 2.55387 2.7633 2.43458L12.6591 0.994716C13.4789 0.875434 14.2402 1.44331 14.3594 2.26311L14.643 4.21214H13.6325L13.5139 3.39667C13.3946 2.57688 12.6333 2.009 11.8135 2.12828L3.89687 3.28018ZM14.8492 12.5L11.2211 15.0397V9.96033L14.8492 12.5ZM15.2003 12.7458C15.2001 12.7456 15.1999 12.7455 15.1997 12.7454L15.2003 12.7458ZM15.1997 12.2546C15.1999 12.2545 15.2001 12.2544 15.2003 12.2542L15.1997 12.2546ZM7.72105 6H17.7211C18.5495 6 19.2211 6.67157 19.2211 7.5V17.5C19.2211 18.3284 18.5495 19 17.7211 19H7.72105C6.89262 19 6.22105 18.3284 6.22105 17.5V7.5C6.22105 6.67157 6.89262 6 7.72105 6ZM16.7211 7L8.72105 7C7.89262 7 7.22105 7.67157 7.22105 8.5V16.5C7.22105 17.3284 7.89262 18 8.72105 18H16.7211C17.5495 18 18.2211 17.3284 18.2211 16.5V8.5C18.2211 7.67157 17.5495 7 16.7211 7Z"
              stroke="#ffff"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Tv Shows",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          className="inline-block w-6 h-6 mb-1"
          color={"#fff"}
          fill={"none"}
        >
          <path
            d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9 3L12 6L16 2"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Search",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          className="inline-block w-6 h-6 mb-1"
          color={"#fff"}
          fill={"none"}
        >
          <path
            d="M17.5 17.5L22 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "My List",
      icon: (
        <svg
          height="1em"
          width="1em"
          className="inline-block w-6 h-6 mb-1"
          color={"#fff"}
          viewBox="0 0 24 24"
          fill="none"
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
            <g id="Edit / Add_To_Queue">
              {" "}
              <path
                id="Vector"
                d="M3 9V19.4C3 19.9601 3 20.2399 3.10899 20.4538C3.20487 20.642 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.0395 21 4.59846 21H15.0001M14 13V10M14 10V7M14 10H11M14 10H17M7 13.8002V6.2002C7 5.08009 7 4.51962 7.21799 4.0918C7.40973 3.71547 7.71547 3.40973 8.0918 3.21799C8.51962 3 9.08009 3 10.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07969 21.0002 6.19978L21.0002 13.7998C21.0002 14.9199 21.0002 15.48 20.7822 15.9078C20.5905 16.2841 20.2842 16.5905 19.9079 16.7822C19.4805 17 18.9215 17 17.8036 17H10.1969C9.07899 17 8.5192 17 8.0918 16.7822C7.71547 16.5905 7.40973 16.2842 7.21799 15.9079C7 15.4801 7 14.9203 7 13.8002Z"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
  ];
    const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();


  return (
    <div>
      <section
        className={`block text-gray-800 w-full fixed inset-x-0 bottom-0 z-40 h-18 border-t-2 shadow-lg   dark:text-gray-400 border-royal/20 lg:hidden  transition-transform duration-300   bg-[#010101] border-none backdrop-blur-lg ${
          isVisible ? "transform translate-y-0 " : "transform translate-y-full"
        }`}
      >
        <div id="tabs" className="flex justify-between">
          {bottomItem.map((item, idx) => {
            const path = `/app/${item.name.replace(/\s/g, "").toLowerCase()}`;
            return (
              <Link
                className={`justify-center inline-block w-full pt-2 pb-1 text-center focus:text-royal hover:text-royal  text-white  ${
                  pathname === path ? "text-[#3EE783]" : "text-white "
                }`}
                href={path}
                key={idx}
              >
                {item.icon}
                <span className="block text-xs text-white tab">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default BottomNav;
