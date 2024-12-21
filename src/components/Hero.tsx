import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <main className='w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between mt-2 items-start bg-[#F2F0F1] absolute mr-0 pr-0'>
    
    <div className='  absolute w-full md:w-[577px] mt-3 md:mt-10 ml-5 md:ml-10 '>
        <h1 className='font-bold text-[36px] md:text-[64px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='text-[14px] md:text-[16px] text-[#655B5B] mt-3'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <button className='text-white bg-[#000000] py-2 px-8 rounded-[62px] text-[16px] mt-4  '>Shop Now</button>
    </div>

    <div className='w-full  '>
        <Image src={"/Rectangle2.png"} className=' w-screen   h-[615px]' width={1400} height={200} alt="profile"></Image>
        </div>  
        <div> 
        <Image src={"/Vector-3.png"} className='w-[100px] absolute md:top-[100px] md:left-[1200px]' width={100} height={100} alt="star"></Image>
        <Image src={"/Vector-4.png"} className='w-[50px]  absolute md:top-[300px] md:left-[700px]' width={50} height={50} alt="star2"></Image>
    </div>
    
    </main>
  )
}


