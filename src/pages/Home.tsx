import { Grid } from "@mui/material";
import WeatherTable from "../components/weatherTable";
import { getWeatherDataOslo } from "../weather/fetchWeatherDataOslo";
import Banner from "../components/Banner";


export default function Home() {


  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{ minHeight: "100%", minWidth: "100%" }}
    >
      <Banner />
      {
        <WeatherTable data={getWeatherDataOslo()} />
      }
      
    </Grid>
  );
}