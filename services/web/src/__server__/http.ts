/* eslint-disable no-console */
import { createMiddleware } from '@mswjs/http-middleware';
import cors from 'cors';
import express from 'express';
import next from 'next';

import { handlers } from './handlers';

const app = express();
const port = 8000;

const nextApp = next({ dev: true, port });

nextApp.prepare().then(() => {
  app.use(
    cors({
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200,
      credentials: true,
    }),
  );
  app.use(express.json());
  app.use(createMiddleware(...handlers));

  app.listen(port, () => console.log(`Server listening on port: ${port}`));
});

export default nextApp;
