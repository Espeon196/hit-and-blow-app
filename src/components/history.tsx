import React from "react";
import {
  SingleHistoryType,
  HistoryType
} from "./../types"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


function SingleHistory(
  { key, singleHistory } : { key: number, singleHistory: SingleHistoryType }
) {
  return (
    <TableRow
      key={key}
    >
      <TableCell component="th" scope="row">
        {singleHistory.answer.reduce((ret: string, i) => `${ret} ${i}`, "")}
      </TableCell>
      <TableCell align="right">{singleHistory.hit}</TableCell>
      <TableCell align="right">{singleHistory.blow}</TableCell>
    </TableRow>
  )
}

export default function History(
  { history } : { history: HistoryType }
) {
  return (
    <TableContainer component={Paper} sx={{ m: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Answer</TableCell>
            <TableCell align="right">Hit</TableCell>
            <TableCell align="right">Blow</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((h, i) => (
            <SingleHistory key={i} singleHistory={h} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}