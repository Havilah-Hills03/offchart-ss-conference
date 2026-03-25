import React from "react";
import offChartPattern from "../../../assets/offchart-pattern.png";

const WhyOffchart: React.FC = () => {
  const whyData = [
    {
      id: 1,
      title: "Access the Frontier",
      desc: "Discover Africa’s most under-leveraged growth corridors and connect with the founders, policymakers, and capital providers driving tomorrow’s opportunities.",
      class: "bg-[#011409] text-white",
      shadow: "0px 0px 2px 0px #FFFFFFCC",
      shadowBg: "white",
    },
    {
      id: 2,
      title: "Curated Investor & Partner Networks",
      desc: "Meet global and regional VCs, DFIs, corporates, and foundations actively seeking investment and collaboration opportunities in emerging markets.",
      class: "bg-[#011409] text-white",
      shadow: "0px 0px 2px 0px #FDB813CC",
      shadowBg: "#FDB813",
    },
    {
      id: 3,
      title: "Market-Entry Insights",
      desc: "Learn from international and local experts how to scale across borders, navigate regulatory landscapes, and unlock new market segments.",
      class: "bg-[#011409] text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#13EC37",
    },
    {
      id: 4,
      title: "Exclusive Thought Leadership",
      desc: "Engage with curated sessions featuring CEOs, policymakers, and tech leaders who are shaping Africa’s digital and industrial ecosystems.",
      class: "bg-[#011409] text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#13EC37",
    },
    {
      id: 5,
      title: "Deals, Not Just Discussions",
      desc: "Participate in structured matchmaking, investor office hours, and live showcases that turn conversation into capital, partnership, and tangible business outcomes.",
      class: "bg-[#011409] text-white",
      shadow: "0px 0px 2px 0px #FFFFFFCC",
      shadowBg: "white",
    },
    {
      id: 6,
      title: "Expand Your Ecosystem",
      desc: "Build strategic relationships across founders, growth-stage startups, corporates, investors, and government agencies — all under one roof.",
      class: "bg-[#011409] text-white",
      shadow: "0px 0px 2px 0px #FDB813CC",
      shadowBg: "#FDB813",
    },
    {
      id: 7,
      title: "Legacy Meets Next-Level Impact",
      desc: "Leverage the 10+ year #StartupSouth legacy while exploring cutting-edge innovation trends, frontier technologies, and new business models.",
      class: "bg-[#011409] text-white",
      shadow: "0px 0px 2px 0px #FDB813CC",
      shadowBg: "#FDB813",
    },
    {
      id: 8,
      title: "Global Exposure & Media Visibility",
      desc: "Gain visibility across international media and partner ecosystems. OffChart NXT amplifies your presence, connecting you to global audiences and potential collaborators.",
      class: "bg-[#011409] text-white",
      shadow: "0px 0px 2px 0px #13EC37CC",
      shadowBg: "#13EC37",
    },
  ];

  return (
    <section className="bg-[#074922CC] py-20 relative overflow-hidden" id="why">
      <h2 className="text-[#D9D9D9] lg:text-[50px] md:text-3xl text-2xl mb-10 text-center">
        Why <span className="text-[#13EC37]">OffChart NXT</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-10 pb-20">
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
              className={`relative rounded-2xl p-6 ${item.class} min-h-[220px] flex flex-col justify-center`}
            >
              <h5 className="text-lg font-semibold mb-3 text-[#D9D9D9]">{item.title}</h5>
              <p className="text-[15px] leading-relaxed text-[#D9D9D9]">{item.desc}</p>
            </div>

          </div>
        ))}
      </div>

      <div className="w-full absolute bottom-0">
        <img src={offChartPattern} className="w-full" alt="" />
      </div>
    </section>
  );
};

export default WhyOffchart;