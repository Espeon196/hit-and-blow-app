import { Grid } from '@mui/material';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Title from './components/title';
import Monitor from './components/monitor';
import Keyboard from './components/Keyboard';
import Screen from './components/screen';
import History from './components/history';

function App() {
  const activeBlock = 2;
  const query = [3, 4, null, null];

  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Title />
        </Grid>
          <Grid item xs={12}>
          <Monitor activeBlock={activeBlock} query={query} />
        </Grid>
        <Grid item xs={6} >
          <Keyboard />
        </Grid>
        <Grid item xs={6}>
          <Screen />
          <History />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
