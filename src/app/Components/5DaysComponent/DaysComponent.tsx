import React from 'react'
import Image from 'next/image'
import CloudyMed from '@/Assets/CloudyMed.png'
const DaysComponent = () => {
  return (
    <div className='flex flex-col font-[Inter] text-white items-center'>
      <p className='text-[24px]'>Mon</p>
      <Image src={CloudyMed} alt="Cloudy Med" />
      <p className='text-[20px]'>Cloudy</p>
      <div className='text-[20px] flex'>
        <p>H: <span>76</span></p>
        <p>L: <span>58</span></p>
      </div>
    </div>
  )
}

export default DaysComponent
