// APIS
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=${searchInputs}&appid=${apiKey}
// https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}${units}
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

import { apikey } from "../Components/Enviroment";

export const FetchGeoLocation = async (searchInput: string) => {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apikey}&units=imperial`)
    const data: Geolocation = await promise.json();
    return data;
}

export const FetchGeoLocationByLat = async (lat: string, lon: string) =>{
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`)
    const data: Geolocation = await promise.json();
    return data;
}

// export const GetHeighnLow = async (lat: string, lon: string) =>{
//     const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`)
//     const data: Geolocation = await promise.json();
    
//     const forecastData = [];

//     const highestTemp = data.main.temp_max;
//     const lowestTemp = data.main.temp_min;

//     forecastData.push({
//         highestTemp: Math.round(highestTemp),
//         lowestTemp: Math.round(lowestTemp),
//     });

//     return forecastData;
// }