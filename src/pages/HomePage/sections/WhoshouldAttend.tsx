import React from 'react'
import foundersIcon from '../../../assets/founders-icon.svg'
import growthIcon from '../../../assets/growth-icon.svg'
import investorIcon from '../../../assets/investor-icon.svg'
import internationalIcon from '../../../assets/international-con.svg'
import foundationalIcon from '../../../assets/foundation-icon.svg'
import professionalIcon from '../../../assets/pro-icon.svg'

const WhoshouldAttend: React.FC = () => {

  const whoShouldattendData = [
    { id: 1, icon: foundersIcon, title: 'Founders &', br: 'Startups' },
    { id: 2, icon: growthIcon, title: 'Growth-Stage &' , br:'Established Tech Firms' },
    { id: 3, icon: investorIcon, title: 'Investors (VC, PE,)', br:' Angel Networks' },
    { id: 4, icon: internationalIcon, title: 'International', br:'Companies' },
    { id: 5, icon: foundationalIcon, title: 'DFIs, Foundations &', br: 'Governments' },
    { id: 6, icon: professionalIcon, title: 'Professionals &', br: ' Emerging Talent' }
  ]

  return (
    <section className='bg-[#15CE34] py-20 md:py-10 text-center flex flex-col items-center' id='attend'>

      <h2 className='text-[#D9D9D9] lg:text-[50px] md:text-3xl text-2xl mb-3 leading-tight'>
        Who <span className='text-[#041B0E]'>Should Attend</span>
      </h2>

      <p className='lg:text-xl text-[18px] text-[#041B0E] max-w-5xl mb-16 px-4'>
     OffChart NXT convenes founders, investors, operators, policymakers, and technology leaders shaping the future of innovation and enterprise.
      </p>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 px-6 md:px-16 lg:px-36 w-full'>
        {whoShouldattendData.map((item) => (
          <div
            key={item.id}
            className='bg-[#011409] rounded-2xl h-[200px] text-white flex flex-col justify-center items-center text-center px-6'
            style={{
              boxShadow: '0px 4px 4px 0px #00000040',
              backdropFilter: 'blur(4px)'
            }}
          >

            <div className='h-[56px] w-[56px] rounded-full bg-[#074922] flex justify-center items-center mb-4'>
              <img src={item.icon} alt={item.title} />
            </div>

            <h4 className='text-lg font-medium leading-snug text-[#D9D9D9]'>
              {item.title} <br /> {item.br}
            </h4>

          </div>
        ))}
      </div>

    </section>
  )
}

export default WhoshouldAttend