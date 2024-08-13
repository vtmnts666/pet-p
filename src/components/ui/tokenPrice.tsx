'useclient';

import React, { useEffect, useState } from 'react';

import { fetchTokenDetails } from '@/lib/api';

interface TokenPriceProps {
  id: string;
}

const TokenPrice: React.FC<TokenPriceProps> = ({ id }) => {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        console.log(`Fetching price for token: ${id}`);
        const data = await fetchTokenDetails(id);
        console.log(`Data received for token ${id}:`, data);

        if (data && data.price !== undefined) {
          setPrice(data.price);
          console.log(`Price for ${id} is ${data.price}`);
        } else {
          setError('Failed to fetch price');
          console.error(`Failed to fetch price for ${id}`);
        }
      } catch (err) {
        setError('Error fetching price');
        console.error(`Error fetching price for ${id}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
  }, [id]);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{error}</span>;

  return <span>${price?.toFixed(2)}</span>;
};

export default TokenPrice;
