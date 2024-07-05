"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/resources/svg/logo.svg";
export function Footer() {
  return (
    <footer className="footer footer-default">
      <div className="container-fluid lg:px-[3.25em] px-4 lg:pb-0 pb-10">
        <div className="footer-top">
          <div className="flex items-center flex-wrap  justify-between  mt-[1.25rem]  mx-1  w-full">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <div className="footer-logo">
                <div className="logo-default">
                  <a className=" flex-none text-xl " href="#">
                    <Image
                      src={Logo}
                      alt="bilwills"
                      height={200}
                      width={200}
                      className="h-16 lg:w-36 w-32 "
                    />
                  </a>
                </div>
              </div>
              <p className="mb-4 text-sm">
                Email us:{" "}
                <span className="text-white">customer@bilwills.com</span>
              </p>
              <p className="text-uppercase tracking-widest text-sm mb-1">
                customer services
              </p>
              <p className="mb-0 contact text-white">+ (480) 555-0103</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <h4 className="footer-link-title">Quick Links</h4>
              <ul className="list-none footer-menu">
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    About Us
                  </a>
                </li>
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    Blog
                  </a>
                </li>
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    Price Plan
                  </a>
                </li>
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <h4 className="footer-link-title">Movies to watch</h4>
              <ul className="list-none footer-menu">
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    Top Trending
                  </a>
                </li>
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    Recommended
                  </a>
                </li>
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    Popular
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <h4 className="footer-link-title">About company</h4>
              <ul className="list-none footer-menu">
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    Contact Us
                  </a>
                </li>
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-3 flex items-center gap-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={"#3EE783"}
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
                  <a className="" href="/streamit/react/frontend/about-us">
                    Terms Of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-t">
          <div className="flex items-center flex-wrap  justify-between  ">
            <div className="  lg:w-[50%] w-full ">
              <ul className="menu list-inline p-0 flex flex-wrap items-center gap-2">
                <li className="menu-item">
                  <a href="/streamit/react/frontend/terms-of-use">
                    {" "}
                    Terms Of Use
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/streamit/react/frontend/privacyPolicy">
                    {" "}
                    Privacy-Policy
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/streamit/react/frontend/faq"> FAQ</a>
                </li>
                <li className="menu-item">
                  <a href="/streamit/react/frontend/playlist"> Watch List</a>
                </li>
              </ul>
              <p className="text-sm mb-2">
                © <span className="currentYear">2024</span>{" "}
                <span className="text-primary text-[#3EE783]">BILWILLS</span>.
                All Rights Reserved. All videos and shows on this platform are
                trademarks of, and all related images and content are the
                property of, Streamit Inc. Duplication and copy of this is
                strictly prohibited. All rights reserved.
              </p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <h6 className="text-sm pb-2">Download Bilwills Apps</h6>
              <div className="flex items-center">
                <a className="app-image" href="/streamit/react/frontend">
                  <img
                    src="https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/footer/google-play.webp"
                    loading="lazy"
                    alt="play-store"
                  />
                </a>
                <br />
                <a className="ml-3 app-image" href="/streamit/react/frontend">
                  <img
                    src="https://templates.iqonic.design/streamit-dist/frontend/react/assets/images/footer/apple.webp"
                    loading="lazy"
                    alt="app-store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
