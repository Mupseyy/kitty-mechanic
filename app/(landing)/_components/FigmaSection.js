"use client";

import React from "react";

const FigmaSection = () => {
  return (
    <div className="pointer-events-auto text-gray-200 bg-gray-900 font-sans">
      {/* Empty header space */}
      <header className="font-normal left-1/2 max-w-6xl fixed top-5 w-full z-50 transform -translate-x-1/2 pointer-events-auto px-4" />

      {/* Main Container */}
      <div className="bg-gray-900 text-gray-200 font-normal pointer-events-auto">
        <header className="font-normal left-1/2 max-w-6xl fixed top-5 w-full z-50 transform -translate-x-1/2 pointer-events-auto px-4" />

        {/* Red Section */}
        <section className="flex flex-col bg-red-600 font-normal min-h-[800px] overflow-hidden relative w-full pointer-events-auto">
          {/* Background Rays Pattern */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full max-w-[2400px] max-h-[2400px]">
              <svg
                viewBox="0 0 2400 1982"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full object-cover"
                preserveAspectRatio="xMidYMid slice"
              >
                <g clipPath="url(#clip0_61_263)">
                  <path
                    d="M2399.43 1059.61L1200.27 837.701L1199.92 837.763L1199.91 837.8L1199.98 838.298L1848.45 2036.74H1367.45L1199.98 838.298L1199.87 838.092L1020.39 2036.74H554.575L1199.71 837.8L0 1048.82V615.596L1199.6 837.577L550.977 -361.144H1032.38L1199.88 837.508L1199.99 837.284L1379.44 -361.144H1844.85L1199.99 837.284L1199.94 837.645L1200.27 837.701L2399.43 626.786V1059.61Z"
                    fill="url(#paint0_radial_61_263)"
                  />
                  <path
                    d="M0 -361.914L1199.33 837.8L1199.71 837.626L2398.66 -361.514V275.428L1199.71 837.626L1199.47 837.862L2398.66 1400.57V2037.51L1199.43 837.9L0 2037.51V1400.17L1199.33 837.8L0 275.029V-361.914Z"
                    fill="url(#paint1_radial_61_263)"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_61_263"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1199.71 837.8) rotate(90) scale(1198.94 1199.71)"
                  >
                    <stop offset="0.534941" stopColor="#E02528" />
                    <stop offset="0.689941" stopColor="#FD272B" />
                    <stop offset="1" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_61_263"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1199.33 837.8) rotate(90) scale(1199.71 1199.33)"
                  >
                    <stop offset="0.534941" stopColor="#C12A2C" />
                    <stop offset="0.689941" stopColor="#FD272B" />
                    <stop offset="1" stopOpacity="0" />
                  </radialGradient>
                  <clipPath id="clip0_61_263">
                    <rect
                      width="2400"
                      height="1981.04"
                      fill="white"
                      transform="translate(0 0.479416)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Navigation Header */}
          <div className="font-normal relative z-20 pointer-events-auto">
            <div className="font-normal max-w-6xl w-full pointer-events-auto mx-auto pl-6 sm:pr-[163px] pr-[44px] pt-[49px] pb-6">
              <div className="flex flex-col lg:flex-row items-center font-normal justify-between pointer-events-auto">
                <div className="flex items-center font-normal gap-3 sm:gap-4 pointer-events-auto">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8dc1293a36ff825d9439d5380f5d3d7d44c17d0e?width=150"
                    alt="Kitty Logo"
                    className="block rounded-full font-normal h-[60px] sm:h-[75px] object-cover w-[60px] sm:w-[75px] pointer-events-auto"
                  />
                  <h1
                    className="text-white font-luckiest-guy text-[35px] sm:text-[45px] font-normal leading-[35px] sm:leading-[40px]"
                    style={{
                      color: "#ffffff",
                      textShadow:
                        "4px 4px 0 #000, 6px 6px 0 #000, 0 4px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 2px 2px 0 #000",
                    }}
                  >
                    KITTY
                  </h1>
                </div>

                {/* Navigation Menu - Hidden on mobile */}
                <div className="hidden lg:flex items-center bg-[#DDD6CC] font-normal justify-center pointer-events-auto overflow-hidden ml-[95px] mr-[-2px] px-[18px] py-3 rounded-[40px]">
                  <a
                    href="#about"
                    className="text-black transition-colors font-luckiest-guy text-[16px] sm:text-[20px] lg:text-[22px] font-normal leading-[20px] sm:leading-[28px] px-2 sm:px-4 lg:px-6 py-2 sm:py-3"
                  >
                    ABOUT
                  </a>
                  <a
                    href="#contract"
                    className="text-black transition-colors font-luckiest-guy text-[16px] sm:text-[20px] lg:text-[22px] font-normal leading-[20px] sm:leading-[28px] px-2 sm:px-4 lg:px-6 py-2 sm:py-3"
                  >
                    CONTRACT
                  </a>
                  <a
                    href="#tokenomics"
                    className="text-black transition-colors font-luckiest-guy text-[16px] sm:text-[20px] lg:text-[22px] font-normal leading-[20px] sm:leading-[28px] px-2 sm:px-4 lg:px-6 py-2 sm:py-3"
                  >
                    TOKENOMICS
                  </a>
                  <a
                    href="#buy"
                    className="text-black transition-colors font-luckiest-guy text-[16px] sm:text-[20px] lg:text-[22px] font-normal leading-[20px] sm:leading-[28px] px-2 sm:px-4 lg:px-6 py-2 sm:py-3"
                  >
                    HOW TO BUY
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex items-center flex-grow font-normal justify-center relative z-10 pointer-events-auto px-4 sm:px-6 sm:pb-0 pb-[100px] sm:mb-0 mb-[45px]">
            <div className="font-normal sm:max-w-4xl max-w-[856px] w-full pointer-events-auto flex flex-col mx-auto">
              {/* Central Image */}
              <div className="flex justify-center mb-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets%2F6e8fa0e4f9974b6bbde244f74d2d30d6%2Fb42765756e794bc4aebd8c8515a3dad4"
                  className="aspect-square object-cover object-center w-full min-h-[200px] sm:min-h-[280px] min-w-5 overflow-hidden max-w-[200px] sm:max-w-[280px]"
                  alt="Kitty Character"
                />
              </div>

              {/* Social Media Icons - Mobile Responsive Layout */}
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex justify-center gap-4 sm:gap-6">
                  {/* X/Twitter */}
                  <a
                    href="https://x.com/kittymechanic_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-black rounded justify-center w-10 h-10 sm:w-12 sm:h-12 transform rotate-[5deg] transition-transform duration-200 hover:rotate-0 hover:scale-110"
                  >
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/fca1ff3bff81e76122bc0ca0fe98d9355ccb6f45?width=88"
                      alt="X (Twitter)"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/kittymechanicc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-black rounded justify-center w-10 h-10 sm:w-12 sm:h-12 transform rotate-[-5deg] transition-transform duration-200 hover:rotate-0 hover:scale-110"
                  >
                    <svg
                      width="20"
                      height="20"
                      className="sm:w-6 sm:h-6"
                      viewBox="0 0 26 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_61_313)">
                        <path
                          d="M9.01325 13.1624C9.20189 10.9617 11.1392 9.33002 13.3395 9.51862C15.5403 9.70683 17.1723 11.6434 16.9841 13.8446C16.7958 16.0457 14.8585 17.6771 12.6574 17.4888C10.4571 17.3005 8.82496 15.3636 9.01325 13.1624ZM6.85979 12.9783C6.56977 16.3692 9.08332 19.3523 12.4733 19.6423C15.8637 19.9323 18.8483 17.4196 19.1384 14.0287C19.4283 10.6391 16.9145 7.65434 13.5237 7.36432C10.1336 7.07436 7.14975 9.58827 6.85979 12.9783ZM18.4918 7.5453C18.4241 8.33708 19.0117 9.03445 19.8036 9.10218C20.5957 9.16993 21.2931 8.58263 21.3612 7.79088C21.4289 6.99905 20.8413 6.30131 20.0491 6.23355C19.2569 6.16579 18.5596 6.75343 18.4918 7.5453ZM7.33532 22.8217C6.17431 22.669 5.55837 22.42 5.1508 22.2208C4.61118 21.9558 4.23529 21.6618 3.85224 21.2087C3.47012 20.7542 3.24498 20.334 3.07567 19.7575C2.94876 19.3214 2.80691 18.6721 2.85424 17.5018C2.90521 16.2367 2.92474 15.8575 3.19821 12.665C3.47119 9.47329 3.51589 9.09629 3.68124 7.83997C3.83305 6.67963 4.08336 6.06301 4.28212 5.65578C4.54717 5.1154 4.84034 4.7402 5.29418 4.35722C5.74877 3.97435 6.16883 3.74995 6.74565 3.58067C7.18149 3.45294 7.83069 3.31263 9.00062 3.35918C10.2665 3.40984 10.6453 3.43009 13.837 3.70306C17.0294 3.97615 17.4064 4.02043 18.6628 4.1862C19.8229 4.3388 20.4397 4.58714 20.8465 4.78705C21.3865 5.05205 21.7625 5.3445 22.145 5.7991C22.5275 6.2537 22.7527 6.67303 22.9219 7.25102C23.0497 7.68569 23.19 8.33569 23.1431 9.50516C23.0928 10.7712 23.0733 11.1504 22.7999 14.3421C22.5268 17.5346 22.4821 17.9116 22.3165 19.1671C22.1638 20.3281 21.9151 20.9445 21.7155 21.3525C21.4506 21.8917 21.1574 22.2676 20.7031 22.6506C20.249 23.032 19.8288 23.2579 19.2516 23.4271C18.8166 23.5545 18.1666 23.6952 16.9975 23.6487C15.7316 23.5976 15.3527 23.5781 12.1599 23.3047C8.96822 23.0317 8.59168 22.9866 7.33532 22.8217ZM9.08655 1.19905C7.80933 1.14778 6.92276 1.27551 6.13755 1.50655C5.32489 1.74417 4.62279 2.09649 3.9019 2.70394C3.18014 3.31169 2.71428 3.94338 2.34141 4.70343C1.98049 5.43879 1.70497 6.2905 1.53744 7.55835C1.37012 8.82857 1.32175 9.23414 1.04396 12.4808C0.766199 15.7272 0.744839 16.1359 0.694053 17.4166C0.643601 18.6936 0.770615 19.5797 1.00162 20.3653C1.23962 21.178 1.59155 21.8797 2.19934 22.601C2.80675 23.3224 3.4389 23.7879 4.19928 24.1612C4.93388 24.5217 5.78585 24.798 7.05336 24.9651C8.3235 25.1328 8.72947 25.1808 11.9754 25.4585C15.2228 25.7364 15.6312 25.7577 16.9115 25.8088C18.1888 25.8593 19.0746 25.7315 19.8605 25.5013C20.6733 25.2625 21.3752 24.9114 22.0963 24.3036C22.8172 23.6961 23.283 23.064 23.6559 22.3036C24.0168 21.569 24.2931 20.717 24.4597 19.4502C24.6272 18.1793 24.676 17.7729 24.9537 14.5266C25.2315 11.2799 25.2524 10.8719 25.3035 9.59193C25.3545 8.31392 25.2267 7.42805 24.9961 6.64212C24.7577 5.8294 24.4062 5.12812 23.7988 4.40644C23.1913 3.6855 22.5593 3.21881 21.7988 2.84671C21.0639 2.48573 20.2123 2.20908 18.9447 2.04276C17.6746 1.8747 17.2686 1.82666 14.0215 1.54884C10.7752 1.27109 10.367 1.24939 9.08655 1.19905Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@kittymechanic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-black rounded justify-center w-10 h-10 sm:w-12 sm:h-12 transform rotate-[-5deg] transition-transform duration-200 hover:rotate-0 hover:scale-110"
                  >
                    <svg
                      width="20"
                      height="20"
                      className="sm:w-6 sm:h-6"
                      viewBox="0 0 30 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_61_317)">
                        <path
                          d="M22.2972 6.85989C22.1259 6.78952 21.9582 6.71062 21.7948 6.62348C21.3192 6.36559 20.8763 6.05143 20.4758 5.68777C19.4685 4.7202 19.0335 3.68727 18.8424 2.95414L18.8475 2.95369C18.6882 2.34522 18.6968 1.94177 18.7033 1.94119L14.5329 2.30606L15.9438 18.4325C15.9627 18.649 15.9814 18.863 15.9908 19.0753C15.9931 19.1016 15.9927 19.1261 15.9937 19.1545C15.9947 19.1662 15.9958 19.1783 15.9943 19.1907C15.9945 19.1937 15.9948 19.1967 15.9951 19.1998C16.0017 19.7822 15.8652 20.3574 15.5974 20.8747C15.3296 21.392 14.9387 21.8355 14.4593 22.1663C13.9596 22.5115 13.3786 22.7204 12.7735 22.7726C10.8305 22.9426 9.11704 21.496 8.94585 19.5392C8.77465 17.5825 10.2108 15.8603 12.1539 15.6903C12.5217 15.6577 12.8923 15.6836 13.252 15.767L12.8856 11.5202C11.8119 11.476 10.7407 11.6547 9.73962 12.0451C8.73849 12.4356 7.82916 13.0293 7.06896 13.7888C6.40478 14.4762 5.86566 15.2743 5.47587 16.1471C5.32638 16.466 4.76886 17.7438 4.86161 19.7304C4.90932 20.8583 5.34858 21.9928 5.55154 22.4599L5.55243 22.47C5.67839 22.7444 6.15503 23.6769 6.86525 24.4359C7.43765 25.0446 8.0966 25.5656 8.82086 25.9822L8.81997 25.9721L8.83098 25.9813C10.97 27.1766 13.2006 26.8907 13.2006 26.8907C13.5867 26.8411 14.8862 26.7433 16.2992 25.9157C17.8665 24.9981 18.6963 23.7628 18.6963 23.7628C19.2307 23.0213 19.6348 22.1942 19.8913 21.3169C20.1819 20.2919 20.2038 19.091 20.1622 18.6155L19.4137 10.0601C19.4669 10.086 20.1797 10.4727 20.1797 10.4727C20.1797 10.4727 21.2049 11.01 22.755 11.2827C23.8669 11.476 25.3362 11.4086 25.3362 11.4086L24.974 7.2685C24.4659 7.36902 23.4101 7.29827 22.2972 6.85989Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </a>
                </div>

                {/* Buy Now Button */}
                <button
                  className="bg-red-600 border-black border-4 shadow-[4px_4px_0_0_#000] text-white tracking-[1.5px] transition-transform duration-200 transform rotate-[-4deg] hover:rotate-0 hover:translate-y-[-2px] pointer-events-auto px-6 sm:px-8 py-4 sm:py-5 font-luckiest-guy text-[24px] sm:text-[30px] leading-6 sm:leading-8"
                  style={{
                    fontFamily:
                      "Luckiest Guy, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FigmaSection;
