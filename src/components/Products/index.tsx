'use client';

import { useEffect } from 'react';

import styles from './index.module.scss';
import Loader from '@/components/Loader';
import ProductCard from '@/components/ProductCard';
import { useUser } from '@/store/auth';
import { useIsLoading, useProducts, useProductsList } from '@/store/products';

const Products = () => {
  const fetchProducts = useProducts();
  const user = useUser();
  const isLoading = useIsLoading();
  const products = useProductsList();

  useEffect(() => {
    fetchProducts(user?.token || '');
  }, [fetchProducts, user?.token]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
