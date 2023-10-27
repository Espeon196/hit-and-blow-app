import { Box, Button, Stack } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ArrowForwardIos } from "@mui/icons-material";
import { UserQuery } from "../types";

function KeyboardButton(
  { value, onClick }: {value: React.ReactNode, onClick: () => void}
) {
  return (
    <Button onClick={onClick} variant="outlined" sx={{ height: 80, width: 80}}>
      {value}
    </Button>
  );
}

export default function Keyboard(
  {
    activeBlock, setActiveBlock, setQuery
  }: {
    activeBlock: number;
    setActiveBlock: (fn: (i: number) => number) => void;
    setQuery: (fn: (query: UserQuery) => UserQuery) => void;
  }
) {
  const ChangeQuery = (i: number) => {
    setQuery((query) => query.map((num, idx) => idx === activeBlock ? i : num));
    setActiveBlock((i) => Math.min(3, i+1));
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 5}}>
      <Stack direction="column" spacing={0}>
        <Stack direction="row" spacing={0}>
          <KeyboardButton
            value={<ArrowBackIosNewIcon />}
            onClick={() => {setActiveBlock((i) => Math.max(0, i-1))}}
          />
          <KeyboardButton 
            value={<ArrowForwardIos />}
            onClick={() => {setActiveBlock((i) => Math.min(3, i+1))}}
          />
          <KeyboardButton 
            value="C"
            onClick={() => {
              setQuery(() => [null, null, null, null]);
              setActiveBlock(() => 0);
            }}
          />
        </Stack>
        <Stack direction="row" spacing={0}>
          <KeyboardButton value="1" onClick={() => ChangeQuery(1)}/>
          <KeyboardButton value="2" onClick={() => ChangeQuery(2)}/>
          <KeyboardButton value="3" onClick={() => ChangeQuery(3)}/>
        </Stack>
        <Stack direction="row" spacing={0}>
          <KeyboardButton value="4" onClick={() => ChangeQuery(4)}/>
          <KeyboardButton value="5" onClick={() => ChangeQuery(5)}/>
          <KeyboardButton value="6" onClick={() => ChangeQuery(6)}/>
        </Stack>
        <Stack direction="row" spacing={0}>
          <KeyboardButton value="7" onClick={() => ChangeQuery(7)}/>
          <KeyboardButton value="8" onClick={() => ChangeQuery(8)}/>
          <KeyboardButton value="9" onClick={() => ChangeQuery(9)}/>
        </Stack>
        <Stack direction="row" spacing={0}>
          <KeyboardButton value="0" onClick={() => ChangeQuery(0)}/>
        </Stack>
      </Stack>
    </Box>
  );
}