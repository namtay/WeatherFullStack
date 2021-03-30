import React,{useState} from 'react';
import axios from 'axios';


function Weather() {
    const [weather,setWeather]=useState("Not yet gotten");

    const handleClick=()=>{
        axios.get('http://localhost:5000/getWeatherghana')
        .then(response=>{
            setWeather(
                response.data.temperature
            )
        })
    }
    return (
        <div>
            <button onClick={handleClick}>Get Weather In Ghana</button>
            <h1>The weather in France is : {weather} </h1>
        </div>
    )
}

export default Weather
