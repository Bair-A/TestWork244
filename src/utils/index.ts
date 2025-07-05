export const formatPrice = (price: number, currency: string): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2
  }).format(price / 100);
};
