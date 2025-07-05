'use client';

import { useMemo } from 'react';

import styles from './index.module.scss';
import FallBackImageIcon from '@/assets/icons/FallBackImageIcon';
import { formatPrice } from '@/utils';

import { Product } from '@/shared/types';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, category, price, discountPercentage, rating, images, brand } =
    product;

  const priceFormatted = useMemo(() => formatPrice(price, 'USD'), [price]);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {images && images.length > 0 ? (
          <img src={images[0]} alt={title} className={styles.image} />
        ) : (
          <div className={styles.svgPlaceholder}>
            <FallBackImageIcon />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.brand}>Бренд: {brand}</p>
        <div className={styles.priceWrapper}>
          <span className={styles.finalPrice}>${priceFormatted}</span>
          <span className={styles.oldPrice}>${price.toFixed(2)}</span>
          <span className={styles.discount}>-{discountPercentage}%</span>
        </div>
        <p className={styles.rating}>⭐ {rating}/5</p>
      </div>
    </div>
  );
};

export default ProductCard;
