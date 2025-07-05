'use client';

import { useEffect } from 'react';

import Loader from '@/components/Loader';
import { useUser } from '@/store/auth';
import { useIsLoading, useProducts } from '@/store/products';

const Products = () => {
  const fetchProducts = useProducts();
  const user = useUser();
  const isLoading = useIsLoading();

  useEffect(() => {
    fetchProducts(user?.token || '');
  }, [fetchProducts, user?.token]);

  return (
    <div className='products'>
      <h1>Products</h1>
      <p>List of products will be displayed here.</p>
      {isLoading ? <Loader /> : <p>Products loaded successfully.</p>}
    </div>
  );
};

export default Products;
