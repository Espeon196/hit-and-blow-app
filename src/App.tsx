import { Grid } from '@mui/material';
import React from 'react';
import Title from './components/title';
import Monitor from './components/monitor';
import Keyboard from './components/Keyboard';
import Screen from './components/screen';
import History from './components/history';

function App() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Title />
        </Grid>
          <Grid item xs={12}>
          <Monitor />
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
