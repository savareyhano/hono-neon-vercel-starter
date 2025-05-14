import type { z } from 'zod';
import type tokenPayloadSchema from '../schemas/token-payload-schema';

type TokenPayload = z.infer<typeof tokenPayloadSchema>;

export default TokenPayload;
