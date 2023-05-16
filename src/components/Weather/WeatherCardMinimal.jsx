import React, { Component, PureComponent, useSyncExternalStore } from "react";
import "./WeatherCardMinimal.css";

class WeatherCardMinimal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data.day;
    let day = this.props.data.date;
    let maxTemp = "^" + data.maxtemp_c + "°";
    let avgTemp = data.avgtemp_c + "°";
    let avgHumidity = "~" + data.avghumidity;
    let icon = data.condition.icon;
    let precip = data.totalprecip_mm;

    return (
      <div className="weather-card-min">
        <img className="min-weather-icon" src={icon} alt="weather-icon" />
        <div className="weather-card-footer">
          <div className="weather-card-temps">
            {avgTemp} {maxTemp} {avgHumidity}
          </div>
          <div className="weather-date">{day}</div>
        </div>
      </div>
    );
  }
}
export default WeatherCardMinimal;
