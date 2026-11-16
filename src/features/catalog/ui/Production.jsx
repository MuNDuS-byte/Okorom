import ProductionCard from './ProductionCard';
import {
  useCatalogFilter,
  PRICE_MIN,
  PRICE_MAX,
  PRICE_STEP,
} from '../model/useCatalogFilter';
import styles from './Production.module.css';

const Production = () => {
  const {
    products,
    total,
    filteredCount,
    filters,
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
  } = useCatalogFilter();

  return (
    <div className={styles.Production}>
      <div className={styles.Header}>
        <h1>Вся продукция</h1>
        <p>{total} товара</p>
      </div>

      <div className={styles.Toolbar}>
        <input
          className={styles.Search}
          type="search"
          placeholder="Поиск по названию"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.FilterToggle} onClick={openDrawer}>
          Показать фильтрацию
        </button>
      </div>

      <p className={styles.Counter}>
        Показано {filteredCount} из {total} товаров
      </p>

      {isDrawerOpen && (
        <div className={styles.Overlay} onClick={closeDrawer}></div>
      )}
      <aside
        className={`${styles.Drawer} ${isDrawerOpen ? styles.DrawerOpen : ''}`}
        aria-hidden={!isDrawerOpen}
      >
        <div className={styles.DrawerHeader}>
          <h3>Фильтрация</h3>
          <button
            className={styles.DrawerClose}
            onClick={closeDrawer}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <div className={styles.DrawerBlock}>
          <h4>Цена</h4>
          <p className={styles.PriceValue}>
            от {priceFrom} ₽ до {priceTo} ₽
          </p>
          <label className={styles.RangeLabel}>
            От
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={PRICE_STEP}
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
          </label>
          <label className={styles.RangeLabel}>
            До
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={PRICE_STEP}
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
            />
          </label>
        </div>

        <div className={styles.DrawerBlock}>
          <h4>Категория</h4>
          <div className={styles.Filter}>
            {filters.map((el) => {
              return (
                <button
                  key={el.key}
                  className={
                    activeKeys.includes(el.key) ? styles.FilterActive : ''
                  }
                  onClick={() => applyFilter(el)}
                >
                  {el.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.DrawerFooter}>
          <button className={styles.ResetButton} onClick={resetFilters}>
            Сбросить
          </button>
          <button className={styles.ApplyButton} onClick={closeDrawer}>
            Показать ({filteredCount})
          </button>
        </div>
      </aside>

      <div className={styles.ProductionContent}>
        {products.length > 0 ? (
          <div className={styles.PruductionCard}>
            {products.map((el) => {
              return <ProductionCard key={el.slug} info={el} />;
            })}
          </div>
        ) : (
          <div className={styles.Empty}>
            <h3>Ничего не найдено</h3>
            <p>Попробуйте изменить поисковый запрос или параметры фильтрации</p>
            <button onClick={resetFilters}>Сбросить фильтры</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Production;
