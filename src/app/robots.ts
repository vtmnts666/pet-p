import type { MetadataRoute } from 'next';

import { env } from '@/env.mjs';

export default function robots(): MetadataRoute.Robots {
  return {
    host: env.SITE_URL,
    rules: {
      userAgent: '*',
      allow: env.NODE_ENV === 'production' ? '/' : undefined,
      disallow: env.NODE_ENV === 'production' ? '/account' : '/'
    },
    sitemap: `${env.SITE_URL}/sitemap.xml`
  };
}
