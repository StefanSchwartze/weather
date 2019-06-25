import React from 'react';
import WeatherIcon from './WeatherIcon';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expand: false, ...props };
  }

  render() {
    const desc = this.props.weather[0].main;
    const dt_txt = this.props.dt_txt;
    const temp = this.props.main.temp;
    const icon = this.props.weather[0].icon;
    const expand = this.props.expand;

    const descriptions = [desc, temp, dt_txt];

    return (
      <li className="day">
        <WeatherIcon icon={icon} />
        <dl>
          <dd>{desc}</dd>
          <dd>{temp}</dd>
          <dd>{dt_txt}</dd>
      {expand && <>
            <dd>{this.props.main.humidity}</dd>
            <dd>{this.props.main.pressure}</dd>
            <dd>{this.props.main.temp_min}</dd>
            <dd>{this.props.main.temp_max}</dd>
        </>
          }
        </dl>
      </li>
    );
  }
}

export default Weather;
