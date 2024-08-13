import React from 'react';

import { fetchAllTokens } from '@/lib/fetchData';

const TokenList: React.FC = async () => {
  const tokens = await fetchAllTokens();

  if (!tokens) {
    return <div>Error loading tokens</div>;
  }

  return (
    <div>
      <h1 className='text-2xl '>First 10 Tokens from API</h1>
      <ul>
        {tokens.map((token: any) => (
          <li key={token.id}>
            <strong>{token.name}</strong> ({token.symbol}){token.id}
            <br />
            Platforms:{' '}
            {token.platforms && Object.keys(token.platforms).length > 0
              ? JSON.stringify(token.platforms)
              : 'None'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenList;
