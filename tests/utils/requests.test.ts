// Utils
import testsUtils from '../../utils/tests';
import requestsUtils from '../../utils/requests';

// Types
import type GlobalObject from 'types/GlobalObject';

test('incrementRequests function must increment the global object request number', () => {
  const global: GlobalObject = testsUtils.mockGlobalObject();

  // Increment the global requests
  requestsUtils.incrementRequests({ global });

  // Make sure it was incremented correctly
  expect(global.numberOfRequests).toEqual(1);
});
