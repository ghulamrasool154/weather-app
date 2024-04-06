import { axiosInstance } from "../utils/axios-instance";

export const handleGETWeatherDetail = async (city: string) => {
  const url = `data/2.5/weather?q=${city}&appid=${process.env.REACT_WEATHER_AP_ID}`;

  try {
    const resp = await axiosInstance.get(url);

    return { success: true, data: resp.data };
  } catch (error: any) {
    return { success: false, error: error.response.data };
  }
};
