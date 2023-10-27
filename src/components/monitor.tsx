import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { UserQuery } from "../types";

function DisplayBox(
  { active, displayed }: {active: boolean, displayed: UserQuery[number]}
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

function AnswerButton({ canSubmit }: { canSubmit: boolean }) {
  return (
    <Button disabled={!canSubmit} variant="contained">
      <Typography variant="h6">Submit</Typography>
    </Button>
  );
}

export default function Monitor(
  { activeBlock, query, canSubmit }: { activeBlock: number, query: UserQuery, canSubmit: boolean }
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
      <Box sx={{ m: 3}}>
        <AnswerButton canSubmit={canSubmit} />
      </Box>
    </Stack>
  );
}