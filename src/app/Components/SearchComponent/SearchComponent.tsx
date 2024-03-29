'use client'
import React, { useState } from 'react'
import searchIcon from '@/Assets/SearchIcon.png'
import Image from 'next/image'
const SearchComponent = (prop: { setUserInput: (input: string) => void }) => {
  const [userChange, setUserChange] = useState<string>("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>) => {
    if ((e as React.KeyboardEvent<HTMLInputElement>).key === "Enter") {
      e.preventDefault();
      prop.setUserInput(userChange);
    }
  };
  return (
    <form className='flex mx-[21px] items-end'>
      <input type="text" className='w-full searchClass h-[52px]' onChange={(e) => setUserChange(e.target.value)}
        onKeyDown={handleKeyDown} />
      <Image className='ml-[8px] pt-[41px] flex-auto cursor-pointer' src={searchIcon} alt="Search Icon" onClick={() => prop.setUserInput(userChange)} />
    </form>
  )
}

export default SearchComponent
