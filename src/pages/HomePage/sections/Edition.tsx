import React from 'react'
import { Button } from '../../../components/Button'
import editonVideo from '../../../assets/ssx-recap-export.mp4'

const Edition: React.FC = () => {
  return (
    <section className='relative bg-[#0A0A0A] flex flex-row xs:flex-col items-stretch justify-between  gap-6 lg:min-h-[600px] edit-section pl-20'>

      {/* Text */}
      <div className='lg:w-[40%] w-full   flex flex-col justify-center lg:py-12 order-2 lg:order-1  py-5 pb-20 content'>
        <h3 className='text-[#D9D9D9] lg:text-[50px] md:text-3xl text-xl mb-4 leading-tight'>
          The 11th edition of the annual convening
        </h3>

        <p className='text-[#D9D9D9] mb-4 font-normal text-[17px]'>
          OffChart NXT is the 11th edition of the annual convening previously known as #StartupSouth Conference.
          For over a decade, #StartupSouth convened the builders shaping Africa’s emerging innovation ecosystems.
        </p>

        <p className='text-[#D9D9D9] mb-4 font-normal text-[17px]'>
          Built on 10 transformative editions - OffChart NXT extends the credibility, networks, and ecosystem depth of #StartupSouth.
          OffChart NXT is a global convergence platform connecting Africa’s emerging ecosystems to capital, policy, markets, and expansion pathways.
        </p>

        <div className='flex flex-row  hero-btn    gap-4 items-center mt-8'>
          <a href="#ticket">
          <Button
            text="Attend Now"
            className='bg-[#13EC37] text-[#01240F] hover:bg-[#01240F] w-full hover:text-white btn-bg'
          />
          </a>

          <Button
            text="Partner with us"
            className='border-2 border-[#FDB813] hover:border-none hover:text-[#01240F] text-[#FDB813] btn-border'
          />
        </div>
      </div>

      {/* Video */}
      <div className='lg:w-[50%] w-full relative flex justify-end order-1 lg:order-2'>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[100vh] lg:h-auto object-cover"
        >
          <source src={editonVideo} type="video/mp4" />
        </video>

        {/* Overlay to hide watermark */}
        <div className="absolute bottom-2 right-5 w-[230px] h-[48px] bg-[#0A0A0A]/0 backdrop-blur-sm"></div>

      </div>

    </section>
  )
}

export default Edition