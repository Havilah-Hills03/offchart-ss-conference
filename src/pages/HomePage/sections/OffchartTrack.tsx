import React from 'react'

import capitalImg from '../../../assets/capital.png'
import enterpriseImg from '../../../assets/entre.png'
import governmentImg from '../../../assets/govt.png'
import innovationImg from '../../../assets/innovation.png'
import foundersImg from '../../../assets/startup.png'
import showcaseImg from '../../../assets/showcase.png'
import energyImg from '../../../assets/energy.png'
import talentImg from '../../../assets/talent.png'
import offChartPattern from '../../../assets/offchart-pattern.png'

const OffchartTrack: React.FC = () => {

  const tracks = [
    { id: 1, img: capitalImg, title: 'Capital & Investment' },
    { id: 2, img: enterpriseImg, title: 'Enterprise Expansion & Big Tech Strategy' },
    { id: 3, img: governmentImg, title: 'Government & Ecosystem Development' },
    { id: 4, img: innovationImg, title: 'Innovation & Frontier Technologies' },
    { id: 5, img: foundersImg, title: 'Founders, Venture Building & Leadership' },
    { id: 6, img: showcaseImg, title: 'Founder Showcases & Deal Rooms' },
    { id: 7, img: energyImg, title: 'Energy Systems, Climate & Infrastructure' },
    { id: 8, img: talentImg, title: 'Talent, Workforce & The Future of Work' }
  ]

  return (

    <section className='bg-[#074922CC] pt-20 text-center flex flex-col items-center'>

      {/* Heading */}
      <h2 className='text-[#D9D9D9] lg:text-[50px] md:text-3xl text-2xl mb-3 leading-tight'>
        <span className='text-[#13EC37]'>OffChart NXT</span> Tracks
      </h2>

      {/* Description */}
      <p className='text-lg text-[#D9D9D9] max-w-5xl mb-16 px-6'>
        OffChart NXT retains and elevates the multi-track architecture refined over previous editions:
      </p>

      {/* Cards */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-6 md:px-16 lg:px-36 w-full pb-14 mb-4'>

        {tracks.map((item) => (

          <div
            key={item.id}
            className='relative rounded-xl overflow-hidden group cursor-pointer lg:min-w-[230px]  h-[250px]'
          >

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            />

            {/* Green Label */}
            <div className='absolute bottom-0 left-0 w-full bg-[#13EC37] h-[80px] group-hover:h-[200px] transition-all duration-500 rounded-t-2xl py-4 px-4 text-center font-bold overflow-hidden '>

              <h4 className='text-[#074922CC] text-[16px] leading-5 pb-2'>
                {item.title}
              </h4>

              <p className='text-[14px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                Designed for startups and established companies seeking structured expansion,
                partnerships, and operational excellence across regional and global markets.
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Pattern */}
      <div className='w-full'>
        <img src={offChartPattern} className='w-full partner' alt="" />
      </div>

    </section>

  )
}

export default OffchartTrack