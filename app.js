const apiKey = `2b54c203b6dadb96d4f8091574203651`; // Store as environmental variable?

const fetchJson = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getCoordinatesForCity = async (cityName, stateCode, countryCode) => {
  const query = `${cityName},${stateCode},${countryCode}`;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}`;
  const results = awaitfetchJson(url);

  if (!results.length) throw new Error("No loc/lat found for ${query}");
  const [{ lat, long }] = results;
  return { lat, long };
};

const getWeatherForCoordinates = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  const results = awaitfetchJson(url);

  if (!results.length)
    throw new Error(`No weather info found for ${lat}, ${lon}`);
  const {
    main: { temp, feels_like },
    wind: { speed },
  } = results;
  return { temperature: temp, feelsLike: feels_like, windSpeed: speed };
};

const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Result />
    </>
  );
};

export default App;
