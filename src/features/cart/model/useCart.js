import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBasket,
  deleteBasket,
  toggleCount,
  clearBasket,
  getUnitPrice,
  selectBasket,
  selectBasketTotal,
  MIN_COUNT,
  MAX_COUNT,
} from './basketSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectBasket);
  const total = useSelector(selectBasketTotal);

  const add = useCallback((product) => dispatch(addBasket(product)), [dispatch]);
  const remove = useCallback((slug) => dispatch(deleteBasket(slug)), [dispatch]);
  const clear = useCallback(() => dispatch(clearBasket()), [dispatch]);
  const changeCount = useCallback(
    (slug, increase) => dispatch(toggleCount({ slug, bool: increase })),
    [dispatch]
  );

  return {
    items,
    total,
    add,
    remove,
    clear,
    changeCount,
    getUnitPrice,
    minCount: MIN_COUNT,
    maxCount: MAX_COUNT,
  };
};
