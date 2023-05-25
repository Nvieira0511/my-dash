import React, { Component } from "react";
import WeatherContent from "./WeatherContent";

import "./Weather.css";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherdata: {},
      weatherLoaded: false,
    };
  }
  componentDidMount() {
    const weatherUrl = "https://api.weatherapi.com/v1/forecast.json";
    const apiKey = "?key=c06cabaa901d43e8826112705231505";
    const ingersolPostal = "&q=N5C";
    const forecastData = "&days=7";

    const weatherFetchIngersoll =
      weatherUrl + apiKey + ingersolPostal + forecastData;
    try {
      fetch(weatherFetchIngersoll).then((res) => {
        console.log("we are here");
        console.log(res);
        res.json().then((data) => {
          console.log(data);
          this.setState({ weatherdata: data, weatherLoaded: true });
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="weather-body">
        <h1 className="weather-header">Weather</h1>
        {this.state.weatherLoaded ? (
          <WeatherContent weatherData={this.state.weatherdata} />
        ) : (
          <div>LOADING </div>
        )}
      </div>
    );
  }
}
export default Weather;
