import * as React from 'react';
import { connect } from 'react-redux';
import style from './HooksTest.scss';

// Actions
import * as clicksActions from '../../store/clicks/actions';
import * as objectActions from '../../store/object/actions';

// Defining the types we should expect for this component
type HooksTestProps = {
  clicks: number,
  object: {
    name: string,
  },
  // The dispatch function expects an object returned from the action
  dispatch: (dispatchObject:object) => void,
};

const HooksTest = (props:HooksTestProps) => {
  // When the user clicks on the div, increment the total clicks by one
  const incrementClickOnClick = () => {
    props.dispatch(clicksActions.setClicksState(props.clicks + 1));
  }

  // When the user types, update the redux object.name state
  const inputOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    props.dispatch(objectActions.setName(e.target.value));
  };

  return (
    <>
      <div className={style.main} onClick={incrementClickOnClick}>
        <span>Clicks: {props.clicks}</span>
      </div>
      <div className={style.inputWrapper}>
        <input value={props.object.name} onChange={inputOnChange} />
      </div>
    </>
  );
};

const mapStateToProps = (state:StoreTypes) => ({
  clicks: state.clicks,
  object: state.object,
});

export default connect(mapStateToProps)(HooksTest);
