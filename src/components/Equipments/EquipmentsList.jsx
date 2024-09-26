import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import sprite from "../../img/symbol-defs.svg";
import css from "./EquipmentsList.module.css";

export default function EquipmentsList({
  transmission,
  engine,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
}) {
  // const featureLabels = {
  // transmission,
  // engine,
  //   kitchen: "Kitchen",
  //   bathroom: "Bathroom",
  //   AC: "AC",
  //   TV: "TV",
  //   radio: "Radio",
  //   refrigerator: "Refrigerator",
  //   microwave: "Microwave",
  //   gas: "Gas",
  //   water: "Water",
  // };

  // const availableFeatures = Object.keys(features).filter(
  //   (key) => features[key]
  // );

  // console.log(availableFeatures);

  // {
  /* {availableFeatures.map((feature) => (
          <li key={feature}>{featureLabels[feature]}</li>
        ))} */
  // }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      {/* <h3>Equipments</h3> */}
      <ul>
        <li>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-diagram`}></use>
          </svg>
          {capitalizeFirstLetter(transmission)}
        </li>
        <li>
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#icon-fuel-pump`}></use>
          </svg>
          {capitalizeFirstLetter(engine)}
        </li>

        {AC && (
          <li>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-wind`}></use>
            </svg>
            <p>AC</p>
          </li>
        )}

        {bathroom && (
          <li>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-bi_droplet`}></use>
            </svg>
            <p>Bathroom</p>
          </li>
        )}

        {kitchen && (
          <li>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-cup-hot`}></use>
            </svg>
            <p>Kitchen</p>
          </li>
        )}

        {TV && (
          <li>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-tv`}></use>
            </svg>
            <p>TV</p>
          </li>
        )}
        {radio && (
          <li>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-ui-radios`}></use>
            </svg>
            <p>Radio</p>
          </li>
        )}

        {refrigerator && (
          <li>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-tv`}></use>
            </svg>
            <p>Refrigerator</p>
          </li>
        )}

        {microwave && (
          <li>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-tv`}></use>
            </svg>
            <p>Microwave</p>
          </li>
        )}
        {gas && (
          <li>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-wind`}></use>
            </svg>
            <p>Gas</p>
          </li>
        )}
        {water && (
          <li>
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#icon-bi_droplet`}></use>
            </svg>
            <p>Water</p>
          </li>
        )}
      </ul>
    </div>
  );
}
