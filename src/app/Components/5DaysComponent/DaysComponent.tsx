import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import CloudyMed from '@/Assets/CloudyMed.png'
import SunnyMed from '@/Assets/SunnyMed.png'
import FoggyMed from '@/Assets/FoggyMed.png'
import RainyMed from '@/Assets/RainyMed.png'
import SnowMed from '@/Assets/SnowMed.png'
const DaysComponent = (props: { icon: string, day: string, high: string, low: string }) => {
    const [medWeatherIcon, setMedWeatherIcon] = useState<StaticImageData>(SunnyMed);
    const CapitalFirstLetter = (input: string) => {
        if (!input) return '';
        let words = input.split(" ");
        let capWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let formattedInput = capWords.join(" ");
        return formattedInput;
    }
    useEffect(() => {
        WeatherIcon(props.icon);
    }, [])
    function WeatherIcon(weatherCondition: string) {
        switch (weatherCondition) {
            case "rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "clear sky":
                setMedWeatherIcon(SunnyMed);
                break;
            case "few clouds":
                setMedWeatherIcon(CloudyMed);
                break;
            case "scattered clouds":
                setMedWeatherIcon(CloudyMed);
                break;
            case "broken clouds":
                setMedWeatherIcon(CloudyMed);
                break;
            case "shower rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "thunderstorm":
                setMedWeatherIcon(RainyMed);
                break;
            case "snow":
                setMedWeatherIcon(RainyMed);
                break;
            case "mist":
                setMedWeatherIcon(SunnyMed);
                break;
            case "light rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "smoke":
                setMedWeatherIcon(FoggyMed);
                break;
            case "haze":
                setMedWeatherIcon(FoggyMed);
                break;
            case "sand/dusk whirls":
                setMedWeatherIcon(FoggyMed);
                break;
            case "fog":
                setMedWeatherIcon(FoggyMed);
                break;
            case "sand":
                setMedWeatherIcon(FoggyMed);
                break;
            case "volcanic ash":
                setMedWeatherIcon(FoggyMed);
                break;
            case "squalls":
                setMedWeatherIcon(FoggyMed);
                break;
            case "tornado":
                setMedWeatherIcon(FoggyMed);
                break;
            case "overcast clouds":
                setMedWeatherIcon(CloudyMed);
                break;
            case "light snow":
                setMedWeatherIcon(SnowMed);

                break;
            case "heavy snow":
                setMedWeatherIcon(SnowMed);
                break;
            case "sleet":
                setMedWeatherIcon(SnowMed);
                break;
            case "light shower sleet":
                setMedWeatherIcon(SnowMed);
                break;
            case "shower sleet":
                setMedWeatherIcon(SnowMed);
                break;
            case "light rain and snow":
                setMedWeatherIcon(SnowMed);
                break;
            case "rain and snow":
                setMedWeatherIcon(SnowMed);
                break;
            case "light shower snow":
                setMedWeatherIcon(SnowMed);
                break;
            case "shower snow":
                setMedWeatherIcon(SnowMed);
                break;
            case "heavy shower snow":
                setMedWeatherIcon(RainyMed);
                break;
            case "moderate rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "heavy intensity rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "very heavy rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "extreme rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "freezing rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "light intensity shower rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "shower rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "heavy intensity shower rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "ragged shower rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "light intensity drizzle":
                setMedWeatherIcon(RainyMed);
                break;
            case "dizzle":
                setMedWeatherIcon(RainyMed);
                break;
            case "heavy intensity drizzle":
                setMedWeatherIcon(RainyMed);
                break;
            case "light intensity drizzle rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "drizzle rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "heavy intensity drizzle rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "shower rain and drizzle":
                setMedWeatherIcon(RainyMed);
                break;
            case "heavy shower rain and drizzle":
                setMedWeatherIcon(RainyMed);
                break;
            case "shower drizzle":
                setMedWeatherIcon(RainyMed);
                break;
            case "thunderstorm with light rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "thunderstorm with rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "thunderstorm with heavy rain":
                setMedWeatherIcon(RainyMed);
                break;
            case "light thunderstorm":
                setMedWeatherIcon(RainyMed);
                break;
            case "heavy thunderstorm":
                setMedWeatherIcon(RainyMed);
                break;
            case "ragged thunderstorm":
                setMedWeatherIcon(RainyMed);
                break;
            case "thunderstorm with light drizzle":
                setMedWeatherIcon(RainyMed);
                break;
            case "thunderstorm with drizzle":
                setMedWeatherIcon(RainyMed);
                break;
            case "thunderstorm with heavy drizzle":
                setMedWeatherIcon(RainyMed);
                break;
            default: setMedWeatherIcon(CloudyMed);
        }
    }

    return (
        <div className='flex flex-col font-[Inter] text-white items-center mb-3'>
            <p className='text-[24px]'>{props.day}</p>
            <Image src={medWeatherIcon} alt="Cloudy Med" />
            <p className='text-[20px]'>{CapitalFirstLetter(props.icon)}</p>
            <div className='text-[20px] flex'>
                <p>H: <span>{props.high}</span></p>
                <p className='ml-3'>L: <span>{props.low}</span></p>
            </div>
        </div>
    )
}

export default DaysComponent
