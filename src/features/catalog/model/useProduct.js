import catalogProducts from './cardCatalogData';

export const useProduct = (slug) =>
  catalogProducts.find((el) => el.slug === slug);
