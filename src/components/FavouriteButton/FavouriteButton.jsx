import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../../redux/favourites/slice";
import { selectFavourites } from "../../redux/favourites/selectors";
import sprite from "../../img/symbol-defs.svg";
import css from "./FavouriteButton.module.css";

export default function FavouriteButton({ camperId }) {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);

  const isFavourite = favourites.includes(camperId);

  const handleFavouriteClick = () => {
    dispatch(toggleFavourite(camperId));
  };

  return (
    <svg
      className={`${css.fav_icon} ${isFavourite ? css.fav_icon_active : ""}`}
      onClick={handleFavouriteClick}
      width="24"
      height="24"
    >
      <use xlinkHref={`${sprite}#icon-Property-heart`}></use>
    </svg>
  );
}
