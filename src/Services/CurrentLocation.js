// import axios from "axios";
// import { base, key } from "./ApiKey";

// let weather;
// const getPosition = (options) => {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject, options);
//     })
// };

// const getWeather = async (latitude, longitude) => {
//     let response = await axios.get(`${base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${key}`);
//     console.log(response.data);
//     weather = response.data;
// }

// if (navigator.geolocation) {
//     getPosition()
//         .then((position) => {
//             // we got latitude and longitude here
//             // Now fetch weather condition according to lat and long using openweather api
//             console.log(position);
//             getWeather(position.coords.latitude, position.coords.longitude);
//         })
//         .catch((err) => {
//             alert(
//                 "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
//             );
//         })
// }
// else {
//     alert("Geolocation is not available in your Browser");
// }



/*

weather.id !== 'undefined' ?
                weather.weather[0].main === "Haze" ? setWeather({...weather, icon: "CLEAR_DAY"})
                :
                weather.weather[0].main === "Clouds" ? setWeather({...weather, icon: "CLOUDY"})
                :
                weather.weather[0].main === "Rain" ? setWeather({...weather, icon: "RAIN"})
                :
                weather.weather[0].main === "Snow" ? setWeather({...weather, icon: "SNOW"})
                :
                weather.weather[0].main === "Dust" ? setWeather({...weather, icon: "WIND"})
                :
                weather.weather[0].main === "Drizzle" ? setWeather({...weather, icon: "SLEET"})
                :
                weather.weather[0].main === "Fog" ? setWeather({...weather, icon: "FOG"})
                :
                weather.weather[0].main === "Smoke" ? setWeather({...weather, icon: "FOG" })
                :
                weather.weather[0].main === "Tornado" ? setWeather({...weather, icon: "WIND"})
                :
                setWeather({...weather, icon: "CLEAR_DAY"})
            :
            "d"


            let obj = {
                city: response.data.name,
                temperatureC: response.data.main.temp,
                temperatureF: response.data.main.temp * 1.8 + 32,
                humidity: response.data.main.humidity,
                main: response.data.weather[0].main,
                country: response.data.sys.country,
            };


            switch (obj.main) {
                case "Haze":
                    obj({ ...obj, icon: "CLEAR_DAY" });
                    break;
                case "Clouds":
                    obj({ ...obj, icon: "CLOUDY" });
                    break;
                case "Rain":
                    obj({ ...obj, icon: "RAIN" });
                    break;
                case "Snow":
                    obj({ ...obj, icon: "SNOW" });
                    break;
                case "Dust":
                    obj({ ...obj, icon: "WIND" });
                    break;
                case "Drizzle":
                    obj({ ...obj, icon: "SLEET" });
                    break;
                case "Fog":
                    obj({ ...obj, icon: "FOG" });
                    break;
                case "Smoke":
                    obj({ ...obj, icon: "FOG" });
                    break;
                case "Tornado":
                    obj({ ...obj, icon: "WIND" });
                    break;
                default:
                    obj({ ...obj, icon: "CLEAR_DAY" });
            }
*/