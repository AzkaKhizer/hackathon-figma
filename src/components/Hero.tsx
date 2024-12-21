import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <main className='w-full h-[615px] flex justify-between items-start bg-[#F2F0F1]'>
      <div className='relative'>
    <div className='  w-[315px]  md:w-[577px] mt-3 md:mt-10 ml-5 md:ml-10'>
        <h1 className='font-bold text-[36px] md:text-[64px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='text-[14px] md:text-[16px] text-[#655B5B] mt-3'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <button className='text-white bg-[#000000] py-2 px-8 rounded-[62px] text-[16px] mt-4  '>Shop Now</button>
    </div>

    <div className=''>
        <Image src={"/Rectangle2.png"} className=' mr-4' width={1400} height={615} alt="profile"></Image>
        <Image src={"/Vector-3.png"} className=' mr-4 ' width={100} height={100} alt="star"></Image>
    </div>
    </div>
    </main>
  )
}


