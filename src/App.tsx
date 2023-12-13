import { CssBaseline, Grid } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Grid
      className="App"
      sx={{ bgcolor: "#F5F5F6", overflow: "auto", minHeight: "100vh" }}
    >
      <CssBaseline />
      <Home />
    </Grid>
  );
}

export default App;