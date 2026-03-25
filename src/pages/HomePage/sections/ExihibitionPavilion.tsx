import React from "react";
import { Button } from "../../../components/Button";

import slide1 from "../../../assets/exihibitionImg.png";
import slide2 from "../../../assets/edition-img.png";

import logo1 from "../../../assets/airtel-logo.png";
import logo2 from "../../../assets/zoho-logo.png";
import logo3 from "../../../assets/ntda-logo.png";
import logo4 from "../../../assets/sytemap.png";
import logo5 from "../../../assets/priceepally.png";
import logo6 from "../../../assets/ace.png";
import logo7 from "../../../assets/airtel-logo.png";
import logo8 from "../../../assets/zoho-logo.png";
import logo9 from "../../../assets/ntda-logo.png";
import logo10 from "../../../assets/sytemap.png";
import logo11 from "../../../assets/priceepally.png";
import logo12 from "../../../assets/ace.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExihibitionPavilion: React.FC = () => {

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12
  ];

   const slideData = [
    { id: 1, img: slide1 },
    { id: 2, img: slide2 }, 
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

  const carouselSettings = {
    infinite: true,
    speed: 600,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 }
      }
    ]
  };

  return (
    <section className="bg-[#0A0A0A]" id="exhibit">

      {/* HERO SECTION */}
      <div className="flex  flex-row items-center justify-between gap-10  pr-10 pb-20 lg:py-0 hero-btn editP-section ">

      

        {/* IMAGE */}
        <div className="lg:w-[50%] w-full ">
          {/* <img
            src={exihibitionImg}
            className="w-full h-auto object-cover rounded-lg"
            alt="Exhibition"
          /> */}
          <Slider {...heroSettings}>
                      {slideData.map((slide) => (
                        <div key={slide.id}>
          
                          <img
                            src={slide.img}
                            className="h-[532px] w-full object-cover"
                            alt="About Port Harcourt"
                          />
          
                        </div>
                      ))}
                    </Slider>
        </div>

          {/* TEXT */}
        <div className="lg:w-[45%] editP-content">

          <h3 className="text-white text-2xl md:text-3xl lg:text-[50px] mb-6 leading-tight">
            <span className="text-[#13EC37]">Exhibition</span> Pavilion
          </h3>

          <p className="text-white mb-6 text-sm md:text-base lg:text-[17px] leading-relaxed">
            Showcase your brand at the heart of Africa’s emerging ecosystem.
            Whether you’re a startup launching products, a growth-stage company
            expanding, a corporate innovation unit, or an international firm
            entering new markets, the Pavilion connects you directly with
            founders, investors, and ecosystem partners.
          </p>

          <div className="flex hero-btn gap-4 mt-6">

            <Button
              text="Join As Exhibitor"
              className="bg-[#13EC37] text-[#01240F] text-[16px] hover:bg-[#01240F] hover:text-white w-full sm:w-auto btn-bg"
            />

            <Button
              text="See Exhibition Plans"
              className="border-2 border-[#FDB813] text-[#FDB813] hover:border-none hover:text-[#01240F] text-[16px] w-full sm:w-auto btn-border"
            />

          </div>

        </div>

      </div>


      {/* PAST EXHIBITORS STRIP */}
      <div className="bg-[#13EC37] w-full lg:py-8 py-3">

        <div className="md:flex lg:flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6 md:px-12 lg:px-24">

          {/* TITLE */}
          <h2 className="text-[#074922] font-extrabold text-xl md:text-[22px] text-center md:text-right leading-tight whitespace-nowrap mb-4">
            Past <br className="hidden lg:block" /> Exhibitors
          </h2>


          {/* LOGO SLIDER */}
          <div className="flex-1 w-full min-w-0">
  <Slider {...carouselSettings}>
    {logos.map((logo, index) => (
      // <div key={index} className="px-2">
      //   <div className="flex items-center justify-center h-16 sm:h-10 md:h-24 w-full">
      //     <img
      //       src={logo}
      //       alt={`Partner ${index + 1}`}
      //       className="h-full w-auto object-contain"
      //       loading="lazy"
      //     />
      //   </div>
      // </div>


       <div
            key={index}
            className='h-20  px-3 min-w-[80px] '
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className='h-full w-full object-contain'
            />
          </div>
    ))}
  </Slider>
</div>

        </div>

      </div>

    </section>
  );
};

export default ExihibitionPavilion;