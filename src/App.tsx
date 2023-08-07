import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import Header from "./Header";
import Results from "./Results";
import { getWeatherForCity } from "./services";

type WeatherData = {
  description: string;
  icon: string;
  temperature: number;
  feelsLike: number;
  windSpeed: number;
} | null;

const App = () => {
  const [cityName, setCityName] = useState("Detroit");
  const [weatherData, setWeatherData] = useState<WeatherData>(null);
  useEffect(() => {
    const setDetroitWeather = async () => {
      setWeatherData(await getWeatherForCity(cityName));
    };
    setDetroitWeather();
  }, [cityName]);
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <main>
          <Form setCityName={setCityName} />
          <Results cityName={cityName} {...weatherData} />
        </main>
      </div>
    </>
  );
};

export default App;
