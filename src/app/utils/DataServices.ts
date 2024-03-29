// APIS
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=${searchInputs}&appid=${apiKey}
// https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}${units}
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

import { GeoLocation } from "@/Interfaces/Interface";
import { Day5Forecast } from "@/Interfaces/ForcastServices";
import { ReverseGeo } from "@/Interfaces/ReverseGeoLocationInterface";

export const FetchGeoLocation = async (searchInput: string) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${process.env.NEXT_PUBLIC_ANALYTICS_ID}&units=imperial`)
    const data: GeoLocation = await promise.json();
    return data;
}

export const FetchGeoLocationByLat = async (lat: string | number, lon: string | number) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_ANALYTICS_ID}&units=imperial`)
    const data: GeoLocation = await promise.json();
    return data;
}

export const Get5Day = async (lat: string, lon: string) => {
    const promise = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_ANALYTICS_ID}&units=imperial`);
    const data: Day5Forecast = await promise.json();
    return data;
}

export const FetchLocationName = async (lat: string | number, lon: string | number) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_ANALYTICS_ID}&units=imperial`)
    const data: GeoLocation = await promise.json();
    return data.name;
}

export const ReverseGeoSearch = async (lat: string | number, lon: string | number) => {
    const promise = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`)
    const data: ReverseGeo[] = await promise.json();
    return data;
}