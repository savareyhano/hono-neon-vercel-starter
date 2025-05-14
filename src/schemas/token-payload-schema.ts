import { z } from 'zod';

const tokenPayloadSchema = z
  .object({
    sub: z.string().uuid(),
    name: z.string().min(1).max(255),
    email: z.string().min(1).max(255).email(),
    picture: z.string().min(1),
    exp: z.number().int().nonnegative(),
    iat: z.number().int().nonnegative(),
  })
  .strict();

export default tokenPayloadSchema;
