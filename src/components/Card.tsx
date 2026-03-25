import React from 'react'
import { Link } from 'react-router-dom'


interface cardProps {
    image: string,
    cardTitle?: string,
    cardDesc: string,
    className: string,
    text: string,
    btnClassname: string,
    cardClass: string ,
    urlPath?: string ,
    urlCardpath?: string
     


} 

export const Card:React.FC<cardProps > = ({image , cardTitle , cardDesc , className , text , cardClass , btnClassname, urlPath, urlCardpath}) => {
  return (
    <div className={`max-w-[560px] h-auto  card ${cardClass}`} 
    >
        <Link to={urlCardpath ?? '/'}>
      <div className="cardImg rounded-4xl">
            <img src={image} alt="" className="rounded-t-4xl  h-[250px] w-full object-cover object-top"   loading="lazy"
 />
        </div>
        <div className={`cardBody ${className} rounded-b-4xl`}>
            <h4 className='text-[#294D58] text-2xl font-extrabold'>{cardTitle}</h4>
            <p className='text-[16px] font-normal text-[#333333]  my-4'>{cardDesc}</p> 
                <Link to={urlPath ?? "/"} className={`${btnClassname}  bg-[#88CA4E] text-[#294D58] hover:bg-white transition px-4 py-2  rounded-[10px] text-lg lg:px-10 font-bold`}>
                 {text}
                </Link> 
        </div>  
        </Link>
    </div>
  )
}
