import React from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './components/Weather';

function loadData() {
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentDidMount() {
    fetch('/forecast.json').then(res => {
      res.json().then((data) => {
        this.setState((state, props) => ({ ...state, list: data.list }));
      });
    });
  }
  render() {
    this.state.list.sort((a, b) => a.dt > b.dt ? 1 : -1);
    return <ol>{this.state.list.map((data) => <Weather {...data}></Weather>)}</ol>;
  }
}

export default App;
