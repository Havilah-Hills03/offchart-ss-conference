import React from "react";
import logo from "../assets/offchart-ss-conference-logo.png"
import { Link } from "react-router-dom"; 
import linkedinIicon from '../assets/linkedin-icon.svg'
import  facebookIcon from '../assets/whatsapp-icon.svg'
import whatsappIcon from '../assets/facebook-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'

export const Footer: React.FC = () => { 

  // const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     setLoading(true);


  //    try {
  //     const response = await fetch('https://future-shpere-backend.vercel.app/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ 
  //         email, 
  //       }),
  //     })

  //     const data = await response.json()

  //     if (response.ok) {
  //       toast.success('Message sent successfully!')
  //       setEmail('') 
  //     } else {
  //      toast.error(data.message || 'Something went wrong')
  //     }
  //   } catch (error) {
  //     toast.error('Unable to send message. Please try again later.')
  //   } finally {
  //     setLoading(false)
  //   }
  // }




  //  const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  
  //   try {
  //     const formData = new FormData(); 
  //     formData.append("email", email); 
  
  //     const response = await fetch(
  //       "https://script.google.com/macros/s/AKfycbzlv9uvQMIWZYyWX5rDsAezg8H1dxfdP0lu7j-BZTLUXft5LuVoFARcQ-fT1P0n6Ek/exec",
  //       {
  //         method: "POST",
  //         body: formData, 
  //       }
  //     );
  
  //     const data = await response.json();
  
  //     if (data.result === "success") {
  //       toast.success("Message sent successfully!"); 
  //       setEmail(""); 
  //     } else {
  //       toast.error("Something went wrong");
  //     }
  //   } catch (error) {
  //     toast.error("Unable to send message");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <footer
      className="text-[#f5f5f5] px-6 lg:px-32 py-16"
      style={{
        background: "#041B0E"

      }}
    >
      <div className="grid grid-cols-1 lg:flex gap-10 justify-around items-start">

        {/* Logo + Text */}
        <div className=" ">
             <a href="/">
       <img src={logo} alt="" className="w-[208px] mb-4" />
     </a>

          <p className="max-w-sm">
            Growth doesn’t follow maps - it goes OffChart. OffChart NXT connects emerging ecosystems to capital, policy, and global networks.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[20px] font-bold mb-8  text-[#FDB813]">Programs</h4>
          <div className="flex flex-col gap-4 space-y-2 text-[#f5f5f5] font-medium">
            <Link to="">Tracks</Link>
            <Link to="">Tickets</Link>
            <Link to="">Speakers</Link> 
          </div>
        </div>

        {/* Contact */}
        <div>
         <h4 className="text-[20px] font-bold mb-8   text-[#FDB813]">Resources</h4>
         <div className="flex flex-col gap-4">
           <Link to="" className="mb-2 text-[#f5f5f5] font-medium">FAQ</Link>
          <Link to="" className="text-[#f5f5f5] font-medium">Past Events</Link>
         <Link to="">Contact Us</Link> 
         </div>
        </div>

        {/* Newsletter */}
        <div> 

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1LGnnyNW44/?mibextid=wwXIfr" className="pb-2 px-2  rounded-[10px]  transition">
             <img src={linkedinIicon} alt="" />
            </a>
            <a href="#" className="pb-2 px-2  rounded-[10px]  transition">
             <img src={facebookIcon} alt="" />
            </a>
            <a href="#" className="pb-2 px-2  rounded-[10px] transparent  transition">
            <img src={whatsappIcon} alt="" />
            </a>
             <a href="#" className="pb-2 px-2  rounded-[10px] transparent  transition">
            <img src={instagramIcon} alt="" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10   pt-6 text-[16px] text-[#FFFFFF80]/80 text-center">
        &copy; {new Date().getFullYear()} All Right Reserved. StartupSouth Enterprise Development LTD/GTE 
      </div>
    </footer>
  );
};