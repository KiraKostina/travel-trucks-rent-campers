import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import EquipmentsList from "../Equipments/EquipmentsList";
import css from "./CamperFeatures.module.css";

export default function CamperFeatures() {
  const {
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
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = useSelector(selectCamper);

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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div>
      <div className={css.feature_details_content}>
        <EquipmentsList {...features} />
        <h3 className={css.details_title}>Vehicle Details</h3>
        <ul className={css.details_list}>
          <li className={css.details_list_item}>
            <p>Form</p>
            <p>{capitalizeFirstLetter(form)}</p>
          </li>
          <li className={css.details_list_item}>
            <p>Length</p>
            <p>{length}</p>
          </li>
          <li className={css.details_list_item}>
            <p>Width</p>
            <p>{width}</p>
          </li>
          <li className={css.details_list_item}>
            <p>Height</p>
            <p>{height}</p>
          </li>
          <li className={css.details_list_item}>
            <p>Tank</p>
            <p>{tank}</p>
          </li>
          <li className={css.details_list_item}>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
