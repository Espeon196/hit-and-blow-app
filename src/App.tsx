import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Title from './components/title';
import Monitor from './components/monitor';
import Keyboard from './components/Keyboard';
import Screen from './components/screen';
import History from './components/history';
import { Answer, HistoryType, SingleHistoryType, UserQuery } from './types';

function App() {
  const makeAnswer = (): Answer => {
    const nums = Array(10).fill(null).map((_, i) => i);
    for (let i = nums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return nums.slice(0, 4);
  };

  const [answer, setAnswer] = useState<Answer>(makeAnswer)
  const [activeBlock, setActiveBlock] = useState(0);
  const [query, setQuery] = useState<UserQuery>([null, null, null, null]);
  const [history, setHistory] = useState<HistoryType>([]);
  const [complete, setComplete] = useState(false);

  const turn = complete ? history.length : history.length + 1;

  const canSubmit = query.every((q) => typeof q === "number") && !complete;

  const scoring = (answer: Answer, query: Answer): SingleHistoryType => {
    const compare: (number | null)[] = [...query];
    let [hit, blow] = [0, 0];
    for (let i = 0; i < answer.length; i++) {
      const ansI = answer[i];
      if (ansI === compare[i]) {
        hit++;
        compare[i] = null;
        continue;
      }
      for (let j = 0; j < compare.length; j++) {
        if (i === j) continue;

        const compJ = compare[j];
        if (ansI === compJ) {
          blow++;
          compare[j] = null;
          continue;
        }
      }
    }
    return {
      answer: [...query],
      hit: hit,
      blow: blow
    };
  }

  const submitQuery = () => {
    const singleHistory = scoring(answer, query as Answer);

    setHistory((prevHistory) => [...prevHistory, singleHistory]);
    if (singleHistory.hit === 4) {
      setComplete(true);
    } else {
      setActiveBlock(0);
      setQuery([null, null, null, null]);
    }
  }

  const resetProblem = () => {
    setAnswer(makeAnswer());
    setActiveBlock(0);
    setQuery([null, null, null, null]);
    setHistory([]);
    setComplete(false);
  }

  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title />
        </Grid>
          <Grid item xs={12}>
          <Monitor activeBlock={activeBlock} query={query} canSubmit={canSubmit} submitQuery={submitQuery}/>
        </Grid>
        <Grid item xs={6} >
          <Keyboard activeBlock={activeBlock} setActiveBlock={setActiveBlock} setQuery={setQuery}/>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ width: 400}}>
            <Screen turn={turn} complete={complete} resetProblem={resetProblem} answer={answer}/>
            <History history={history} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
