import React from "react";
import "./Results.css";

interface ResultsProps {
  cityName?: string;
  description?: string;
  icon?: string;
  temperature?: number;
  feelsLike?: number;
  windSpeed?: number;
}

const Results = ({
  cityName,
  description,
  icon,
  temperature,
  feelsLike,
  windSpeed,
}: ResultsProps) => {
  if (!description && !temperature && !feelsLike && !windSpeed) return null;

  const iconPath = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <div className="results">
      <h2>
        {cityName} <img alt="weather icon" src={iconPath} />
      </h2>
      <div>Description: {description}</div>
      <div>Temperature: {temperature}</div>
      <div>Feels like: {feelsLike}</div>
      <div>Wind Speed: {windSpeed}</div>
    </div>
  );
};

export default Results;
