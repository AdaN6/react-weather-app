import React, { useState }from 'react'
import axios from 'axios'
import "./Weather.css"
import WeatherInfo from './WeatherInfo'


const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity)

const handleResponse = (res) => {
    console.log(res.data)
    setWeatherData({
      ready: true,
      temperature: res.data.main.temp,
      humidity: res.data.main.temp,
      date: new Date(res.data.dt * 1000),
      description: res.data.weather[0].description,
      icon: res.data.weather[0].icon,
      wind: res.data.wind.speed,
      city: res.data.name,
      // precipitation: res.data.main.
    });
  }

  const search = () => {
    const apiKey = "6fc8ce6b2ba7060eef7f6f255898843a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

 const handleSubmit = (e) => {
  e.preventDefault()
  search();
 }

 const handleCityChange = (e) => {
 setCity(e.target.value)
 }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city ..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
       
      </div>
    );
  } else {
    search();
    return "loading ..."
  }


}

export default Weather
