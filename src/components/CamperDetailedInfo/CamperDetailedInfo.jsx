import css from "./CamperDetailedInfo.module.css";
import sprite from "../../img/symbol-defs.svg";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

export default function CamperDetailedInfo({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery = [],
    reviews = [],
  } = camper;

  console.log(camper);

  //   const reversedLocation = location.split(", ").reverse().join(", ");
  const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.current);
  };
  return (
    <div>
      {/* <h2>CamperDetailedInfo</h2> */}
      <div className={css.card_container}>
        <div className={css.info_container}>
          <div className={css.name_price_rate_locate_container}>
            <h2 className={css.camper_name}>{name}</h2>
            <div className={css.rate_locate_container}>
              <div className={css.rate_part}>
                <svg className={css.rate_icon}>
                  <use xlinkHref={`${sprite}#icon-Rating`}></use>
                </svg>
                <p>
                  {rating}({reviews.length} Reviews)
                </p>
              </div>
              <div className={css.locate_part}>
                <svg className={css.map_icon}>
                  <use xlinkHref={`${sprite}#icon-Map`}></use>
                </svg>
                <p>{location}</p>
              </div>
            </div>
            <p className={css.camper_price}>€{price}.00</p>
          </div>

          <div className={css.camper_gallery}>
            {gallery.map((img, index) => (
              <img
                className={css.camper_photo}
                key={index}
                src={img.original}
                alt={`Gallery image ${index + 1}`}
              />
            ))}
          </div>
          <p className={css.descrip_part}>{description}</p>
        </div>
      </div>
      <div className={css.adding_info}>
        <ul className={css.add_title_contain}>
          <li>
            <NavLink to="features" camper={camper} className={getLinkClass}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" reviews={reviews} className={getLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
}
