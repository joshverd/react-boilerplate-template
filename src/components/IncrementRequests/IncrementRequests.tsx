import React from 'react';
const { useState } = React;
import { connect } from 'react-redux';
import style from './IncrementRequests.scss';
import axios from 'axios';

// Actions
import * as requestsActions from '../../store/requests/actions';

// Types
import type { Dispatch } from 'redux';

type IncrementRequestsProps = {
  requests: number,
  dispatch: Dispatch,
}

const IncrementRequests = (props: IncrementRequestsProps) => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendServerIncrementRequest = () => {
    // If we're already loading, don't make another request
    if(loading) return;

    // Start loading
    setLoading(true);
    setError('');

    axios.post('/api/requests/incrementAndGet')
      .then(response => {
        setLoading(false);

        // Set the new request count to the store
        return props.dispatch(requestsActions.setRequestCount(response.data.data.numberOfRequests));
      })
      .catch(err => {
        console.error(err);

        setLoading(false);

        return setError('Internal Error.');
      });
  }

  return (
    <div className={style.incrementRequestsWrapper}>
      <button
        onClick={sendServerIncrementRequest}
      >
        {loading ? (
          'Loading...'
        ) : (
          'Ask Server to Increment'
        )}
      </button>
      {error && (
        <div className={style.errorWrapper}>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => ({
  requests: state.requests,
});

export default connect(mapStateToProps)(IncrementRequests);
