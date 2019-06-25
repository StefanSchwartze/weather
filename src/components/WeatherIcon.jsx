import React from 'react';

function WeatherIcon(props) {
  const iconPath = '/icons/' + props.icon + '.svg';
  return <img src={iconPath} alt={props.icon} />;
}

export default WeatherIcon;
