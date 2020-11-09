import * as React from 'react';
import style from './App.scss';

// Components
import RequestsDisplay from '../../components/RequestsDisplay/RequestsDisplay';
import IncrementRequests from '../../components/IncrementRequests/IncrementRequests';

type AppProps = {};

const App = (props: AppProps) => {
  return (
    <div className={style.appWrapper}>
      <RequestsDisplay />
      <IncrementRequests />
    </div>
  );
}

export default App;
