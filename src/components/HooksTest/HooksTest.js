import React, { useState } from 'react';
import { connect } from 'react-redux';
import style from './HooksTest.scss';

// Actions
import * as clicksActions from '../../actions/clicks/clicks.js';

const HooksTest = (props) => {
  // When the user clicks on the div, increment the total clicks by one
  const incrementClickOnClick = () => {
    props.dispatch(clicksActions.setClicksState(props.clicks + 1));
  }

  return (
    <div className={style.main} onClick={incrementClickOnClick}>
      <span>Clicks: {props.clicks}</span>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    clicks: state.clicks,
  };
};

export default connect(mapStateToProps)(HooksTest);
