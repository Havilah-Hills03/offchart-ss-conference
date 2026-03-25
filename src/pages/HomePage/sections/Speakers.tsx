import React from "react";
import speaker1 from "../../../assets/Dr-Bosun-tijani.png";
import speaker2 from "../../../assets/Kashifu-Inuwa-Abdullahi.png";
import speaker3 from "../../../assets/Funke-opeke.png";
import speaker4 from "../../../assets/Kuppulakshmi.png";
import speaker5 from "../../../assets/Yen-choi.png";
import speaker6 from "../../../assets/Chris-Burry.png";
import speaker7 from "../../../assets/Douglas-Kendyson.png";
import speaker8 from "../../../assets/Jason-Njoku.png";
import speaker9 from "../../../assets/Steve-Adelman.png";
import speaker10 from "../../../assets/Paul-Onwuanibe.png";
import speaker11 from "../../../assets/Iyinoluwa-Aboyeji.png";
import speaker12 from "../../../assets/Enunwa-Ebele.png";

const Speakers: React.FC = () => {
  const whyData = [
    {
      id: 1,
      speaker: "Dr. Bosun Tijanir",
      title: "Federal Minister Of Communication",
      brand: " and Digital Economy of Nigeria",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #FFFFFFCC",
      shadowBg: "#FDB813",
      img: speaker1,
    },
    {
      id: 2,
      speaker: "Kashifu Inuwa Abdullahi",
      title: "Director General and CEO",
      brand:"NITDA",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #FDB813CC",
      shadowBg: "#FDB813",
      img: speaker2,
    },
    {
      id: 3,
      speaker: "Funke Opeke",
      title: "Founder and CEO",
      brand: "MainOne",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#FDB813",
      img: speaker3,
    },
    {
      id: 4,
      speaker: "Kuppulakshmi",
      title: "Global Head",
      brand: " Zoho for Startups",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#FDB813",
      img: speaker4,
    },
    {
      id: 5,
      speaker: "Yen Choi",
      title: "Group Executive Officer",
      brand: " Netcom Africa",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #FFFFFFCC",
      shadowBg: "#FDB813",
      img: speaker5,
    },
    {
      id: 6,
      speaker: "Chris Burry",
      title: "Co-CEO",
      brand: "US Market Access Center " ,
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #FDB813CC",
      shadowBg: "#FDB813",
      img: speaker6,
    },
    {
      id: 7,
      speaker: "Douglas Kendyson",
      title: "Founder & CEo",
      brand: "Selar",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #FDB813CC",
      shadowBg: "#FDB813",
      img: speaker7,
    },
    {
      id: 8,
      speaker: "Jason Njoku",
      title: "Co- Founder & CEO",
      brand: "iROKOtv",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#FDB813",
      img: speaker8,
    },
    {
      id: 9,
      speaker: "Steve Adelman",
      title: "Founder & Managing Director",
      brand: "Nexus Partners",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#FDB813",
      img: speaker9,
    },
    {
      id: 10,
      speaker: "Paul Onwuanibe",
      title: "MD & CEO",
      brand: " Landmark Africa Group",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#FDB813",
      img: speaker10,
    },
    {
      id: 11,
      speaker: "Iyinoluwa Aboyeji",
      title: "CEO and General Partner",
      brand: "Fund for Africa’s Future",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#FDB813",
      img: speaker11,
    },
    {
      id: 12,
      speaker: "Enunwa Ebele",
      title: "Founder & CEO",
      brand: "Sundry Markets",
      class: "bg-[#13EC37]  text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#FDB813",
      img: speaker12,
    },
  ];

  return (
    <section
      className="bg-[#0A0A0A] py-20 relative overflow-hidden px-10"
      id="speakers"
    >
      <div className="tex-center">
        <h2 className="text-[#D9D9D9] lg:text-[50px] md:text-3xl text-2xl text-center">
          <span className="text-[#13EC37]">OffChart NXT</span>
          <span> Speakers</span>
        </h2>
        <p className="text-[#D9D9D9] text-center  my-6 pb-10">
          OffChart NXT retains and elevates the multi-track architecture refined
          over previous editions:
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-10 pb-20 ">
        {whyData.map((item) => (
          <div key={item.id} className="relative w-full">
            {/* Shadow Layer */}
            <div
              className="rounded-2xl absolute inset-0 -translate-x-2"
              style={{
                background: item.shadowBg,
                boxShadow: item.shadow,
              }}
            />

            {/* Card */}
            <div
              className={`relative rounded-2xl overflow-hidden bg-[#13EC37] group  ${item.class} min-h-[270px] flex flex-col justify-center`}
            >
              <img src={item.img} className="w-full h-[270px]  object-cover" />

              <div className="absolute inset-0 bg-[#FDB813] opacity-0 group-hover:opacity-90 transition duration-300">

              {/* Text */}
              <div className="absolute bottom-4 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h5 className="font-bold text-[#0F0F0F] text-[16px] mb-1">
                  {item.speaker}
                </h5>
                <p className="text-[14px] text-[#0F0F0F] leading-4.5">
                    <span>{item.title}</span>
                    <br />
                    <span>{item.brand}</span>
                </p>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
