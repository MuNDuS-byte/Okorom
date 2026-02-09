import cardCatalogData from "../../data/cardCatalogData";
import HeadingCatalog from "./HeadingCatalog/HeadingCatalog";
import Prudaction from "./Production/Production";
import styles from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className={styles.Catalog}>
      <div className="wrapper">
        <HeadingCatalog />
        <Prudaction cardCatalogData={cardCatalogData} />
      </div>
    </div>
  );
};

export default Catalog;
