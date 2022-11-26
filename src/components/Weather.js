import React, { useState }from 'react'
import axios from 'axios'
import "./Weather.css"


const Weather = () => {

  const [weatherData, setWeatherData] = useState({ready: false});

const handleResponse = (res) => {
    console.log(res.data)
    setWeatherData({
      ready: true,
      temperature: res.data.main.temp,
      humidity: res.data.main.temp,
      date: "Wednesday 07:00",
      description: res.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: res.data.wind.speed,
      city: res.data.name,
      

      // precipitation: res.data.main.
    })
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city ..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className='text-capitalize'>{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="temperature-section">
              <img src={weatherData.iconUrl} alt={weatherData.description} />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {

     const apiKey = "6fc8ce6b2ba7060eef7f6f255898843a";
     let city = "London";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handleResponse);

     return "loading ..."
  }


}

export default Weather
