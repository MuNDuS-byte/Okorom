import { useCallback, useMemo, useState } from 'react';
import catalogProducts from './cardCatalogData';

export const CATALOG_FILTERS = [
  { key: 'all', name: 'Вся продукция', btn: true },
  { key: 'sale', name: 'Скидка', btn: false },
  { key: 'armor', name: 'Броня', btn: false },
  { key: 'press', name: 'Пресс', btn: false },
];

const getPrice = (product) => parseInt(product.salePrice || product.price, 10);

const prices = catalogProducts.map(getPrice);
export const PRICE_MIN = Math.min(...prices);
export const PRICE_MAX = Math.max(...prices);
export const PRICE_STEP = 10;

const matchesCategory = (product, activeKeys) => {
  if (activeKeys.includes('all') || activeKeys.length === 0) return true;
  return activeKeys.every(
    (key) =>
      product.filter.sale === key ||
      product.filter.armor === key ||
      product.filter.press === key
  );
};

export const useCatalogFilter = () => {
  const [activeKeys, setActiveKeys] = useState(['all']);
  const [query, setQuery] = useState('');
  const [priceFrom, setPriceFromState] = useState(PRICE_MIN);
  const [priceTo, setPriceToState] = useState(PRICE_MAX);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const applyFilter = useCallback((filter) => {
    if (filter.key === 'all') {
      setActiveKeys(['all']);
      return;
    }
    setActiveKeys((prev) => {
      const withoutAll = prev.filter((k) => k !== 'all');
      const next = withoutAll.includes(filter.key)
        ? withoutAll.filter((k) => k !== filter.key)
        : [...withoutAll, filter.key];
      return next.length === 0 ? ['all'] : next;
    });
  }, []);

  const setPriceFrom = useCallback(
    (value) => {
      setPriceFromState(Math.min(Number(value), priceTo));
    },
    [priceTo]
  );

  const setPriceTo = useCallback(
    (value) => {
      setPriceToState(Math.max(Number(value), priceFrom));
    },
    [priceFrom]
  );

  const resetFilters = useCallback(() => {
    setActiveKeys(['all']);
    setQuery('');
    setPriceFromState(PRICE_MIN);
    setPriceToState(PRICE_MAX);
  }, []);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const products = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return catalogProducts.filter((product) => {
      const price = getPrice(product);
      return (
        matchesCategory(product, activeKeys) &&
        product.header.toLowerCase().includes(normalized) &&
        price >= priceFrom &&
        price <= priceTo
      );
    });
  }, [activeKeys, query, priceFrom, priceTo]);

  return {
    products,
    total: catalogProducts.length,
    filteredCount: products.length,
    filters: CATALOG_FILTERS,
    activeKeys,
    applyFilter,
    query,
    setQuery,
    priceFrom,
    priceTo,
    setPriceFrom,
    setPriceTo,
    resetFilters,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  };
};
