import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import WeatherCardMinimal from "./WeatherCardMinimal"

import "./WeatherContent.css";

class WeatherContent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {}

  render() {
    let weatherdata = this.props.weatherData;
    let currentWeatherdata = this.props.weatherData.current;
    let forecastWeatherdata = this.props.weatherData.forecast;
    let location = this.props.weatherData.location;
    console.log(forecastWeatherdata);
    return (
      <div>
        <div className="weather-today">
          <WeatherCard data={currentWeatherdata} dataLocation={location} />
        </div>
        <div className="weather-forecast">
          {forecastWeatherdata.forecastday.map((val) => {
            return <WeatherCardMinimal data={val} />
          })}
        </div>
      </div>
    );
  }
}
export default WeatherContent;
