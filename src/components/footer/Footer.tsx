"use client"
import React from 'react';
import Image from 'next/image';
import Logo from "@/resources/svg/logo.svg";
export  function Footer() {
  return (
    <footer className="footer footer-default">
      <div className="container-fluid px-[6.25em]">
        <div className="footer-top">
          <div className="flex items-center justify-between flex-wrap mt-[1.25rem] lg:mx-[1.25rem] mx-1  w-full">
            <div className="mb-5 lg:mb-0 xl:w-1/4 lg:w-1/2">
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
            <div className="mb-5 lg:mb-0 ">
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
            <div className="mb-5 mb-lg-0 col-xl-2 col-lg-6">
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
            <div className="mb-5 mb-lg-0 col-xl-2 col-lg-6">
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
            <div className="col-xl-3 col-lg-6">
              <h4 className="footer-link-title">Subscribe Newsletter</h4>
              <div className="mailchimp mailchimp-dark">
                <div className="input-group mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control mb-0 text-sm"
                    placeholder="Email*"
                    aria-describedby="button-addon2"
                  />
                  <div className="iq-button">
                    <button
                      type="submit"
                      className="btn btn-sm"
                      id="button-addon2"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex items-center mt-5">
                <span className="text-sm mr-2">Follow Us:</span>
                <ul className="p-0 m-0 list-none flex space-x-2">
                  <li>
                    <a className="relative" href="https://www.facebook.com/">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="relative" href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="relative" href="https://github.com/">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a className="relative" href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-t">
          <div className="flex items-center">
            <div className="col-md-6">
              <ul className="menu list-inline p-0 flex flex-wrap items-center">
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
              <p className="text-sm">
                © <span className="currentYear">2024</span>{" "}
                <span className="text-primary">BILWILLS</span>. All Rights
                Reserved. All videos and shows on this platform are trademarks
                of, and all related images and content are the property of,
                Streamit Inc. Duplication and copy of this is strictly
                prohibited. All rights reserved.
              </p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <h6 className="text-sm pb-1">Download Streamit Apps</h6>
              <div className="flex items-center">
                <a className="app-image" href="/streamit/react/frontend">
                  <img
                    src="https://templates.iqonic.design/streamit/react/frontend/assets/images/footer/google-play.webp"
                    loading="lazy"
                    alt="play-store"
                  />
                </a>
                <br />
                <a className="ml-3 app-image" href="/streamit/react/frontend">
                  <img
                    src="https://templates.iqonic.design/streamit/react/frontend/assets/images/footer/apple.webp"
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
