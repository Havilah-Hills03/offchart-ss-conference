import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface FaqCardProps {
  faq_headText: string;
  faq_content_text: string;
  // open_icon_faq: string;
  // close_icon_faq: string;
}

export const Faq_card: React.FC<FaqCardProps> = ({
  faq_headText,
  faq_content_text,
  // open_icon_faq,
  // close_icon_faq
}) => {
  const [open_faq, setOpenFaq] = useState(false);

  const toggleFaq = () => setOpenFaq(!open_faq);

  return (
    <div
      className={`faq_section_card rounded-[15px] py-3 px-2 transition-all duration-300 overflow-hidden 
      ${open_faq ? "bg-[#88CA4E] text-[#294d58]" : "bg-[#88CA4ECC] text-[#294D58]"}
      `}
    >
      {/* Header */}
      <div
        className="flex justify-between items-start lg:px-6 px-2 lg:py-2 py-1 cursor-pointer select-none"
        onClick={toggleFaq}
        role="button"
        aria-expanded={open_faq}
      >
        <h4
          className={`lg:text-[18px] text-[14px] transition-colors duration-300 
          ${open_faq ? "text-[#294D58] font-semibold" : "text-[#294D58] font-medium"}`}
        >
          {faq_headText}
        </h4>

        {/* <img
          src={open_faq ? open_icon_faq : close_icon_faq}
          alt="toggle"
          className={`transition-transform duration-300 w-6 h-6 ${
            open_faq ? "rotate-180" : ""
          }`}
        /> */}
        <button className="cursor-pointer">{open_faq ? <FaArrowUp /> :  <FaArrowDown />}</button>
      </div>

      {/* Content */}
      <div
        className={`faq_content px-6 transition-all duration-500 ease-in-out 
        ${open_faq ? "max-h-[500px] py-4 opacity-100" : "max-h-0 opacity-0"} 
        overflow-hidden`}
      >
        <p className="text-[16px] leading-relaxed">{faq_content_text}</p>
      </div>
    </div>
  );
};
