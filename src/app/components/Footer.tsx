import React from 'react'
import { FaFacebook , FaInstagram , FaLinkedin , FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black bottom-0'>
    <footer className=''>
        <div className = 'md:flex md:justify-between sm:px-12 px-4 bg-[#ffffff19] py-7 md:items-center'>

        <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
        md:w-2/5 text-white'><span className = "text-rose-300">Free</span> pastry when you sign up!</h1>
        <div className='flex flex-row items-center gap-2 bg'>
        <FaFacebook color='white'></FaFacebook>
        <FaInstagram color='white'></FaInstagram>
        <FaLinkedin color='white'></FaLinkedin>
        <FaTwitter color='white'></FaTwitter>
        </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer