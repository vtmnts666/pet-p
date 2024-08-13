export async function fetchAllTokens() {
  const url = `https://api.coingecko.com/api/v3/coins/list`;

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-o7dfY9g8SbGvCVqksiDZUdoh' // Replace with your API key
      }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch tokens data');
    }

    const tokens = await res.json();
    return tokens.slice(0, 10).map((token: any) => ({
      id: token.id,
      symbol: token.symbol,
      name: token.name,
      platforms: token.platforms || {}
    }));
  } catch (err) {
    console.error('Error fetching tokens data:', err);
    return [];
  }
}

export async function fetchTokenDetails(id: string) {
  const url = `https://api.coingecko.com/api/v3/coins/list/${id}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-o7dfY9g8SbGvCVqksiDZUdoh' // Your API key here
    }
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Failed to fetch details for token with id ${id}`);
    }

    const details = await res.json();
    return {
      id: details.id,
      symbol: details.symbol,
      name: details.name,
      price: details.market_data?.current_price?.usd // Access the USD price
    };
  } catch (err) {
    console.error(`Error fetching details for token with id ${id}:`, err);
    return null;
  }
}
