import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IFeature } from "../types";

export default function WeatherTable(props: {
  data: {
    weatherData: IFeature | null;
    isLoading: boolean;
    error: Error | undefined;
  };
}) {
  const { data } = props;
  const { weatherData, isLoading, error } = data;

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!weatherData || weatherData === undefined || weatherData === null) {
    return <p>No data</p>;
  }
  if (weatherData.properties.timeseries.length < 3) {
    return <p>Not enough data. Expected at least 3 hours.</p>;
  }
  if (weatherData) {
    const timeseriesLastThree = weatherData.properties.timeseries.slice(-3);

    return (
      <TableContainer component={Paper} sx={{ minWidth: "100%", padding: "16px" }}>
        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Klokkeslett</TableCell>
              <TableCell align="right">Temperatur</TableCell>
              <TableCell align="right">Luftfuktighet</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timeseriesLastThree.map((row) => (
              <TableRow
                key={row.time.toString()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.time.toString()}
                </TableCell>
                <TableCell align="right">
                  {row.data.instant.details.air_temperature.toString() + " " + weatherData.properties.meta.units.air_temperature}
                </TableCell>
                <TableCell align="right">
                  {row.data.instant.details.relative_humidity.toString() + " " + weatherData.properties.meta.units.relative_humidity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
