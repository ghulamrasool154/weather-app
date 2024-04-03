import { useState } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherCard from "../components/WeatherCard";
import "./home.css";
import { handleGETWeatherDetail } from "../api/api-endpoint";
import Spinner from "../components/Spinner/spinner";
const HomePage = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isErrorMessage, setIsErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWeatherData = async (city: string) => {
    setWeatherData(null);
    setIsLoading(true);
    const data = await handleGETWeatherDetail(city);

    if (!data.success) {
      setIsError(true);
      setIsErrorMessage(data.error.message);
      setIsLoading(false);
      return;
    }
    setIsError(false);
    setWeatherData(data.data);
    setIsLoading(false);
  };
  return (
    <div className="wrapper">
      <h2 className="app-title">Weather Forecast</h2>
      <WeatherForm getWeatherData={getWeatherData} />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p className="error-message">{isErrorMessage}</p>
      ) : (
        weatherData && <WeatherCard data={weatherData} />
      )}
    </div>
  );
};

export default HomePage;
