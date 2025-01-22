
import WeatherInfo from "./WeatherInfo";
import SearchBox from "./SearchBox";
import { useState } from 'react';

export default function WeatherApp() {

    const [weather, setWeather] = useState(

        {
            city: 'Dehli',
            temp: 12.05,
            humidity: 50,
            temp_min: 12.05,
            temp_max: 12.05,
            speed: 1.54,
            pressure: 1013,
            feels_like: 11.02,
            weather: 'clear sky'
        })


        let updateInfo=(data)=>{

            setWeather(data)
        }


  return (
    <>
    <SearchBox updateInfo={updateInfo}  />
      
      <WeatherInfo Info={weather} />
    </>
  );
}