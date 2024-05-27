'use client';

import React from 'react';
import { YandexMetricaProvider } from 'next-yandex-metrica';

import { env } from '@/env.mjs';

export const YandexMetrika = () => {
  return (
    <YandexMetricaProvider
      tagID={Number(env.NEXT_PUBLIC_YM_COUNTER)}
      initParameters={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        ecommerce: 'dataLayer'
      }}
    >
      {' '}
    </YandexMetricaProvider>
  );
};
