import { z } from 'zod';

const tokenSchema = z.string().jwt();

export default tokenSchema;
