"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/resources/svg/logo.svg";
export function Navbar() {
  
    const [isSticky, setIsSticky] = React.useState(false);

    React.useEffect(() => {
      function handleScroll() {
        const scroll = window.scrollY;
        setIsSticky(scroll >= 100);
      }

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 py-2   ${
        isSticky
          ? "shadow-custom animate-sticky backdrop-blur-lg bg-black/25 py-1"
          : ""
      }`}
    >
      <nav
        className="max-w-[85rem] w-full mx-auto lg:px-0 px-4 flex items-center justify-between "
        aria-label="Global"
      >
        <a className=" flex-none text-xl " href="#">
          <Image
            src={Logo}
            alt="bilwills"
            height={200}
            width={200}
            className="h-16 lg:w-36 w-32 "
          />
      
        </a>
        <div
          id="navbar-alignment"
          className="  overflow-hidden transition-all duration-300 hidden lg:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <a
              className="font-medium text-[#3EE783]"
              href="#"
              aria-current="page"
            >
              Home
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="#"
            >
              Tv Shows
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="#"
            >
              Movie
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="#"
            >
              New & Popular
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="#"
            >
              My List
            </a>

            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500"
              href="#"
            >
              Series
            </a>
          </div>
        </div>

        <div className=" flex items-center gap-x-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 ">
              <div className="relative border-2 border-white rounded-md pr-5 pl-1 lg:block hidden">
                <input
                  type="search"
                  name=""
                  placeholder="search"
                  id=""
                  className="w-36 h-6 focus:border-transparent focus:outline-none  text-white placeholder:pl-1 px-1"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  width={18}
                  height={18}
                  color={"#ffff"}
                  stroke="currentColor"
                  className="absolute right-0 top-1 mr-1 bottom-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  className="cursor-pointer"
                  color={"#ffff"}
                  fill={"none"}
                >
                  <path
                    d="M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <img
              className="inline-block size-8 rounded"
              src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
              alt="Image Description"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar