import sprite from "../../img/symbol-defs.svg";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <svg className={css.iconLogo}>
        <use xlinkHref={`${sprite}#icon-TravelTrucks`}></use>
      </svg>
    </>
  );
}
