import { useEffect, useState } from "react";
import { IFeature } from "../types";

export async function fetchWeatherDataOslo() {
  const url =
    "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58";
  const userAgent =
    "OsloWeatherApp/0.1 https://github.com/TonnesAndenas/met-oppgave";

  const response = await fetch(url, {
    headers: {
      "User-Agent": userAgent,
    },
  });

  if (!response.ok) {
    throw new Error("Response: " + response.status + ". Could not fetch data!");
  }
  return response.json();
}

export const getWeatherDataOslo = () => {
  const [weatherData, setWeatherData] = useState<IFeature | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);
    fetchWeatherDataOslo()
      .then((data) => {
        setWeatherData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { weatherData, isLoading, error };
};

