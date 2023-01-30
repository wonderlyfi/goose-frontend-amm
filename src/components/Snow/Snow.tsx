import React from "react";
import Snowfall from "react-snowfall";
import "./Snow.css";
import logo from './logo.png'

const settings = {
    color: '#dee4fd',
    snowflakeCount: 200,
    radius: [12.0, 16.0],
    speed: [0.5, 2.0],
    wind: [-0.5, 2.0],
    rotationSpeed: [-0.5, 0.5],
    useImages: true,
}

const snowflake = document.createElement('img')
snowflake.src = logo

const Snow = () => {
    return (
      <Snowfall
        color={settings.color}
        snowflakeCount={settings.snowflakeCount}
        radius={[settings.radius[0],settings.radius[1]]}
        speed={[settings.speed[0],settings.speed[1]]}
        wind={[settings.wind[0],settings.wind[1]]}
        images={[snowflake]}
      />
    );
  };
  
  export default Snow;