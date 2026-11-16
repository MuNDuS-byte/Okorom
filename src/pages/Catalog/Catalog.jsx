import { Production } from "../../features/catalog";
import HeadingCatalog from "./HeadingCatalog/HeadingCatalog";
import styles from "./Catalog.module.css";

const Catalog = () => {
  return (
    <div className={styles.Catalog}>
      <div className="wrapper">
        <HeadingCatalog />
        <Production />
      </div>
    </div>
  );
};

export default Catalog;
