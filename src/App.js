import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';

import Login from './components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const url = 'https://pt-api.vkmedia.dk';

    axios.get(url)
      .then(response => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 2000);

        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const content = this.state.isLoading ? <div className="loading"><div className="spinner"><div></div><div></div></div></div> : <Login />;

    return content;
  }
}

export default App;
