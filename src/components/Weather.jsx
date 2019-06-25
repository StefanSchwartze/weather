import React from 'react';

function Weather(props) {
  const desc = props.weather[0].main;
  const dt_txt = props.dt_txt;
  const temp = props.main.temp;
  return (
    <li className="day">
      <dl>
        <dd>{desc}</dd>
        <dd>{temp}</dd>
        <dd>{dt_txt}</dd>
      </dl>
    </li>
  );
}

export default Weather;
