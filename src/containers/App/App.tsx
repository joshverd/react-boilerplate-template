import * as React from 'react';
import style from './App.scss';

// Components
import HooksTest from '../../components/HooksTest/HooksTest';

type AppPropTypes = {};

const App = (props:AppPropTypes) => {
  return (
    <div className={style.appWrapper}>
      <HooksTest />
    </div>
  );
};

export default App;
