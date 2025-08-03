import React from "react";
import Image from "next/image";
import Socials from "./Socials";

import { contractAddress } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="text-center font-stopbuck mt-16 pb-5 border-t border-gray-100 pt-8">
        <div className="my-5 mb-10">
          <Socials />
        </div>
        <div>
          <p className="text-md/relaxed text-gray-500">
            Community 2025.
            <br />
          </p>
        </div>
      </div>
      <div className="overflow-hidden relative h-24 sm:h-24 h-[43px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F46a180fbed1545c9ac2a6ec790398a7d"
          className="aspect-[17.24] object-cover object-center w-full mt-5 min-h-[20px] min-w-[20px] overflow-hidden"
          alt=""
        />
      </div>

      <div className="absolute bottom-0 w-full">
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
