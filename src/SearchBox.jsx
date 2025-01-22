import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Alert1 from './Alert1'
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState('')

    const [error,setError] = useState(false)

    const API_KEY='9a92e066c98e37d4ea9a0c50c609a3f5'

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric   `

    let fetchWeather = async () => {
        try{

        
        let response = await fetch(url)
        let data = await response.json()
       
        let result = {
            city: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            speed: data.wind.speed,
            pressure: data.main.pressure,
            feels_like: data.main.feels_like,
            weather: data.weather[0].description
        }
        
        return result;
    } catch (error) {

        throw error
    }

    }

    let handleChange = (e) => {

       

        
        setCity(e.target.value)
    }

    let handleSubmit = async (e) => {
        try{
        e.preventDefault()
           
        // console.log(city)
        setCity('');

        let data= await fetchWeather()

        updateInfo(data);

    } catch(error){
        setError(true);
        
    }

    }

    


    return (
        <div className="search-box">
           
            

            <form action="" onSubmit={handleSubmit} > 

            <TextField id="city" label="City Name" variant="standard" value={city} onChange={handleChange}  required  /> &nbsp; &nbsp;
            <Button type='submit' onClick={fetchWeather}  id='btn' size='large' variant="contained">Search</Button>

            </form>
            {error && <Alert1/>}
            <br />

           
        </div>
    );
    }