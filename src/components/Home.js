import React from 'react';
import Form from './Form';
import { Grid } from '@material-ui/core';
import Storage from './storage';
import Header from './Header';

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Header />
        <h2>Your data is saved with Us @Makarios!</h2>
      </Grid>
    );
  }
}
export default Home;
