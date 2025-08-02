"use client";

import React, { useState, useRef } from "react";
import { contractAddress } from "../../../constants";

const ContractSection = () => {
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  const handleCopy = async () => {
    // Always show feedback first
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    try {
      const textToCopy = contractAddress || "SOON";

      // Try multiple methods to ensure it works
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback method
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.width = "2em";
        textArea.style.height = "2em";
        textArea.style.padding = "0";
        textArea.style.border = "none";
        textArea.style.outline = "none";
        textArea.style.boxShadow = "none";
        textArea.style.background = "transparent";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand('copy');
        } catch (err) {
          console.log('Copy fallback executed');
        }

        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.log('Copy executed with potential limitations');
    }
  };

  return (
    <section
      id="contract"
      className="flex w-full justify-center items-center sm:pr-32 pr-[127px]"
      style={{
        backgroundColor: "rgba(228, 224, 225, 1)",
        padding: "84px 128px 108px",
      }}
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        {/* CONTRACT Heading */}
        <div className="flex flex-col items-center">
          <div
            className="my-16 text-center text-6xl font-luckiest-guy sm:text-6xl text-[50px]"
            style={{
              color: "rgba(196, 43, 16, 1)",
              textShadow:
                "4px 4px 0 #000, 6px 6px 0 #000, 0 4px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 2px 2px 0 #000",
            }}
          >
            CONTRACT
          </div>
        </div>

        {/* Contract Address Container */}
        <div className="w-full max-w-2xl">
          <div className="relative flex justify-center items-center">
            <div
              className="flex w-full max-w-xl h-16 px-4 py-2 justify-center items-center rounded-full border-4 border-black bg-white bg-opacity-90 shadow-[6px_6px_0_0_#000] backdrop-blur-sm cursor-pointer hover:bg-opacity-100 hover:shadow-[8px_8px_0_0_#000] hover:scale-105 transition-all duration-200 active:scale-95 sm:w-full w-[200%]"
              onClick={handleCopy}
              title="Click to copy contract address"
            >
              <div className="flex w-full justify-center items-center">
                <span
                  ref={textRef}
                  className="text-gray-800 font-inter text-sm md:text-base font-normal leading-6 text-center truncate px-4"
                >
                  {copied ? (
                    <p className="text-green-600 font-semibold">Text Copied!</p>
                  ) : (
                    <p>
                      <span className="sm:text-[inherit] text-[18px]">CA</span><span style={{ fontSize: "18px" }}>: SOON</span>
                    </p>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractSection;
