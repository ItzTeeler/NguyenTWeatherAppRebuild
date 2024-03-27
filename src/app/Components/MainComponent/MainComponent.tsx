'use client'
import React, { useEffect, useState } from 'react'
import SearchComponent from '../SearchComponent/SearchComponent'
import FavoriteComponent from '../FavoritesComponent/FavoriteComponent'
import DaysComponent from '../5DaysComponent/DaysComponent'
import SunnyLarge from '@/Assets/SunnyLarge.png'
import Image from 'next/image'
import UnFav from '@/Assets/WeatherUnFav.png'
import { FetchGeoLocation, FetchGeoLocationByLat } from '@/app/utils/DataServices'
import { GeoLocation } from '@/Interfaces/Interface'

const MainComponent = () => {
    const [userInput, setUserInput] = useState<string>("Stockton");
    const [dataGeoLocation, setDataGeoLocation] = useState<GeoLocation>();
    const [dataGeoLocationByLat, setDataGeoLocationByLat] = useState<GeoLocation>();
    useEffect(() =>{
        const getData = async () =>{
            const geoLocation = await FetchGeoLocation(userInput);
            const geoData: GeoLocation = geoLocation;

            const getLocationByLat = await FetchGeoLocationByLat(String(geoData.coord.lat), String(geoData.coord.lon));
            const getDataByLat: GeoLocation = getLocationByLat;
            setDataGeoLocationByLat(getDataByLat);

            console.log(geoLocation);
        } 
        getData();
    }, [userInput])
    return (
        <div className='backgroundImage font-[Inter]'>
            <div className='grid grid-cols-8 md:grid-cols-10'>
                <div className='col-span-12 md:col-span-2 favoriteBg  order-2 md:order-1'>
                    <div className='hidden md:block'><SearchComponent setUserInput={setUserInput} /></div>
                    <p className='font-[Inter] text-[24px] text-white ml-[17px] mt-[30px]'>Favorites</p>
                    <div>
                        <FavoriteComponent />
                    </div>
                    {userInput}
                </div>
                <div className='col-span-8 px-10 md:px-[100px] order-1 md:order-2'>
                <div className='block md:hidden'><SearchComponent setUserInput={setUserInput}/></div>
                    <div className='grid-flow-row pt-10 md:pt-[154px]'>
                        <div className='grid grid-cols-11 gap-x-5'>
                            <div className='flex flex-col items-center text-white col-span-12 md:col-span-4 order-2 md:order-1'>
                                <Image src={SunnyLarge} alt="Sunny Large" className='pb-10 md:pb-[82px]' />
                                <p className='text-[24px]'>Sunny</p>
                            </div>
                            <div className='flex flex-col items-center text-white col-span-12 md:col-span-4 order-1 md:order-2 pb-10'>
                                <div className='flex items-center'>
                                <p className='text-[50px]'>{dataGeoLocationByLat?.name}</p>
                                <Image src={UnFav} className='block md:hidden w-[27px] h-[27px] ml-5' alt="UnFav" />
                                </div>
                                <div className='text-[100px]'>
                                <p>{Math.round(dataGeoLocationByLat?.main.temp)}<span>°F</span></p>
                                </div>

                                <div className='flex flex-row text-[27px]'>
                                    <p>H: <span>76</span></p>
                                    <p>L: <span>58</span></p>
                                </div>
                            </div>
                            <div className='flex justify-between flex-col items-center md:items-end text-center md:text-right text-white col-span-12 md:col-span-3 order-3 md:order-3'>

                                <div className='hidden md:block'>
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
                    <hr className='mt-[95px] mb-[41px] '/>
                    <div className='grid-flow-row pb-5'>
                        <div className='flex justify-between flex-col md:flex-row'>
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
