import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { ZodError } from 'zod';
import loginRoute from './routes/login-route';
import logoutRoute from './routes/logout-route';
import usersRoute from './routes/users-route';

const app = new Hono();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN!,
    credentials: true,
  })
);

app
  .basePath('/api')
  .route('/login', loginRoute)
  .route('/logout', logoutRoute)
  .route('/users', usersRoute)

app.all('*', (c) => {
  return c.json(
    {
      status: 'fail',
      message: 'Not found',
    },
    404
  );
});

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json(
      {
        status: 'fail',
        message: err.message,
      },
      err.status
    );
  } else if (err instanceof ZodError) {
    return c.json(
      {
        status: 'fail',
        message: {
          errors: err.errors,
        },
      },
      400
    );
  } else {
    return c.json(
      {
        status: 'error',
        message: 'Something went wrong',
      },
      500
    );
  }
});

export default app;
