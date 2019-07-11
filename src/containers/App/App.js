import React, { Component } from 'react';

import style from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.appWrapper}>
        <span>Hello!</span>
      </div>
    );
  }
}

export default App;
