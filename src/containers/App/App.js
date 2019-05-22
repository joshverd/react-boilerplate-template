import React, { Component } from 'react';

import style from './App.scss';

console.log(style);

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span className={style.test}>App component</span>
    );
  }
}

export default App;
