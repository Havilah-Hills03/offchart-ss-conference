import React from 'react'
import logo1 from '../../../assets/meta-logo.png'
import logo2 from '../../../assets/zoho-logo.png'
import logo3 from '../../../assets/airtel-logo.png'
import logo4 from '../../../assets/britishCouncil-logo.png'
import logo5 from '../../../assets/ford-logo.png'
import logo6 from '../../../assets/MainOne-Solution-logo.png'
import logo7 from '../../../assets/imoDigitalCity-logo.png'
import logo8 from '../../../assets/Sterling_Bank-logo.png'
import logo9 from '../../../assets/BOI-Logo.png'
import logo10 from '../../../assets/google-developers-logo.png'
import logo11 from '../../../assets/UNDP-logo.png'
import logo12 from '../../../assets/ntda-logo.png'
import logo13 from '../../../assets/moist-logo.png'
import logo14 from '../../../assets/modeeg-logo.png'
import logo15 from '../../../assets/chamber-logo.png'
import logo16 from '../../../assets/aban-logo.png'
import logo17 from '../../../assets/ssean-logo.png'
import { Button } from '../../../components/Button'

const Partnersection: React.FC = () => {

  const partnerLogo = [
    { id: 1, altTitle: 'Meta Logo', logo: logo1 },
    { id: 2, altTitle: 'Zoho Africa Logo', logo: logo2 },
    { id: 3, altTitle: 'Airtel Logo', logo: logo3 },
    { id: 4, altTitle: 'British Council Logo', logo: logo4 },
    { id: 5, altTitle: 'Ford Foundation Logo', logo: logo5 },
    { id: 6, altTitle: 'Main One Logo', logo: logo6 },
    { id: 7, altTitle: 'Imo Digital City Logo', logo: logo7 },
    { id: 8, altTitle: 'Sterling Bank Logo', logo: logo8 },
    { id: 9, altTitle: 'Bank Of Industry Logo', logo: logo9 },
    { id: 10, altTitle: 'Google Developer Logo', logo: logo10 },
    { id: 11, altTitle: 'UNDP Logo', logo: logo11 },
    { id: 12, altTitle: 'NTDA Logo', logo: logo12 },
    { id: 13, altTitle: 'Ministry of Innovation Logo', logo: logo13 },
    { id: 14, altTitle: 'Ministry of Digital Economy Logo', logo: logo14 },
    { id: 15, altTitle: 'Chamber Port Harcourt Logo', logo: logo15 },
    { id: 16, altTitle: 'Aban Logo', logo: logo16 },
    { id: 17, altTitle: 'Sean Logo', logo: logo17 }
  ]

  return (
    <section className='bg-[#15CE34] py-16 text-center flex flex-col lg:items-center px-6 md:px-12 lg:px-32' id='partners'>

      <h2 className='text-[#f5f4f4] text-2xl md:text-4xl lg:text-[50px] mb-4 leading-tight'>
        <span className='text-[#074922]'>OffChart NXT</span> Partners
      </h2>

      <p className=' md:text-lg text-lg lg:text-xl text-[#041B0E] max-w-4xl mb-12'>
       OffChart NXT partners with forward-looking organizations across technology, finance, policy, and media to convene the people, ideas, and collaborations shaping the future. Below are some of our previous partners.
      </p>

      {/* Partner Logos */}
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 w-full mb-12'>
        {partnerLogo.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-center h-16 sm:h-20'
          >
            <img
              src={item.logo}
              alt={item.altTitle}
              className='max-h-full max-w-full object-contain '
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className='flex  flex-row gap-4 w-full sm:w-auto hero-btn '>
        <Button
          text="Become a Partner"
          className='bg-[#074922] text-[#13EC37] hover:bg-[#01240F] hover:text-white w-full lg:w-auto btn-bg'
        />
        <Button
          text="See All Past Partners"
          className='border-2 border-[#074922] text-[#074922] hover:bg-[#01240F] hover:text-white w-full lg:w-auto btn-bg'
        />
      </div>

    </section>
  )
}

export default Partnersection