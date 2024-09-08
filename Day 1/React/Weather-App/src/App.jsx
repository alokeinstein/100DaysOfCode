import { useState } from "react";
import "./App.css";

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
