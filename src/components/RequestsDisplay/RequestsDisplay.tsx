import React from 'react';
import { connect } from 'react-redux';
import style from './RequestsDisplay.scss';

type RequestDisplayPropss = {
  requests: number,
}

const RequestsDisplay = (props: RequestDisplayPropss) => {
  return (
    <div className={style.requestDisplayWrapper}>
      <span className={style.requestCount}>{props.requests}</span>
      <span className={style.title}>Requests</span>
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => ({
  requests: state.requests,
});

export default connect(mapStateToProps)(RequestsDisplay);
