import EquipmentsList from "../Equipments/EquipmentsList";
import { useNavigate } from "react-router-dom";
import sprite from "../../img/symbol-defs.svg";
import css from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    form,
    length,
    width,
    height,
    tank,
    consumption,
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
    gallery,
    reviews,
  } = camper;

  const features = {
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
  };

  const navigate = useNavigate();
  const handleDetail = () => {
    navigate("/catalog/:id");
  };

  const reversedLocation = location.split(", ").reverse().join(", ");
  const firstImage = gallery[0].thumb;

  return (
    <div>
      <div className={css.card_container}>
        <img
          className={css.camper_photo}
          src={firstImage}
          alt="Camper's photo"
        />
        <div className={css.info_container}>
          <div className={css.name_price_favor_container}>
            <h2 className={css.camper_name}>{name}</h2>
            <p className={css.camper_price}>€{price}.00</p>
            <svg className={css.fav_icon}>
              <use xlinkHref={`${sprite}#icon-Property-heart`}></use>
            </svg>
          </div>
          <svg className={css.rate_icon}>
            <use xlinkHref={`${sprite}#icon-Rating`}></use>
          </svg>
          {rating}
          <p>({reviews.length} Reviews)</p>
          <p>{reversedLocation}</p>
          <p>{description}</p>
          <EquipmentsList {...features} />

          <button type="button" onClick={handleDetail}>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}

// const featureLabels = {
//   kitchen: "Kitchen",
//   bathroom: "Bathroom",
//   AC: "AC",
//   TV: "TV",
//   radio: "Radio",
//   refrigerator,
//   microwave,
//   gas,
//   water,
// };

// const availableFeatures = Object.keys(features).filter(
//   (key) => features[key]
// );

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// const details = { form, length, width, height, tank, consumption };

// {
/* <h3>Equipments</h3>
      <ul>
        <li>{capitalizeFirstLetter(transmission)}</li>
        <li>{capitalizeFirstLetter(engine)}</li>
        {availableFeatures.map((feature) => (
          <li key={feature}>{featureLabels[feature]}</li>
        ))}
      </ul> */
// }
