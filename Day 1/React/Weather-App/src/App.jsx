/* import { useState } from "react";
import "./App.css";
import './style.css'

const App = () => {
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const apiKey = "2aa55adb1b6deafbbee7db7cf96e6375";
  const autoCompleteApi = "becf6e2d3f034b608ef4a5d51f677b07";

  //fetching the weather data
  const fetchWeatherData = async (query) => {
    try {
      let fetchedData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
      );
      let jsonData = await fetchedData.json();
      setData(jsonData);
      console.log(jsonData.weather[0].id);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };

  //fetching the names of the places to auto complete
  const fetchAutoComplete = async (query) => {
    try {
      const fetchedData = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${query}&limit=5&key=${autoCompleteApi}`
      );
      const jsonData = await fetchedData.json();
      setSuggestions(jsonData.results);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };

  const handleChange = (e) => {
    let location = e.target.value;
    setCityName(location);

    if (location.length > 2) {
      fetchAutoComplete(location);
    } else {
      setSuggestions([]);
    }
  };

  //handle suggestion selection
  const handleSuggestion = (suggestion) => {
    setCityName(suggestion);
    setSuggestions([]);
    console.log(suggestion);
    fetchWeatherData(suggestion);
  };

  const getkmph = (speed) => {
    const kmph = (speed * 3600) / 1000;
    return `${kmph.toFixed(2)}km/h`;
  };

  const tempInCelcius = (temp) => Math.floor((temp - 273.15) * 100) / 100;

  return (
    <div className="main">
      <div className="search">
        <input
          type="text"
          onChange={handleChange}
          value={cityName}
          placeholder="Search for a city..."
        />
        <button onClick={() => fetchWeatherData(cityName)}>
          fetch weather data
        </button>
        <div className="autoComplete">
        {suggestions.length > 0 && (
          <ul className="dropdown">
            {suggestions.map((suggestion, index) => (
              <li
              className="list-item"
                key={index}
                onClick={() => handleSuggestion(suggestion.formatted)}
              >
                {suggestion.formatted}
              </li>
            ))}
          </ul>
        )}
        </div>
      </div>

      {data && (
        <div className="card">
          <div className="header">
            <h2>{data.name}</h2>
            <p>longitude : {data.coord.lon}</p>
            <p>latitude : {data.coord.lat}</p>
          </div>
          <div className="body">
            <h1 className="temp">Temp: {tempInCelcius(data.main.temp)}^C</h1>
            <p>Feels like: {tempInCelcius(data.main.feels_like)}^C</p>
          </div>
          <div className="footer">
            <p>wind speed : {getkmph(data.wind.speed)}</p>
            <p>precipitation</p>
            <p>something else</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
 */

import { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const apiKey = "2aa55adb1b6deafbbee7db7cf96e6375";
  const autoCompleteApi = "becf6e2d3f034b608ef4a5d51f677b07";

  // Fetching the weather data
  const fetchWeatherData = async (query) => {
    try {
      const fetchedData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
      );
      const jsonData = await fetchedData.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };

  // Fetching city suggestions
  const fetchAutoComplete = async (query) => {
    try {
      const fetchedData = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${query}&limit=5&key=${autoCompleteApi}`
      );
      const jsonData = await fetchedData.json();
      setSuggestions(jsonData.results);
    } catch (error) {
      console.error("Error in fetching data: ", error);
    }
  };

  const handleChange = (e) => {
    let location = e.target.value;
    setCityName(location);

    if (location.length > 2) {
      fetchAutoComplete(location);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestion = (suggestion) => {
    setCityName(suggestion);
    setSuggestions([]);
    fetchWeatherData(suggestion);
  };

  const tempInCelsius = (temp) => Math.floor(temp - 273.15);

  return (
    <main>
      <h1 className="title">Weather App</h1>
      <div className="weather-container">
        <div className="search">
          <input
            type="text"
            onChange={handleChange}
            value={cityName}
            placeholder="Search for a city..."
          />
          <button onClick={() => fetchWeatherData(cityName)}>Search</button>

          {/* Autosuggestion Dropdown */}
          <div className="autoComplete">
            {suggestions.length > 0 && (
              <ul className="dropdown">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestion(suggestion.formatted)}
                  >
                    {suggestion.formatted}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {data && (
          <>
            <div className="top-section">
              <div className="condition">
                <p>{data.weather[0].description}</p>
                <img
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt={data.weather[0].description}
                />
              </div>
              <div className="temp">
                <h1>{tempInCelsius(data.main.temp)}&deg;C</h1>
                <div className="hilo">
                  <p className="low">
                    <span>Hi: </span>
                    {tempInCelsius(data.main.temp_max)}&deg;C
                  </p>
                  <p className="high">
                    <span>Lo: </span>
                    {tempInCelsius(data.main.temp_min)}&deg;C
                  </p>
                </div>
              </div>
            </div>

            <div className="bottom-section">
              <div className="extra-info">
                <div className="info">
                  <p className="param-name">Sun Rise</p>
                  <time className="big">
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                  </time>
                </div>
                <div className="info">
                  <p className="param-name">Sun Set</p>
                  <time className="big">
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                  </time>
                </div>
                <div className="info">
                  <p className="param-name">Wind Speed</p>
                  <p className="big">{data.wind.speed} m/s</p>
                </div>
                <div className="info">
                  <p className="param-name">Humidity</p>
                  <p className="big">{data.main.humidity}%</p>
                </div>
                <div className="info">
                  <p className="param-name">Pressure</p>
                  <p className="big">{data.main.pressure} hPa</p>
                </div>
                <div className="info">
                  <p className="param-name">Visibility</p>
                  <p className="big">{(data.visibility/1000).toFixed(2) }Km</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default App;
