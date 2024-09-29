import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { selectLocationFilter } from "../../redux/filters/selectors";
import { setLocationFilter } from "../../redux/filters/slice";
import css from "./LocationFilter.module.css";
import sprite from "../../img/symbol-defs.svg";

export default function LocationFilter() {
  const dispatch = useDispatch();
  const locationInputId = useId();
  const locationFilter = useSelector(selectLocationFilter);
  console.log(locationFilter);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    dispatch(setLocationFilter(value));
  };
  return (
    <>
      <label className={css.location_label} htmlFor={locationInputId}>
        Location
      </label>
      <div className={css.search_container}>
        <input
          className={css.search_field}
          type="text"
          value={locationFilter}
          id={locationInputId}
          onChange={handleLocationChange}
        />
        <svg className={css.map_icon}>
          <use xlinkHref={`${sprite}#icon-Map`}></use>
        </svg>
      </div>
    </>
  );
}
