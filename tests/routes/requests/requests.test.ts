import supertest from 'supertest';
const requestsRouter = require('../../../routes/requests/requests');

// Utils
import testsUtils from '../../../utils/tests';

describe('POST /api/incrementAndGet', () => {
  test('Increments counter on global objects', async () => {
    // Mock global object
    const globalObject = testsUtils.mockGlobalObject();

    // Mock express app
    const app = testsUtils.mockExpressApp({
      global: globalObject,
      routes: {
        '/api/requests': requestsRouter,
      },
    });

    await supertest(app)
      .post('/api/requests/incrementAndGet')
      .expect(200)

    expect(globalObject.numberOfRequests).toBe(1);
  });
});
