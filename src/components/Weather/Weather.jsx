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
      fetch("/weather").then((res) => {
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
        {
          this.state.weatherLoaded ? <WeatherContent weatherData={this.state.weatherdata} /> : <div>LOADING </div>
        }
      </div>
    );
  }
}
export default Weather;
