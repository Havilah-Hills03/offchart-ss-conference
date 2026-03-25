import React from 'react'

interface buttonProps {
    text: React.ReactNode,
    className: string
}

export const Button:React.FC<buttonProps> = ({text , className}) => {
  return (
   <button className={`${className}  hover:bg-[#13EC37]  cursor-pointer transition px-3 py-4  rounded-[20px] text-lg lg:px-10 font-bold  relative z-[999]`}>
    {text}
   </button>
  )
}
