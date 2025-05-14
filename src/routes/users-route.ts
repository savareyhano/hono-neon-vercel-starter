import { Hono } from 'hono';
import authMiddleware from '../middlewares/auth-middleware';

const usersRoute = new Hono().use(authMiddleware).get('/me', async (c) => {
  const payload = c.get('tokenPayload');

  return c.json({
    status: 'success',
    message: 'User retrieved',
    data: {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    },
  });
});

export default usersRoute;
