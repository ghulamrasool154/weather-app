import "./card.css";
import TableRow from "./row/row";

const WeatherCard: any = ({ data }: any) => {
  const { main, weather, wind, name } = data;

  const kelvinToCelsius = (temp: number) => {
    return temp - 273.15;
  };

  return (
    <div className="weather-card">
      <table>
        <tbody>
          <TableRow name="City Name" value={name} />
          <TableRow
            name="Temperature"
            value={`${kelvinToCelsius(main.temp).toFixed(2)}°C`}
          />

          <TableRow name="Humidity" value={`${main.humidity}%`} />
          <TableRow name="Wind Speed" value={`${wind.speed} m/s`} />
          <TableRow name="Condition" value={`${weather[0].description}`} />
        </tbody>
      </table>
    </div>
  );
};

export default WeatherCard;
