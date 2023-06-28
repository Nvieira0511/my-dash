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
    try {
      fetch("/weather")
      .then((res) => res.json())
      .then((json) =>{
        this.setState({ weatherdata: json, weatherLoaded: true }, () =>{
          console.log("weatherdata now");
          console.log(this.state);
        });
      })
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
