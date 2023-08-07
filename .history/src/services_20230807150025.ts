const apiKey = `2b54c203b6dadb96d4f8091574203651`; // Store as environmental variable?

const fetchJson = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const getCoordinatesForCity = async (cityName) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
  const results = await fetchJson(url);

  if (!results.length) throw new Error(`No loc/lat found for ${cityName}`);

  const [{ lat, lon }] = results;
  return { lat, lon };
};

const getWeatherForCoordinates = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const results = await fetchJson(url);

  if (!results) throw new Error(`No weather info found for ${lat}, ${lon}`);

  const {
    main: { temp, feels_like },
    wind: { speed },
    weather: [firstWeather],
  } = results;
  return {
    description: firstWeather?.description,
    icon: firstWeather?.icon,
    temperature: temp,
    feelsLike: feels_like,
    windSpeed: speed,
  };
};

export const getWeatherForCity = async (cityName) => {
  const { lat, lon } = await getCoordinatesForCity(cityName);
  return await getWeatherForCoordinates(lat, lon);
};
