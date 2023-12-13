import { Grid, Paper, Typography } from "@mui/material";

export default function Banner() {
  return (
    <Grid item minWidth="100%">
      <Paper
        square={true}
        elevation={4}
        sx={{
          marginBottom: "16px",
          minHeight: "96px",
          minWidth: "100%",
          bgcolor: "rgba(11, 69, 94, 0.9)",
          display: "grid",
        }}
      >
        <Typography variant="h3" sx={{ alignSelf: "center" }}>
          TEMPERATURER I OSLO
        </Typography>
      </Paper>
    </Grid>
  );
}