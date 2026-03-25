import About from "./sections/About"
import Edition from "./sections/Edition"
import ExihibitionPavilion from "./sections/ExihibitionPavilion"
import HeroSection from "./sections/HeroSection"
import OffchartTrack from "./sections/OffchartTrack"
import Partnersection from "./sections/Partnersection"
import Speakers from "./sections/Speakers"
import Ticket from "./sections/Ticket"
import AttendeesSay from "./sections/WhatAttendeeSay"
import WhoshouldAttend from "./sections/WhoshouldAttend"
import WhyOffchart from "./sections/Why-offchart"

 

function HomePage() { 

  return (
  <> 
    <HeroSection />
    <Edition />
    <WhyOffchart />
    <Speakers />
    <WhoshouldAttend />
    <OffchartTrack />
    <Partnersection />
  <Ticket />
    <ExihibitionPavilion /> 
    <AttendeesSay />
    <About />
  </>
  )
}

export default HomePage 