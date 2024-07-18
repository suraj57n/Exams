import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";

const Lab6=()=>{
    const [weather,setWeather]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    const city='Hyderabad';
    const apikey="acb360364796b3079b805fac3507b273";
    useEffect(()=>{
        const fetchWeather=async()=>{
            try{
                const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
                setWeather(response.data);
                setLoading(false);
            }
            catch(err){
                setError(err);
                setLoading(false);
            }
        };
        fetchWeather();
    },[]);
    if(loading)
        return <p>Weather Loading...........</p>;
    if(error)
        return <p>Failed {error.message}</p>;
    return (
        <div>
            <h2>Weather in {weather.name}</h2>
            <p>Temperate:{weather.main.temp}</p>
            <p>condition:{weather.weather[0].description}</p>
    </div>
    );
};
export default Lab6;