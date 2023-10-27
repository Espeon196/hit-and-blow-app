import { Box, Grid } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Title from './components/title';
import Monitor from './components/monitor';
import Keyboard from './components/Keyboard';
import Screen from './components/screen';
import History from './components/history';
import { Answer, HistoryType, UserQuery } from './types';

function App() {
  const [answer, setAnswer] = useState<Answer>({} as Answer)
  const [activeBlock, setActiveBlock] = useState(0);
  const [query, setQuery] = useState<UserQuery>([null, null, null, null]);
  const [history, setHistory] = useState<HistoryType>([]);
  const [complete, setComplete] = useState(false);

  const turn = history.length + 1;

  const makeAnswer = () => {
    setAnswer(
      Array(4).fill(null).map(() => Math.floor(Math.random() * 10))
    );
  }

  const resetProblem = () => {
    makeAnswer();
    setActiveBlock(0);
    setQuery([null, null, null, null]);
    setHistory([]);
    setComplete(false);
  }

  useLayoutEffect(
    () => makeAnswer(),
    []
  )

  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title />
        </Grid>
          <Grid item xs={12}>
          <Monitor activeBlock={activeBlock} query={query} canSubmit={false} />
        </Grid>
        <Grid item xs={6} >
          <Keyboard activeBlock={activeBlock} setActiveBlock={setActiveBlock} setQuery={setQuery}/>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ width: 400}}>
            <Screen turn={turn} complete={complete} resetProblem={resetProblem}/>
            <History history={history} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
