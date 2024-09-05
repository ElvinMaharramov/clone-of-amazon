import React from 'react';

import Image from 'next/image';

import logo from '../../images/logo/amazon-logo.png';

const Footer = () => {
  return (
    <div className='w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4 footer-responsive-class'>
      <Image
        className='w-24'
        src={logo}
        alt='logo'
      />
      <p>
        Developed by <a href='https://www.linkedin.com/in/maharramovelvin/' target='_blank' className='text-amazon_yellow font-bold duration-300 hover:underline'>Elvin Maharramov</a> © {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer;