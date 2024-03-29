'use client'
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import RemoveFav from "@/Assets/FavoriteRemove.png";
import { FetchGeoLocation, ReverseGeoSearch } from "@/app/utils/DataServices";
import { removeLocalStorage } from "@/app/utils/LocalStorage";
import CloudySmall from '@/Assets/CloudySmall.png'
import SunnySmall from '@/Assets/SunnySmall.png'
import FoggySmall from '@/Assets/FoggySmall.png'
import RainySmall from '@/Assets/RainySmall.png'
import SnowSmall from '@/Assets/SnowSmall.png'

const FavoriteComponent = (props: {
  name: string;
  setUserInput: (input: string) => void;
  removeFav: (name: string) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [temp, setTemp] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [max, setMax] = useState<string>("");
  const [min, setMin] = useState<string>("");
  const [smallWeatherIcon, setSmallWeatherIcon] = useState<StaticImageData>(SunnySmall);
  const [stateVar, setStateVar] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const data = await FetchGeoLocation(props.name);
      const reverseData = await ReverseGeoSearch(data.coord.lat, data.coord.lon);
      setName(data.name)
      setTemp(String(Math.round(Number(data.main.temp))))
      setDesc(data.weather[0].description)
      setMax(String(Math.ceil(data.main.temp_max)))
      setMin(String(Math.floor(data.main.temp_min)))
      WeatherIcon(String(data.weather[0].description));
      StateIntoAB(String(reverseData[0].state));
    }
    getData()
  }, [props.name])
  const CapitalFirstLetter = (input: string) => {
    if (!input) return '';
    let words = input.split(" ");
    let capWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let formattedInput = capWords.join(" ");
    return formattedInput;
  }
  const handleClick = () => {
    props.setUserInput(props.name);
  };

  const handleRemove = () => {
    props.removeFav(props.name)
  }

  function WeatherIcon(weatherCondition: string) {
    switch (weatherCondition) {
      case "rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "clear sky":
        setSmallWeatherIcon(SunnySmall);
        break;
      case "few clouds":
        setSmallWeatherIcon(CloudySmall);
        break;
      case "scattered clouds":
        setSmallWeatherIcon(CloudySmall);
        break;
      case "broken clouds":
        setSmallWeatherIcon(CloudySmall);
        break;
      case "shower rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "thunderstorm":
        setSmallWeatherIcon(RainySmall);
        break;
      case "snow":
        setSmallWeatherIcon(RainySmall);
        break;
      case "mist":
        setSmallWeatherIcon(SunnySmall);
        break;
      case "light rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "smoke":
        setSmallWeatherIcon(FoggySmall);
        break;
      case "haze":
        setSmallWeatherIcon(FoggySmall);
        break;
      case "sand/dusk whirls":
        setSmallWeatherIcon(FoggySmall);
        break;
      case "fog":
        setSmallWeatherIcon(FoggySmall);
        break;
      case "sand":
        setSmallWeatherIcon(FoggySmall);
        break;
      case "volcanic ash":
        setSmallWeatherIcon(FoggySmall);
        break;
      case "squalls":
        setSmallWeatherIcon(FoggySmall);
        break;
      case "tornado":
        setSmallWeatherIcon(FoggySmall);
        break;
      case "overcast clouds":
        setSmallWeatherIcon(CloudySmall);
        break;
      case "light snow":
        setSmallWeatherIcon(SnowSmall);

        break;
      case "heavy snow":
        setSmallWeatherIcon(SnowSmall);
        break;
      case "sleet":
        setSmallWeatherIcon(SnowSmall);
        break;
      case "light shower sleet":
        setSmallWeatherIcon(SnowSmall);
        break;
      case "shower sleet":
        setSmallWeatherIcon(SnowSmall);
        break;
      case "light rain and snow":
        setSmallWeatherIcon(SnowSmall);
        break;
      case "rain and snow":
        setSmallWeatherIcon(SnowSmall);
        break;
      case "light shower snow":
        setSmallWeatherIcon(SnowSmall);
        break;
      case "shower snow":
        setSmallWeatherIcon(SnowSmall);
        break;
      case "heavy shower snow":
        setSmallWeatherIcon(RainySmall);
        break;
      case "moderate rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "heavy intensity rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "very heavy rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "extreme rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "freezing rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "light intensity shower rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "shower rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "heavy intensity shower rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "ragged shower rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "light intensity drizzle":
        setSmallWeatherIcon(RainySmall);
        break;
      case "dizzle":
        setSmallWeatherIcon(RainySmall);
        break;
      case "heavy intensity drizzle":
        setSmallWeatherIcon(RainySmall);
        break;
      case "light intensity drizzle rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "drizzle rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "heavy intensity drizzle rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "shower rain and drizzle":
        setSmallWeatherIcon(RainySmall);
        break;
      case "heavy shower rain and drizzle":
        setSmallWeatherIcon(RainySmall);
        break;
      case "shower drizzle":
        setSmallWeatherIcon(RainySmall);
        break;
      case "thunderstorm with light rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "thunderstorm with rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "thunderstorm with heavy rain":
        setSmallWeatherIcon(RainySmall);
        break;
      case "light thunderstorm":
        setSmallWeatherIcon(RainySmall);
        break;
      case "heavy thunderstorm":
        setSmallWeatherIcon(RainySmall);
        break;
      case "ragged thunderstorm":
        setSmallWeatherIcon(RainySmall);
        break;
      case "thunderstorm with light drizzle":
        setSmallWeatherIcon(RainySmall);
        break;
      case "thunderstorm with drizzle":
        setSmallWeatherIcon(RainySmall);
        break;
      case "thunderstorm with heavy drizzle":
        setSmallWeatherIcon(RainySmall);
        break;
      default: setSmallWeatherIcon(SunnySmall);
    }
  }
  const StateIntoAB = (state: string) => {
    switch (state) {
      case "Alabama":
        setStateVar("AL");
        break;
      case "Alaska":
        setStateVar("AK");
        break;
      case "Arizona":
        setStateVar("AZ");
        break;
      case "Arkansas":
        setStateVar("AR");
        break;
      case "California":
        setStateVar("CA");
        break;
      case "Colorado":
        setStateVar("CO");
        break;
      case "Connecticut":
        setStateVar("CT");
        break;
      case "Delaware":
        setStateVar("DE");
        break;
      case "District of Columbia":
        setStateVar("DC");
        break;
      case "Florida":
        setStateVar("FL");
        break;
      case "Georgia":
        setStateVar("GA");
        break;
      case "Guam":
        setStateVar("GU");
        break;
      case "Hawaii":
        setStateVar("HI");
        break;
      case "Idaho":
        setStateVar("ID");
        break;
      case "Illinois":
        setStateVar("IL");
        break;
      case "Indiana":
        setStateVar("IN");
        break;
      case "Iowa":
        setStateVar("IA");
        break;
      case "Kansas":
        setStateVar("KS");
        break;
      case "Kentucky":
        setStateVar("KY");
        break;
      case "Louisiana":
        setStateVar("LA");
        break;
      case "Maine":
        setStateVar("ME");
        break;
      case "Maryland":
        setStateVar("MD");
        break;
      case "Massachusetts":
        setStateVar("MA");
        break;
      case "Michigan":
        setStateVar("MI");
        break;
      case "Minnesota":
        setStateVar("MN");
        break;
      case "Mississippi":
        setStateVar("MS");
        break;
      case "Missouri":
        setStateVar("MO");
        break;
      case "Montana":
        setStateVar("MT");
        break;
      case "Nebraska":
        setStateVar("NE");
        break;
      case "Nevada":
        setStateVar("NV");
        break;
      case "New Hampshire":
        setStateVar("NH");
        break;
      case "New Jersey":
        setStateVar("NJ");
        break;
      case "New Mexico":
        setStateVar("NM");
        break;
      case "New York":
        setStateVar("NY");
        break;
      case "North Carolina":
        setStateVar("NC");
        break;
      case "North Dakota":
        setStateVar("ND");
        break;
      case "Ohio":
        setStateVar("OH");
        break;
      case "Oklahoma":
        setStateVar("OK");
        break;
      case "Oregon":
        setStateVar("OR");
        break;
      case "Pennsylvania":
        setStateVar("PA");
        break;
      case "Puerto Rico":
        setStateVar("PR");
        break;
      case "Rhode Island":
        setStateVar("RI");
        break;
      case "South Carolina":
        setStateVar("SC");
        break;
      case "South Dakota":
        setStateVar("SD");
        break;
      case "Tennessee":
        setStateVar("TN");
        break;
      case "Texas":
        setStateVar("TX");
        break;
      case "Utah":
        setStateVar("UT");
        break;
      case "Vermont":
        setStateVar("VT");
        break;
      case "Virginia":
        setStateVar("VA");
        break;
      case "Virgin Islands":
        setStateVar("VI");
        break;
      case "Washington":
        setStateVar("WA");
        break;
      case "West Virginia":
        setStateVar("WV");
        break;
      case "Wisconsin":
        setStateVar("WI");
        break;
      case "Wyoming":
        setStateVar("WY");
        break;
      default: setStateVar("");
    }
  };
  return (
    <div className="bg-[#5193DE] py-[10px] pl-[15px] pr-[10px] text-white font-[Inter] mt-[20px] mb-5">
      <div onClick={handleClick} className="flex justify-between mb-[6px] items-center">
        <p className="text-[20px]">{`${name}, ${stateVar}`}</p>
        <div className="flex items-center">
          <p className="text-[20px] pr-2">{temp}°F</p>
          <Image src={RemoveFav} onClick={handleRemove} alt="Minus Fav" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image className="pr-2" src={smallWeatherIcon} alt="CloudySmall" />
          <p className="text-[12px]">{CapitalFirstLetter(desc)}</p>
        </div>
        <div className="flex items-center text-[12px]">
          <p className="pr-2">
            H: <span>{max}</span>
          </p>
          <p>
            L: <span>{min}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteComponent;
