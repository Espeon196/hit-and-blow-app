import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

function DisplayBox(
  { active, displayed }: {active: boolean, displayed: number | null}
) {
  return (
    <Paper
      component="div" 
      sx={{ 
        backgroundColor: active ? "#f44336" : "#757de8",
        width: 100,
        height: 160,
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
      }}>
      <Typography variant="h2">{displayed}</Typography>
    </Paper>
  );
}

export default function Monitor(
  { activeBlock, query }: { activeBlock: number, query: (number | null)[] }
) {
  return (
    <Stack direction="row" sx={{
      alignItems: "center",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center"
    }}>
      {query.map((displayed, i) => (
        <DisplayBox active={i === activeBlock} displayed={displayed} />
      ))}
    </Stack>
  );
}