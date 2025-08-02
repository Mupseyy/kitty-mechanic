"use client";

import React, { useState, useRef } from "react";
import { contractAddress } from "../../../constants";

const ContractSection = () => {
  const [copied, setCopied] = useState(false);
  const textRef = useRef(null);

  const handleCopy = async () => {
    const textToCopy = contractAddress || "SOON";

    try {
      // Method 1: Modern clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }
    } catch (err) {
      // If modern API fails, try fallback
    }

    try {
      // Method 2: Aggressive fallback for restricted environments
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;

      // Make it visible but off-screen
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      textArea.style.opacity = "0";
      textArea.setAttribute("readonly", "");
      textArea.tabIndex = -1;

      document.body.appendChild(textArea);

      // For iOS
      const range = document.createRange();
      range.selectNodeContents(textArea);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);

      // Try to copy
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Last resort: Show modal with text to copy manually
        showManualCopyModal(textToCopy);
      }
    } catch (err) {
      // Last resort: Show modal with text to copy manually
      showManualCopyModal(textToCopy);
    }
  };

  const showManualCopyModal = (text) => {
    alert(`Copy this contract address: ${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
