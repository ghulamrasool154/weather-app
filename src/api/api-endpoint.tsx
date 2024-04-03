import { axiosInstance } from "../utils/axios-instance";

const appid = "1d3b4e1f32a3aada03e12eced95acd08";

export const handleGETWeatherDetail = async (city: string) => {
  const url = `data/2.5/weather?q=${city}&appid=${appid}`;

  try {
    const resp = await axiosInstance.get(url);

    return { success: true, data: resp.data };
  } catch (error: any) {
    return { success: false, error: error.response.data };
  }
};
