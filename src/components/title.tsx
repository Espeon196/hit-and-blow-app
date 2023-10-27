import { AppBar, Box, Typography } from "@mui/material";
import React from "react";

export default function Title() {
  return (
    <Box sx={{ flexGrow: 1, height: 50}}>
      <AppBar position="static">
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginLeft: 5 }}>
          Hit & Blow
        </Typography>
      </AppBar>
    </Box>
  );
}
