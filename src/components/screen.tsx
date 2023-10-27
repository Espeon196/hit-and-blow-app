import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";

export default function Screen(
  { turn, complete, resetProblem }: { turn: number, complete: boolean, resetProblem: () => void }
) {
  return (
    <Card sx={{m: 3}}>
      <CardContent>
        <Typography variant="h3" color={complete ? "#f44336" : "#757de8"}>Turn: {turn}</Typography>
      </CardContent>
      <CardActions>
        <Button disabled={!complete} onClick={resetProblem}>Retry</Button>
      </CardActions>
    </Card>
  );
}