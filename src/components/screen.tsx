import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { Answer } from "../types";

export default function Screen(
  { turn, complete, resetProblem, answer }: { turn: number, complete: boolean, resetProblem: () => void, answer: Answer }
) {
  const message = complete ? `YOU WIN!! Answer: ${answer.reduce((i, ret) => `${i} ${ret}`, "")}` : `GUESS THE NUMBER...`

  return (
    <Card sx={{m: 3}}>
      <CardContent>
        <Typography variant="h3" color={complete ? "#f44336" : "#757de8"}>Turn: {turn}</Typography>
        <Typography color={complete ? "#f44336" : "#757de8"}>{message}</Typography>
      </CardContent>
      <CardActions>
        <Button disabled={!complete} onClick={resetProblem}>Retry</Button>
      </CardActions>
    </Card>
  );
}