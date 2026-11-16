import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useCart } from "../../features/cart";
import { useProduct, useProductTabs } from "../../features/catalog";
import { useConsultation } from "../../features/consultation";
import Delivery from "../../shared/assets/images/Delivery.png";
import Guarantee from "../../shared/assets/images/Guarantee.png";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const params = useParams();
  const info = useProduct(params.slug);
  const { add } = useCart();
  const { scrollToConsultation } = useConsultation();
  const { tabs: infoBlock, toggleTab: infoToggle } = useProductTabs();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [params.slug]);

  return (
    <div className={styles.ProductionPage}>
      <div className="wrapper">
        <div className={styles.Back}>
          <Link to="../catalog" className={styles.backText}>
            <IoIosArrowRoundBack className={styles.backIcon} />
            Назад
          </Link>
        </div>
        <div className={styles.ProductionPageHeading}>
          <div className={styles.Text}>
            <h1>{info.header}</h1>
            <div className={styles.Info}>
              <div className={styles.SmallInfo}>
                <p className={styles.answer}>Диаметр обработки</p>
                <p className={styles.answer}>{info.characteristics.diometer}</p>
              </div>

              <div className={`${styles.SmallInfo} ${styles.PaddingInfo}`}>
                <p className={styles.answer}>Размеры</p>
                <p className={styles.answer}>
                  {info.characteristics.dimensions}
                </p>
              </div>

              <div className={styles.SmallInfo}>
                <p className={styles.answer}>Мощность</p>
                <p className={styles.answer}>{info.characteristics.power}</p>
              </div>
            </div>
            <div className={styles.Price}>
              <h2>{info.price} ₽</h2>

              {info.salePrice && (
                <p className={styles.salePrice}>{info.salePrice} ₽</p>
              )}
            </div>
            <div className={styles.Buttons}>
              <button className={styles.blackButton} onClick={scrollToConsultation}>
                Проконсультироваться
              </button>
              <button
                className={styles.whiteButton}
                onClick={() => add(info)}
              >
                Добавить в корзину
              </button>
            </div>
          </div>

          <div className={styles.Images}>
            <div
              className={styles.Filtered}
              style={{
                background: `url(${info.cardImg})  no-repeat 100%/100%`,
              }}
            >
              {info.filter.sale && (
                <button className={styles.SaleButton}>-10%</button>
              )}
              {info.filter.armor && (
                <button className={styles.ArmorButton}>Броня</button>
              )}
              {info.filter.press && (
                <button className={styles.PressButton}>Press</button>
              )}
            </div>
            <div className={styles.Phones}>
              <p className={styles.answer}>Связаться со специалистом</p>
              <div className={styles.phone}>
                <p className={styles.charies}>+7 (800) 707-31-01</p>
                <p className={styles.charies}>+7 (963) 656-66-26</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Info}>
          <div className={styles.InfoButtons}>
            <button
              className={infoBlock.description ? styles.active : styles.default}
              onClick={() => infoToggle("description")}
            >
              Описание
              <div
                className={
                  infoBlock.description ? styles.activeLine : styles.defualtLine
                }
              ></div>
            </button>
            <button
              className={infoBlock.charis ? styles.active : styles.default}
              onClick={() => infoToggle("charis")}
            >
              Характеристики
              <div
                className={
                  infoBlock.charis ? styles.activeLine : styles.defualtLine
                }
              ></div>
            </button>
            <button
              className={infoBlock.video ? styles.active : styles.default}
              onClick={() => infoToggle("video")}
            >
              Видео
              <div
                className={
                  infoBlock.video ? styles.activeLine : styles.defualtLine
                }
              ></div>
            </button>
          </div>
          <div className={styles.Information}>
            <div>
              {infoBlock.description && (
                <div className={styles.informationSmall}>
                  <p className={styles.informationConspect}>{info.text}</p>
                </div>
              )}
              {infoBlock.charis && (
                <div className={styles.informationSmall}>
                  <h2>Характеристики</h2>
                  <div className={styles.charisInfo}>
                    <div className={styles.charisSmallInfo}>
                      <p className={styles.answer}>Диаметр обработки</p>
                      <p>{info.characteristics.diometer}</p>
                    </div>

                    <div className={styles.charisSmallInfo}>
                      <p className={styles.answer}>Вес</p>
                      <p>{info.characteristics.weight}</p>
                    </div>

                    <div className={styles.charisSmallInfo}>
                      <p className={styles.answer}>Двигатель</p>
                      <p>{info.characteristics.engine}</p>
                    </div>

                    <div className={styles.charisSmallInfo}>
                      <p className={styles.answer}>Размеры</p>
                      <p>{info.characteristics.dimensions}</p>
                    </div>

                    <div className={styles.charisSmallInfo}>
                      <p className={styles.answer}>Мощность</p>
                      <p>{info.characteristics.power}</p>
                    </div>

                    <div className={styles.charisSmallInfo}>
                      <p className={styles.answer}>Вольт</p>
                      <p>{info.characteristics.voltage}</p>
                    </div>
                  </div>
                </div>
              )}
              {infoBlock.video && (
                <div className={styles.informationSmall}>
                  <h2>Видео</h2>
                  <iframe
                    width="560"
                    height="315"
                    src={info.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
            <div>
              <div className={styles.smallInformation}>
                <div>
                  <img src={Delivery} alt="delivary" />
                </div>
                <div className={styles.informationText}>
                  <h3>Доставка по всей России</h3>
                  <p>
                    Отправим товар транспортной компанией или почтовым
                    отправлением (оплата при получении)
                  </p>
                </div>
              </div>

              <div className={styles.smallInformation}>
                <div>
                  <img src={Guarantee} alt="Guarantee" />
                </div>
                <div className={styles.informationText}>
                  <h3>Доставка по всей России</h3>
                  <p>
                    Отправим товар транспортной компанией или почтовым
                    отправлением (оплата при получении)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
