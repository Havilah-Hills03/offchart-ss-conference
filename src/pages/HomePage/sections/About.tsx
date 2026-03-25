import React from "react";
// import { Button } from "../../../components/Button";
import slide1 from "../../../assets/about.png";
import slide2 from "../../../assets/about-slide2.png"
import slide3 from "../../../assets/about.jpeg"
import slide4 from "../../../assets/about2.png"
import slide5 from "../../../assets/about-slide4.png"
import Slider from "react-slick";

export interface HeroSliderProps {
  Infinite?: boolean;
  Speed?: number;
  Fade?: boolean;
  Autoplay?: boolean;
  Arrows?: boolean;
  AutoplaySpeed?: number;
  Dots?: boolean;
}

const About: React.FC<HeroSliderProps> = () => {

  const slideData = [
    { id: 1, img: slide1 },
    { id: 2, img: slide2 },
     { id: 3, img: slide3 },
       { id: 4, img: slide4 },
       {id:5, img: slide5}
  ];

  const heroSettings = {
    infinite: true,
    speed: 400,
    fade: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    dots: false,
  };

  return (
    <section className="bg-[#0A0A0A] lg:pb-0 lg:mb-0  lg:px-0 pb-20 lg:py-0 overflow-hidden">

      <div className="flex  flex-row items-center  justify-start gap-12 hero-btn">

        {/* LEFT SIDE — SLIDER */}
        <div className="lg:w-[47%] w-full">

          <Slider {...heroSettings}>
            {slideData.map((slide) => (
              <div key={slide.id}>

                <img
                  src={slide.img}
                  className="h-[540px] w-full object-cover"
                  alt="About Port Harcourt"
                />

              </div>
            ))}
          </Slider>

        </div>

        {/* RIGHT SIDE — TEXT */}
        <div className="lg:w-[40%] w-full flex flex-col justify-center px-3 editP-content">

          <h3 className="text-white lg:text-[50px] md:text-3xl text-2xl mb-6 leading-tight">
            About <span className="text-[#13EC37]">Port Harcourt</span>
          </h3>

          <h6 className="text-white mb-6 font-light text-[20px] leading-relaxed">
            Port Harcourt is a vibrant industrial and commercial hub at the
            heart of Nigeria’s energy and technology sectors. Known for its
            dynamic business ecosystem and growing innovation scene, it offers
            a strategic gateway for startups, investors, and global enterprises
            looking to engage Africa’s emerging markets.
          </h6>

          <h5 className="font-semibold text-[20px] text-white mb-6">
            Growth doesn’t follow maps - it goes OffChart
          </h5>

          <div className="flex flex-wrap gap-2">

            <button className="bg-[#13EC37] px-[35px] py-4 rounded-[20px] font-bold text-[15px] text-[#01240F] hover:bg-[#01240F] hover:text-white lg:w-auto w-full btn-bg">
              Attend OffChart NXT
            </button>

            <button className="border-2 border-[#FDB813] w-full lg:w-auto px-[38px] py-4 rounded-[20px] font-bold text-[15px] text-[#FDB813] hover:bg-[#13EC37] hover:border-none hover:text-[#01240F] btn-border">
              Join the Community
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;