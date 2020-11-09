import express from 'express';
const router = express.Router();

// Utils
import requestsUtils from '../../utils/requests';

// Types
import type GlobalObject from 'types/GlobalObject';
import type { Request, Response } from 'express';

module.exports = (global: GlobalObject) => {
  router.post('/incrementAndGet', (req: Request, res: Response) => {
    // Increment global number of requests
    requestsUtils.incrementRequests({ global });

    // Return global number of requests
    return res.send({
      success: true,
      data: {
        numberOfRequests: global.numberOfRequests,
      },
    });
  });

  return router;
}
