import './weatherInfo.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import NightsStayIcon from '@mui/icons-material/NightsStay';

export default function WeatherInfo({Info}) {

    

   const INIT_URL='https://img.freepik.com/free-vector/template-weather-prognosis_23-2147551469.jpg?ga=GA1.1.1191673172.1732873580&semt=ais_incoming'
    
   const COlD_URL='https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'
   const HOT_URL='https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg='
   const RAIN_URL='https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ='

    return(
        <>
        
            
           

            <h3>Weather Information</h3>

            <div className="weather-info">
                
                

                <Card id="card"
                 sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="weather image"
                        height="140"
                        image={
                            Info.humidity > 70 ? RAIN_URL : Info.temp > 12 ?    HOT_URL:COlD_URL 

                        }

                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="span">
                            <p>{Info.city}</p>
                        

                        
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p> <b> Tempreture:</b> &nbsp; &nbsp;{Info.temp}&deg;C
                            {
                                Info.temp < 12 ? <AcUnitIcon style={{color:'black' , paddingLeft:'30px' }}  /> : <WbSunnyTwoToneIcon style={{ color: 'yellow',paddingLeft:'30px' }} /> 
                            }
                            
                             </p>

                            <p> <b>Humidity:</b>  &nbsp; &nbsp;{Info.humidity}%

                            {
                                Info.humidity >= 70 ? <ThunderstormIcon style={{color:'black' , paddingLeft:'30px', }}  />: <NightsStayIcon style={{ color: 'black',paddingLeft:'30px' }} />
                            }
                            
                             </p>
                            <p> <b>Min_Temp:</b> &nbsp; &nbsp;{Info.temp_min}&deg;C </p>
                            <p> <b>Max_Temp:</b>  &nbsp; &nbsp;{Info.temp_max}&deg;C </p>
                            <p> <b>Wind Speed:</b> &nbsp; &nbsp; {Info.speed} </p>
                            <p>  <b> Pressure:</b> &nbsp; &nbsp;{Info.pressure} hPa </p>
                            
                            <p> Weather can be described as <b> {Info.weather}</b> and feels like <b>{Info. feels_like}&deg;C </b>  </p>

         


                        </Typography>
                    </CardContent>
                            
                </Card>

            </div>
        </>
    )
}