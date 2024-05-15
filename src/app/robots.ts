import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    host: process.env.SITE_URL,
    rules: {
      userAgent: '*',
      allow: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? '/' : undefined,
      disallow: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? '/account' : '/'
    },
    sitemap: `${process.env.SITE_URL}/sitemap.xml`
  };
}
