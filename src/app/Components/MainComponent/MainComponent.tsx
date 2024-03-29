"use client";
import React, { useEffect, useState } from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import FavoriteComponent from "../FavoritesComponent/FavoriteComponent";
import DaysComponent from "../5DaysComponent/DaysComponent";
import Image, { StaticImageData } from "next/image";
import UnFav from "@/Assets/WeatherUnFav.png";
import { Day5Forecast } from "@/Interfaces/ForcastServices";
import {
    FetchGeoLocation,
    FetchGeoLocationByLat,
    FetchLocationName,
    Get5Day,
} from "@/app/utils/DataServices";
import { GeoLocation } from "@/Interfaces/Interface";
import LargeRainy from "@/Assets/RainyLarge.png";
import LargeCloudy from "@/Assets/CloudyLarge.png";
import LargeSunny from "@/Assets/SunnyLarge.png";
import LargeFoggy from "@/Assets/FoggyLarge.png";
import LargeSnow from "@/Assets/SnowLarge.png";
import Fav from "@/Assets/WeatherFav.png";
import {
    getLocalStorage,
    removeLocalStorage,
    saveToLocalStorage,
} from "@/app/utils/LocalStorage";

const MainComponent = () => {
    const [userInput, setUserInput] = useState<string>("");
    const [dataGeoLocationByLat, setDataGeoLocationByLat] =
        useState<GeoLocation | null>(null);
    const [dataGeoLocation, setDataGeoLocation] = useState<GeoLocation | null>(
        null
    );
    const [currentTime, setCurrentTime] = useState<string>("");
    const [currentDate, setCurrentDate] = useState<string>("");
    const [currentToday, setCurrentToday] = useState<string>("");
    const [largeWeatherIcon, setLargeWeatherIcon] = useState<StaticImageData>(LargeSunny);
    const [geoLat, setGeoLat] = useState<string>("");
    const [geoLon, setGeoLon] = useState<string>("");
    const [day5Forcast, setDay5Forcast] = useState<Day5Forecast>();
    const [forcastData5, setForcastData5] = useState<Array<any>>([""]);
    const [localName, setLocalName] = useState<string>("");
    const [saveData, setSaveData] = useState<string[] | undefined>();
    const [geoFetched, setGeoFetched] = useState<boolean>(false);
    const [favIcon, setFavIcon] = useState<StaticImageData>(UnFav);
    const [toggleBool, setToggleBool] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const favorites = getLocalStorage();
                const isFavorite = favorites.some((fav: string) => fav === userInput);
                setFavIcon(isFavorite ? Fav : UnFav);
    
                const geoData = await FetchGeoLocation(userInput);
                setDataGeoLocationByLat(geoData);
    
                const locationByLat = await FetchGeoLocationByLat(
                    String(geoData.coord.lat),
                    String(geoData.coord.lon)
                );
                setDataGeoLocationByLat(locationByLat);
    
                const day5 = await Get5Day(
                    String(locationByLat.coord.lat),
                    String(locationByLat.coord.lon)
                );
                setDay5Forcast(day5);
    
                const forecastData = [];
                if (day5) {
                    for (let i = 0; i < day5.list.length; i += 8) {
                        let highestTemp = day5.list[i].main.temp_max;
                        let lowestTemp = day5.list[i].main.temp_min;
                        let weatherDesc = day5.list[i].weather[0].description;
                        for (let j = i + 1; j < i + 8; j++) {
                            const item = day5.list[j];
                            highestTemp = Math.max(highestTemp, item.main.temp_max);
                            lowestTemp = Math.min(lowestTemp, item.main.temp_min);
                        }
    
                        forecastData.push({
                            highestTemp: Math.round(highestTemp),
                            lowestTemp: Math.round(lowestTemp),
                            weatherIcon: weatherDesc,
                        });
                    }
                    setForcastData5(forecastData);
                }
    
                const currentTime = new Date();
                const hours = currentTime.getHours();
                const minutes = currentTime.getMinutes();
                const amOrPm = hours >= 12 ? "PM" : "AM";
                const formattedHours = hours % 12 || 12;
                const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
                setCurrentTime(`${formattedHours}:${formattedMinutes} ${amOrPm}`);
    
                const allMonths = [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December",
                ];
                const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const day = currentTime.getDate();
                const month = allMonths[currentTime.getMonth()];
                const year = currentTime.getFullYear();
                const todayDay = allDays[currentTime.getDay()];
                setCurrentToday(todayDay);
                setCurrentDate(`${month} ${day}, ${year}`);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
        if (typeof navigator !== "undefined") {
            navigator.geolocation.getCurrentPosition(success, errorFunc);
        } else {
            console.error("navigator is not available");
        }
    }, [userInput, favIcon, toggleBool]);
    

    async function success(position: GeolocationPosition) {
        const locoName = await FetchLocationName(
            position.coords.latitude,
            position.coords.longitude
        );
        setLocalName(locoName);
        if (!geoFetched) {
            setUserInput(locoName);
            setGeoFetched(true);
        }
    }

    function errorFunc(error: GeolocationPositionError) {
        console.log(error.message);
    }
    const handleSearch = async (location: string) => {
        setUserInput(location);
    };

    const CapitalFirstLetter = (input: string) => {
        if (!input) return "";
        let words = input.split(" ");
        let capWords = words.map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
        );
        let formattedInput = capWords.join(" ");
        return formattedInput;
    };

    function WeatherIcon(weatherCondition: string) {
        switch (weatherCondition) {
            case "rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "clear sky":
                setLargeWeatherIcon(LargeSunny);
                break;
            case "few clouds":
                setLargeWeatherIcon(LargeCloudy);
                break;
            case "scattered clouds":
                setLargeWeatherIcon(LargeCloudy);
                break;
            case "broken clouds":
                setLargeWeatherIcon(LargeCloudy);
                break;
            case "shower rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "thunderstorm":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "snow":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "mist":
                setLargeWeatherIcon(LargeSunny);
                break;
            case "light rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "smoke":
                setLargeWeatherIcon(LargeFoggy);
                break;
            case "haze":
                setLargeWeatherIcon(LargeFoggy);
                break;
            case "sand/dusk whirls":
                setLargeWeatherIcon(LargeFoggy);
                break;
            case "fog":
                setLargeWeatherIcon(LargeFoggy);
                break;
            case "sand":
                setLargeWeatherIcon(LargeFoggy);
                break;
            case "volcanic ash":
                setLargeWeatherIcon(LargeFoggy);
                break;
            case "squalls":
                setLargeWeatherIcon(LargeFoggy);
                break;
            case "tornado":
                setLargeWeatherIcon(LargeFoggy);
                break;
            case "overcast clouds":
                setLargeWeatherIcon(LargeFoggy);

                break;
            case "light snow":
                setLargeWeatherIcon(LargeSnow);

                break;
            case "heavy snow":
                setLargeWeatherIcon(LargeSnow);
                break;
            case "sleet":
                setLargeWeatherIcon(LargeSnow);
                break;
            case "light shower sleet":
                setLargeWeatherIcon(LargeSnow);
                break;
            case "shower sleet":
                setLargeWeatherIcon(LargeSnow);
                break;
            case "light rain and snow":
                setLargeWeatherIcon(LargeSnow);
                break;
            case "rain and snow":
                setLargeWeatherIcon(LargeSnow);
                break;
            case "light shower snow":
                setLargeWeatherIcon(LargeSnow);
                break;
            case "shower snow":
                setLargeWeatherIcon(LargeSnow);
                break;
            case "heavy shower snow":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "moderate rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "heavy intensity rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "very heavy rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "extreme rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "freezing rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "light intensity shower rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "shower rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "heavy intensity shower rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "ragged shower rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "light intensity drizzle":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "dizzle":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "heavy intensity drizzle":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "light intensity drizzle rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "drizzle rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "heavy intensity drizzle rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "shower rain and drizzle":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "heavy shower rain and drizzle":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "shower drizzle":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "thunderstorm with light rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "thunderstorm with rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "thunderstorm with heavy rain":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "light thunderstorm":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "heavy thunderstorm":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "ragged thunderstorm":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "thunderstorm with light drizzle":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "thunderstorm with drizzle":
                setLargeWeatherIcon(LargeRainy);
                break;
            case "thunderstorm with heavy drizzle":
                setLargeWeatherIcon(LargeRainy);
                break;
            default:
                setLargeWeatherIcon(LargeSunny);
        }
    }
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const getForecastDayIndex = (index: number) => {
        const currentDayIndex = new Date().getDay();
        return (currentDayIndex + index + 1) % 7;
    };
    const renderForecastDays = (): JSX.Element[] => {
        return forcastData5.map((forecast: any, index: number) => {
            const dayIndex = getForecastDayIndex(index);
            const dayName = daysOfWeek[dayIndex];
            return (
                <DaysComponent
                    key={index}
                    high={forecast.highestTemp}
                    low={forecast.lowestTemp}
                    icon={forecast.weatherIcon}
                    day={dayName}
                />
            );
        });
    };
    const handleFavorite = () => {
        const locationName = dataGeoLocationByLat?.name;
        if (locationName) {
            const favorites = getLocalStorage();
            const isAlreadyFavorite = favorites.some(
                (fav: string) => fav === locationName
            );
            if (isAlreadyFavorite) {
                setFavIcon(UnFav);
                removeLocalStorage(locationName);
            } else {
                setFavIcon(Fav);
                saveToLocalStorage(locationName);
            }
        }
    };

    const handleRemoveFavorite = (input: string) => {
        removeLocalStorage(input);
        setToggleBool(!toggleBool);
    };

    return (
        <div className="backgroundImage font-[Inter]">
            <div className="grid grid-cols-8 md:grid-cols-10">
                <div className="col-span-12 md:col-span-2 favoriteBg  order-2 md:order-1">
                    <div className="hidden md:block">
                        <SearchComponent setUserInput={handleSearch} />
                    </div>
                    <p className="font-[Inter] text-[24px] text-white ml-[17px] mt-[30px]">
                        Favorites
                    </p>
                    <div>
                        {saveData &&
                            saveData.map((favorite: string, index: number) => (
                                <FavoriteComponent
                                    key={index}
                                    name={favorite}
                                    setUserInput={setUserInput}
                                    removeFav={handleRemoveFavorite}
                                />
                            ))}{" "}
                    </div>
                </div>
                <div className="col-span-8 px-10 md:px-[100px] order-1 md:order-2">
                    <div className="block md:hidden">
                        <SearchComponent setUserInput={handleSearch} />
                    </div>
                    <div className="grid-flow-row pt-10 md:pt-[154px]">
                        <div className="grid grid-cols-11 gap-x-5">
                            <div className="flex flex-col items-center text-white col-span-12 md:col-span-4 order-2 md:order-1">
                                <Image
                                    src={largeWeatherIcon}
                                    alt="Sunny Large"
                                    className="pb-10 md:pb-[82px]"
                                />
                                <p className="text-[24px]">
                                    {dataGeoLocationByLat && dataGeoLocationByLat.weather && dataGeoLocationByLat.weather[0] && CapitalFirstLetter(String(dataGeoLocationByLat.weather[0].description))}
                                </p>

                            </div>

                            <div className="flex flex-col items-center text-white col-span-12 md:col-span-4 order-1 md:order-2 pb-10">
                                <div className="flex items-center">
                                    <p className="text-[50px] text-center">{dataGeoLocationByLat?.name}</p>
                                    <Image
                                        src={favIcon}
                                        onClick={handleFavorite}
                                        className="block md:hidden w-[27px] h-[27px] ml-5"
                                        alt="UnFav"
                                    />
                                </div>
                                <div className="text-[100px]">
                                    <p>
                                        {dataGeoLocationByLat?.main && typeof dataGeoLocationByLat.main.temp !== "undefined" ?
                                            `${Math.round(Number(dataGeoLocationByLat.main.temp))}°F` :
                                            "N/A"
                                        }
                                    </p>

                                </div>

                                <div className="flex flex-row text-[27px]">
                                    <p className="pr-3">
                                        H:{" "}
                                        <span>
                                            {dataGeoLocationByLat?.main && typeof dataGeoLocationByLat.main.temp_max !== "undefined" ?
                                                `${Math.round(Number(dataGeoLocationByLat.main.temp_max))}` :
                                                "N/A"
                                            }
                                        </span>
                                    </p>
                                    <p>
                                        L:{" "}
                                        <span>
                                            {dataGeoLocationByLat?.main && typeof dataGeoLocationByLat.main.temp_min !== "undefined" ?
                                                `${Math.round(Number(dataGeoLocationByLat.main.temp_min))}` :
                                                "N/A"
                                            }
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between flex-col items-center md:items-end text-center md:text-right text-white col-span-12 md:col-span-3 order-3 md:order-3">
                                <div className="">
                                    <Image
                                        src={favIcon}
                                        onClick={handleFavorite}
                                        className="cursor-pointer hidden md:block w-[27px] h-[27px] ml-5"
                                        alt="UnFav"
                                    />
                                </div>
                                <div className="text-[24px]">
                                    <p>{currentToday}</p>
                                    <p>{currentTime}</p>
                                    <p>{currentDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-[95px] mb-[41px] " />
                    <div className="grid-flow-row pb-5">
                        <div className="flex justify-between flex-col md:flex-row">
                            {renderForecastDays()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
