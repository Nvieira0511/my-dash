import React, { Component } from "react";

import "./WeatherCard.css";

class WeatherCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.group("currentdata");
    console.log(this.props);
    console.groupEnd();

    let location = this.props.dataLocation;
    let data = this.props.data;

    let country = location.country;
    let city = location.name;
    let time = location.localtime;
    let lon = location.lon;
    let lat = location.lat;

    let condition = data.condition.text;
    let icon = data.condition.icon;

    let feelsLike = data.feelslike_c + " °";
    let humidity = data.humidity + " °";
    let lastUpdated = data.last_updated;
    let precip = data.precip_mm + "%";
    let temp = data.temp_c + " °";
    let wind = data.wind_kph + " kph";

    return (
      <div className="today-body">
        <div className="today-content">
          <div className="content-header">
            <h3>
              {city} - {country}
            </h3>
            <p>{time}</p>
          </div>
          <div className="content-main">
            <img className="main-weather-icon" src={icon} alt="weather-icon" />
            <p>{temp}</p>
            <p>feels like {feelsLike}</p>
            <p>{condition}</p>
          </div>
          <div className="content-footer">
            <p>precip {precip}</p>
            <p>wind {wind}</p>
            <p>humidity {humidity}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
