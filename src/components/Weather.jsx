import React from 'react';
import WeatherIcon from './WeatherIcon';

function Weather(props) {
  const desc = props.weather[0].main;
  const dt_txt = props.dt_txt;
  const temp = props.main.temp;
  const icon = props.weather[0].icon;

  return (
    <li className="day">
      <WeatherIcon icon={icon} />
      <dl>
        <dd>{desc}</dd>
        <dd>{temp}</dd>
        <dd>{dt_txt}</dd>
      </dl>
    </li>
  );
}

export default Weather;
