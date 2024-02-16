import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { base, key } from './ApiKey';
import ReactAnimatedWeather from 'react-animated-weather';
import searchIcon from '../Assets/Images/search-icon-white.png'
import faviconChange from '../Functions/FaviconChange';

const ForeCast = (props) => {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [weather, setWeather] = useState({});

    const searchWeather = async (cityname) => {
        try {
            let response = await axios.get(`${base}weather?q=${cityname != "[object Object]" ? cityname : city}&units=metric&APPID=${key}`);
            console.log(response.data);
            setWeather(response.data);
            setCity("");

            // To dynamically change favicon
            faviconChange(response.data);
        }
        catch (err) {
            console.log(err);
            setWeather("");
            setCity("");
            setError({ message: 'Not Found', city: city });
            console.log(error);
        }
    }

    // By default show the weather of Bhopal
    useEffect(() => {
        searchWeather('Bhopal');
    }, [])

    const defaultIcon = {
        color: 'white',
        size: 112,
        animate: true
    }

    return (
        <div className='forecast'>
            <div className='forecast-icon'>
                <ReactAnimatedWeather
                    icon={props.icon}
                    // icon = 'CLEAR_DAY'
                    color={defaultIcon.color}
                    size={defaultIcon.size}
                    animate={defaultIcon.animate}
                />
            </div>
            <div className='today-weather'>
                <h3>{props.weather}</h3>
                {/* <h3>Rain</h3> */}
                <div className='search-box'>
                    <input
                        type='text'
                        className='search-bar'
                        placeholder='Search any city'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                    <div className='image-box'>
                        <img
                            src={searchIcon}
                            onClick={searchWeather}
                            alt='search-icon'
                        />
                    </div>
                </div>

                <ul>
                    {
                        typeof weather.main !== 'undefined' ?
                            (
                                <div>
                                    <li className='city-head' key='1'>
                                        <p>
                                            {weather.name}, {weather.sys.country}
                                        </p>
                                        <img
                                            className='temp'
                                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                            alt='searched-weathor-icon'
                                        />
                                    </li>
                                    <li key='2'>
                                        Temperature{" "}
                                        <span className='temp'>
                                            {weather.main.temp}°c ({weather.weather[0].main})
                                        </span>
                                    </li>
                                    <li key='3'>
                                        Humidity{" "}
                                        <span className='temp'>
                                            {weather.main.humidity}%
                                        </span>
                                    </li>
                                    <li key='4'>
                                        Visibility{" "}
                                        <span className='temp'>
                                            {weather.visibility} meter
                                        </span>
                                    </li>
                                    <li key='5'>
                                        Wind Speed{" "}
                                        <span className='temp'>
                                            {weather.wind.speed} Km/h
                                        </span>
                                    </li>
                                </div>
                            )
                            :
                            (
                                <li key='6'>
                                    {error.city} {error.message}
                                </li>
                            )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ForeCast