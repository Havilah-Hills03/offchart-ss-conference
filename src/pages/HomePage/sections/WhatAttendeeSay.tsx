import React from "react";
import quote from "../../../assets/vector.svg"
import person1 from "../../../assets/3-in-one-logo.png";
import offChartPattern from "../../../assets/offchart-pattern.png"

const testimonials = [
  {
    text: "#Startupsouth4 was very pivotal to our growth as a Technology Startup team. The insights we gained are still relevant till date.",
    name: "Uyi Vincet Edigen",
    title: "CEO & Co-Founder",
    company: "GreenBii Technologies",
    image: person1,
  },
  {
    text: "Talking about my Startupsouth5 experience gets me emotional. Our Productgot rave reviews from the audience, we networked, got funding, mentorship, media attention and more.",
    name: "Ikechukwu Kingsley Amajuoyi",
    title: "Founder",
    company: "KR Foods",
    image: person1,
  },
  {
    text: "My journey as a founder was redefined during StartupSouth4. Learning from mentors and sharing ideas with other entrepreneurs . I strongly recommend OffChart NXT to anyone building a tech solution.",
    name: "Ndifreke Ikokpu",
    title: "Co-Founder",
    company: "HouseAfrica",
    image: person1,
  },
  {
    text: "Coming to #StartuSouth6 was an eye opener. I saw how aspiring the Nigerian youths are in the south south ecosystem. The Program was quite infusing with masterclasses tailored to meet participants objectives.",
    name: "Ogechukwu Uchechukwu",
    title: "Co-Founder",
    company: "Greenage Technologies",
    image: person1,
  },
    {
    text: "#Startupsouth4 was very pivotal to our growth as a Technology Startup team. The insights we gained are still relevant till date.",
    name: "Uyi Vincet Edigen",
    title: "CEO & Co-Founder",
    company: "GreenBii Technologies",
    image: person1,
  },
  {
    text: "Talking about my Startupsouth5 experience gets me emotional. Our Productgot rave reviews from the audience, we networked, got funding, mentorship, media attention and more.",
    name: "Ikechukwu Kingsley Amajuoyi",
    title: "Founder",
    company: "KR Foods",
    image: person1,
  },
  {
    text: "My journey as a founder was redefined during StartupSouth4. Learning from mentors and sharing ideas with other entrepreneurs . I strongly recommend OffChart NXT to anyone building a tech solution.",
    name: "Ndifreke Ikokpu",
    title: "Co-Founder",
    company: "HouseAfrica",
    image: person1,
  },
  {
    text: "Coming to #StartuSouth6 was an eye opener. I saw how aspiring the Nigerian youths are in the south south ecosystem. The Program was quite infusing with masterclasses tailored to meet participants objectives.",
    name: "Ogechukwu Uchechukwu",
    title: "Co-Founder",
    company: "Greenage Technologies",
    image: person1,
  },
   
];

const AttendeesSay: React.FC = () => {
  return (
 <section className="bg-[#074922CC] py-20 px-6  relative">
  <h2 className="text-center text-4xl font-bold text-[#13EC37] mb-16">
    What Attendees Say
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-10 lg:mb-20">
    {testimonials.map((item, index) => (
      <div key={index} className="relative group">

        {/* Glow Background */}
        <div className="absolute inset-0 -translate-x-2 bg-[#13EC37] rounded-xl transition-all duration-300"></div>

        {/* Card */}
        <div className="relative bg-[#011409] rounded-xl text-white p-6 h-full flex flex-col">
          
          {/* Quote + Text Container */}
          <div className="flex items-start gap-3">
            <img src={quote} alt="quote" className="w-6  " />
            <p className="text-sm leading-relaxed">{item.text}</p>
          </div>

          {/* Spacer so profile stays at bottom */}
          <div className="mt-auto pt-6">
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h5 className="text-sm font-bold text-[#D9D9D9]">{item.name}</h5>
                <p className="text-xs text-[#D9D9D9]">
                  {item.title}, {item.company}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    ))}
  </div>

  <div className=' absolute bottom-0'>
            <img src={offChartPattern} className='w-full partner' alt="" />
          </div>
</section>
  );
};

export default AttendeesSay;