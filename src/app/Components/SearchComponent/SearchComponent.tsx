import React from 'react'
import searchIcon from '@/Assets/SearchIcon.png'
import Image from 'next/image'
const SearchComponent = () => {
  return (
    <form className='flex mx-[21px]'>
        <input type="text" className='w-[290px] searchClass' />
        <Image className='ml-[8px] pt-[41px] flex-auto' src={searchIcon} alt="Search Icon" />
    </form>
  )
}

export default SearchComponent
