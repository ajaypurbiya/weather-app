import React, { useState, useEffect } from "react";
import axios from "axios";
import { base, key } from "../Services/ApiKey";
import Clock from 'react-live-clock';
import ReactAnimatedWeather from "react-animated-weather";
import ObjectModifier from "../Functions/ObjectModifier";
import DateBuilder from "../Functions/DateBuilder";
import ForeCast from "../Services/ForeCast";
import loader from '../Assets/Images/WeatherIcons.gif';

const Home = () => {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        const getPosition = (options) => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, options);
            })
        };

        const getWeather = async (latitude, longitude) => {
            let response = await axios.get(`${base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`);
            console.log(response.data);
            // setWeather(response.data);
            // Since we cant directly modify promise object
            let obj = {
                city : response.data.name,
                temperatureC : response.data.main.temp,
                temperatureF : Math.round(response.data.main.temp * 1.8 + 32),
                humidity : response.data.main.humidity,
                main : response.data.weather[0].main,
                country : response.data.sys.country,
            };

            obj = ObjectModifier(obj);
            setTimeout(() => {
                setWeather(obj);
            },3000)
            // setWeather(obj);
        }

        if (navigator.geolocation) {
            getPosition()
                .then((position) => {
                    // we got latitude and longitude here
                    // Now fetch weather condition according to lat and long using openweather api
                    console.log(position);
                    getWeather(position.coords.latitude, position.coords.longitude);
                })
                .catch((err) => {
                    alert(
                        "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
                    );
                })
        }
        else {
            alert("Geolocation is not available in your Browser");
        }
    }, [])

    const defaults = {
        color: "white",
        size: 112,
        animate: true,
    };

    return (
        <div>
            {
                weather.temperatureC ?
                    <div className="app-container">
                    {console.log(weather.temperatureC)}
                        <div className="city">
                            <div className="title">
                                <h2>{weather.city}</h2>
                                <h3>{weather.country}</h3>
                            </div>
                            <div className="mb-icon">
                                {" "}
                                <ReactAnimatedWeather
                                    icon={weather.icon}
                                    color={defaults.color}
                                    size={defaults.size}
                                    animate={defaults.animate}
                                />
                                <p>{weather.main}</p>
                            </div>
                            <div className="date-time">
                                <div className="dmy">
                                    <div id="txt"></div>
                                    <div className="current-time">
                                        <Clock format="HH:mm:ss" ticking={true} />
                                    </div>
                                    <div className="current-date">{DateBuilder(new Date())}</div>
                                </div>
                                <div className="temperature">
                                    <p>
                                        {weather.temperatureC}°<span>C</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ForeCast icon={weather.icon} weather={weather.main} />
                    </div>
                    :
                    <>
                        <img src={loader} style={{ width: "50%" }} alt="loader-image" />
                        <h3 style={{ color: "purple", fontSize: "22px", fontWeight: "600" }}>
                            Detecting your location
                        </h3>
                        <h3 style={{ color: "white", marginTop: "10px" }}>
                            Your current location wil be displayed on the App <br></br> & used
                            for calculating Real time weather.
                        </h3>
                    </>
            }
        </div>
    )
}

export default Home;