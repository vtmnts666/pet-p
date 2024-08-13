export async function fetchAllTokens() {
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-CMC_PRO_API_KEY': 'fa87a4a6-934c-427d-90ee-21ba9fbfb8d5' // Replace with your API key
    }
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error('Failed to fetch tokens data');
    }

    const tokens = await res.json();
    return tokens.slice(0, 10).map((token: any) => ({
      id: token.id,
      symbol: token.symbol,
      name: token.name,
      platforms: token.platforms || {} // Ensure platforms is always an object
    }));
  } catch (err) {
    console.error('Error fetching tokens data:', err);
    return [];
  }
}
