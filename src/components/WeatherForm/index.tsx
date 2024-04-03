import React, { useState } from "react";
import Button from "../Ui/button/button";
import Input from "../Ui/input/input";
import "./form.css";

const WeatherForm = ({ getWeatherData }: any) => {
  const [cityName, setCityName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cityName.trim() === "") {
      alert("Please select");
      setCityName("");
      return;
    }
    if (cityName.trim()) {
      getWeatherData(cityName.trim());
    }
  };

  const handleChange = (event: any) => {
    setCityName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={cityName}
        onChange={handleChange}
        placeholder="search city"
      />
      <Button type="submit">Get Weather</Button>
    </form>
  );
};

export default WeatherForm;
