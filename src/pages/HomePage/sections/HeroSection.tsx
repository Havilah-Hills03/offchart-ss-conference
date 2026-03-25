import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "../../../components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CountdownItem {
  id: number;
  number: number;
  text: string;
}

const HeroSection: React.FC = () => {
  const countDowndata: CountdownItem[] = [
    { id: 1, number: 5000, text: "Participants" },
    { id: 2, number: 100, text: "Speakers" },
    { id: 3, number: 60, text: "Sessions" },
    { id: 4, number: 8, text: "Tracks" },
  ];

  const carouselSettings = {
    infinite: true,
    speed: 600,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  // State for animated numbers
  const [numbers, setNumbers] = useState<number[]>(
    countDowndata.map(() => 0)
  );

  useEffect(() => {
    const intervals: number[] = []; // Use number[] for browser timers

    countDowndata.forEach((item, index) => {
      const step = Math.ceil(item.number / 100); // controls animation speed
      intervals[index] = window.setInterval(() => {
        setNumbers((prev) => {
          const newNumbers = [...prev];
          if (newNumbers[index] < item.number) {
            newNumbers[index] = Math.min(newNumbers[index] + step, item.number);
          }
          return newNumbers;
        });
      }, 20); // update every 20ms
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, [countDowndata]);

  return (
    <section className="relative hero xxl:h-screen flex flex-col  bg-[#074922CC]  text-center pt-0 lg:pt-8">
      
      {/* HERO CONTENT */}
      <div className="flex flex-col justify-center pb-2 flex-grow max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10 content">
        <h6 className="text-[#13EC37] lg:text-[26px] md:text-[20px] text-[16px] font-bold pb-0 mb-0">
          The Global Convergence for Emerging Ecosystems
        </h6>

        <h1 className="font-black text-[36px] md:text-[60px] lg:text-[72px] text-[#DBD8D8] leading-tight my-3">
          Growth doesn’t follow maps-
          <br />
          It goes <span className="text-[#13EC37]">OffChart.</span>
        </h1>

        {/* DATE + LOCATION */}
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-6 justify-center items-center">
          <h5 className="text-[#D9D9D9] lg:text-[26px] md:text-[22px] text-[18px] font-medium">
            October 22–23, 2026
          </h5>
          <FaLocationDot className="text-[#13EC37] text-2xl" />
          <h5 className="text-[#D9D9D9] lg:text-[26px] md:text-[22px] text-[18px] font-medium">
            Port Harcourt, Nigeria
          </h5>
        </div>

        {/* BUTTONS */}
        <div className="flex hero-btn  flex-row xl:flex-row lg:gap-6 gap-3 mb-2 justify-center items-center mt-6">
         <a href="#ticket">
           <Button
            text="Attend Now"
            className="bg-[#13EC37] text-[#01240F] lg:text-[22px] md:text-[18px] text-[14px] w-full lg:w-auto btn-bg"
          />
         </a>
          <Button
            text="Partner with us"
            className="border-2 border-[#FDB813] text-[#FDB813] hover:border-none hover:text-[#01240F] lg:text-[22px] md:text-[18px] text-[14px] w-full lg:w-auto"
          />
        </div>
      </div>

      {/* DESKTOP COUNTDOWN */}
      <div className="hidden lg:grid grid-cols-4 bg-[#13EC37] py-10 px-6 lg:px-20 xl:px-40 w-full">
        {countDowndata.map((item, index) => (
          <div key={item.id} className="text-center">
            <h2 className="text-[#01240F] text-3xl lg:text-[48px] font-black">
              {numbers[index]}+
            </h2>
            <h5 className="text-[#01240F] text-[16px] lg:text-xl font-semibold">
              {item.text}
            </h5>
          </div>
        ))}
      </div>

      {/* MOBILE SLIDER */}
      <div className="bg-[#13EC37] py-4 w-full lg:hidden">
        <Slider {...carouselSettings}>
          {countDowndata.map((item, index) => (
            <div key={item.id} className="text-center">
              <h2 className="text-[#01240F] text-2xl font-black">
                {numbers[index]}+
              </h2>
              <h5 className="text-[#01240F] text-[14px] font-semibold">
                {item.text}
              </h5>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;