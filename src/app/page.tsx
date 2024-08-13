'use client';

import React from 'react';

import { Badge } from '@/components/ui/badge';
import TokenList from '@/components/ui/tokenList';
import TokenPrice from '@/components/ui/tokenPrice';

const Page = () => {
  return (
    <div className='flex flex-col'>
      <TokenList />
      <Badge>
        Ethereum: <TokenPrice id='ethereum' />
      </Badge>
      <Badge>
        Bitcoin: <TokenPrice id='bitcoin' />
      </Badge>
      <Badge>
        Arbitrum: <TokenPrice id='arbitrum' />
      </Badge>
    </div>
  );
};

export default Page;
