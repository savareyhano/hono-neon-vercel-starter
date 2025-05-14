import { getCookie } from 'hono/cookie';
import { createMiddleware } from 'hono/factory';
import { HTTPException } from 'hono/http-exception';
import tokenSchema from '../schemas/token-schema';
import { verifyAccessToken } from '../services/token/token-service';
import tokenPayloadSchema from '../schemas/token-payload-schema';
import type TokenPayload from '../types/token-type';

const authMiddleware = createMiddleware<{
  Variables: {
    tokenPayload: TokenPayload;
  };
}>(async (c, next) => {
  const accessToken = getCookie(c, 'access_token');

  if (!accessToken) {
    throw new HTTPException(401, { message: 'Unauthorized' });
  }

  try {
    const parsedAccessToken = tokenSchema.parse(accessToken);
    const verifiedAccessToken = await verifyAccessToken(parsedAccessToken);
    const parsedAccessTokenPayload =
      tokenPayloadSchema.parse(verifiedAccessToken);

    c.set('tokenPayload', parsedAccessTokenPayload);
    await next();
  } catch (error) {
    throw new HTTPException(401, { message: 'Unauthorized' });
  }
});

export default authMiddleware;
