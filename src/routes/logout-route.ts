import { Hono } from 'hono';
import { deleteCookie, getCookie } from 'hono/cookie';

const logoutRoute = new Hono().post('/', (c) => {
  const accessToken = getCookie(c, 'access_token');

  if (!accessToken) {
    return c.json({
      status: 'fail',
      message: 'Access token not found',
    });
  }

  deleteCookie(c, 'access_token', {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
  });

  return c.json({
    status: 'success',
    message: 'Logout success',
  });
});

export default logoutRoute;
