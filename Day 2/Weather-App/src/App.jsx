import { useState } from "react"; // Importing useState to manage component state
import "./App.css"; // Importing the CSS file for styling

const App = () => {
  // Initializing state variables
  const [data, setData] = useState(null); // Stores weather data after fetching from API
  const [cityName, setCityName] = useState(""); // Stores the input value (city name)
  const [suggestions, setSuggestions] = useState([]); // Stores city suggestions for autocomplete

  // OpenWeatherMap API key
  const apiKey = "2aa55adb1b6deafbbee7db7cf96e6375";
  
  // OpenCageData API key for autocomplete
  const autoCompleteApi = "becf6e2d3f034b608ef4a5d51f677b07";

  // Fetches weather data from OpenWeatherMap API based on city name
  const fetchWeatherData = async (query) => {
    try {
      // Fetch data from the weather API
      const fetchedData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`
      );
      const jsonData = await fetchedData.json();
      setData(jsonData); // Set the fetched weather data into state
    } catch (error) {
      console.error("Error in fetching data: ", error); // Log errors if fetching fails
    }
  };

  // Fetches city suggestions for autocomplete from OpenCageData API
  const fetchAutoComplete = async (query) => {
    try {
      // Fetch data from the autocomplete API
      const fetchedData = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${query}&limit=5&key=${autoCompleteApi}`
      );
      const jsonData = await fetchedData.json();
      setSuggestions(jsonData.results); // Set suggestions into state
    } catch (error) {
      console.error("Error in fetching data: ", error); // Log errors if fetching fails
    }
  };

  // Handles input change for the city name search field
  const handleChange = (e) => {
    let location = e.target.value;
    setCityName(location); // Update cityName state with the input value

    // Fetch city suggestions if input length is greater than 2
    if (location.length > 2) {
      fetchAutoComplete(location);
    } else {
      setSuggestions([]); // Clear suggestions if input length is less than 3
    }
  };

  // Handles the selection of a suggestion from the autocomplete dropdown
  const handleSuggestion = (suggestion) => {
    setCityName(suggestion); // Set selected suggestion as the city name
    setSuggestions([]); // Clear suggestions once a city is selected
    fetchWeatherData(suggestion); // Fetch weather data for the selected city
  };

  // Converts temperature from Kelvin to Celsius
  const tempInCelsius = (temp) => Math.floor(temp - 273.15);

  return (
    <main>
      <h1 className="title">Weather App</h1>
      <div className="weather-container">
        <div className="search">
          <input
            type="text"
            onChange={handleChange} // Attach input change handler
            value={cityName} // Bind cityName state to the input field
            placeholder="Search for a city..." // Placeholder text for the search field
          />
          <button onClick={() => fetchWeatherData(cityName)}>Search</button> 
          {/* Button to trigger weather data fetch based on the city name */}

          {/* Autosuggestion Dropdown */}
          <div className="autoComplete">
            {suggestions.length > 0 && (
              <ul className="dropdown">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    onClick={() => handleSuggestion(suggestion.formatted)}
                  >
                    {suggestion.formatted} {/* Display suggestion text */}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Display weather data if available */}
        {data && (
          <>
            <div className="top-section">
              <div className="condition">
                <p>{data.weather[0].description}</p> {/* Weather condition description */}
                <img
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt={data.weather[0].description} // Weather condition icon
                />
              </div>
              <div className="temp">
                <h1>{tempInCelsius(data.main.temp)}&deg;C</h1> {/* Current temperature */}
                <div className="hilo">
                  <p className="low">
                    <span>Hi: </span>
                    {tempInCelsius(data.main.temp_max)}&deg;C {/* Max temperature */}
                  </p>
                  <p className="high">
                    <span>Lo: </span>
                    {tempInCelsius(data.main.temp_min)}&deg;C {/* Min temperature */}
                  </p>
                </div>
              </div>
            </div>

            <div className="bottom-section">
              <div className="extra-info">
                <div className="info">
                  <p className="param-name">Sun Rise</p>
                  <time className="big">
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()} {/* Sunrise time */}
                  </time>
                </div>
                <div className="info">
                  <p className="param-name">Sun Set</p>
                  <time className="big">
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString()} {/* Sunset time */}
                  </time>
                </div>
                <div className="info">
                  <p className="param-name">Wind Speed</p>
                  <p className="big">{data.wind.speed} m/s</p> {/* Wind speed */}
                </div>
                <div className="info">
                  <p className="param-name">Humidity</p>
                  <p className="big">{data.main.humidity}%</p> {/* Humidity */}
                </div>
                <div className="info">
                  <p className="param-name">Pressure</p>
                  <p className="big">{data.main.pressure} hPa</p> {/* Pressure */}
                </div>
                <div className="info">
                  <p className="param-name">Visibility</p>
                  <p className="big">{(data.visibility / 1000).toFixed(2)} Km</p> {/* Visibility */}
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
