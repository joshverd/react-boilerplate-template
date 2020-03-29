import React from 'react';
import style from './App.scss';

// Components
import HooksTest from '../../components/HooksTest/HooksTest.js';

const App = props => {
  return (
    <div className={style.appWrapper}>
      <HooksTest />
    </div>
  );
};

export default App;
