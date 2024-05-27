import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    SITE_URL: z.string().min(1).url(),
    NODE_ENV: z.enum(['development', 'production', 'test'])
  },

  client: {
    NEXT_PUBLIC_YM_COUNTER: z.string().min(1),
    NEXT_PUBLIC_API_URL: z.string().min(1).url()
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_YM_COUNTER: process.env.NEXT_PUBLIC_YM_COUNTER,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  }
});
