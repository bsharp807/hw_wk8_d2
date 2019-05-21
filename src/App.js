import React, { Component } from 'react';
import FormContainer from './containers/FormContainer'
import ListContainer from './containers/ListContainer'
import ResetContainer from './containers/ResetContainer'
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <FormContainer />
        <ResetContainer />
        <ListContainer />
      </div>
    )
  }
}

export default App;
