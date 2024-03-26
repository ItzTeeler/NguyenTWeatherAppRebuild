import React from 'react'
import SearchComponent from '../SearchComponent/SearchComponent'
import FavoriteComponent from '../FavoritesComponent/FavoriteComponent'
import DaysComponent from '../5DaysComponent/DaysComponent'
import SunnyLarge from '@/Assets/SunnyLarge.png'
import Image from 'next/image'
import UnFav from '@/Assets/WeatherUnFav.png'

const MainComponent = () => {
    return (
        <div className='backgroundImage font-[Inter]'>
            <div className='grid grid-cols-10'>
                <div className='col-span-2 favoriteBg'>
                    <SearchComponent />
                    <p className='font-[Inter] text-[24px] text-white ml-[17px] mt-[30px]'>Favorites</p>
                    <div>
                        <FavoriteComponent />
                    </div>
                </div>
                <div className='col-span-8 px-[150px]'>
                    <div className='grid-flow-row pt-[154px]'>
                        <div className='grid grid-cols-3'>
                            <div className='flex flex-col items-center text-white'>
                                <Image src={SunnyLarge} alt="Sunny Large" className='pb-[82px]' />
                                <p className='text-[24px]'>Sunny</p>
                            </div>
                            <div className='flex flex-col items-center text-white '>
                                <p className='text-[50px]'>Stockton</p>
                                <div className='text-[100px]'>
                                    <p>93 <span>°F</span></p>
                                </div>

                                <div className='flex flex-row text-[27px]'>
                                    <p>H: <span>76</span></p>
                                    <p>L: <span>58</span></p>
                                </div>
                            </div>
                            <div className='flex justify-between flex-col items-end text-right text-white'>

                                <div>
                                    <Image src={UnFav} alt="UnFav" />
                                </div>
                                <div className='text-[24px]'>
                                    <p>Sunday</p>
                                    <p>11:34AM</p>
                                    <p>November 27, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-[95px] mb-[41px]'/>
                    <div className='grid-flow-row'>
                        <div className='flex justify-between'>
                            <DaysComponent />
                            <DaysComponent />
                            <DaysComponent />
                            <DaysComponent />
                            <DaysComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent
