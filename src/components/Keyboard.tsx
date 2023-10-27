import { Box, Button, Stack } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ArrowForwardIos } from "@mui/icons-material";

function KeyboardButton(
  { value }: {value: React.ReactNode}
) {
  return (
    <Button onClick={() => {}} variant="outlined" sx={{ height: 80, width: 80}}>
      {value}
    </Button>
  );
}


export default function Keyboard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 5}}>
      <Stack direction="column" spacing={0}>
        <Stack direction="row" spacing={0}>
          <KeyboardButton value={<ArrowBackIosNewIcon />} />
          <KeyboardButton value={<ArrowForwardIos />} />
          <KeyboardButton value="C" />
        </Stack>
        <Stack direction="row" spacing={0}>
          <KeyboardButton value="1" />
          <KeyboardButton value="2" />
          <KeyboardButton value="3" />
        </Stack>
        <Stack direction="row" spacing={0}>
          <KeyboardButton value="4" />
          <KeyboardButton value="5" />
          <KeyboardButton value="6" />
        </Stack>
        <Stack direction="row" spacing={0}>
          <KeyboardButton value="7" />
          <KeyboardButton value="8" />
          <KeyboardButton value="9" />
        </Stack>
        <Stack direction="row" spacing={0}>
          <KeyboardButton value="0" />
        </Stack>
      </Stack>
    </Box>
  );
}