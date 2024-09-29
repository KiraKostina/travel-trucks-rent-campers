import { useDispatch, useSelector } from "react-redux";
import { selectVehicleTypeFilter } from "../../redux/filters/selectors";
import { setVehicleTypeFilter } from "../../redux/filters/slice";
import css from "./VehicleTypeFilter.module.css";
import sprite from "../../img/symbol-defs.svg";
import { selectCamper } from "../../redux/campers/selectors";

const vehicleTypes = [
  { value: "panelTruck", label: "Van", icon: "icon-bi_grid-1x2" },

  {
    value: "fullyIntegrated",
    label: "FullyIntegrated",
    icon: "icon-bi_grid",
  },
  { value: "alcove", label: "Alcove", icon: "icon-bi_grid-3x3-gap" },
];

export default function VehicleTypeFilter() {
  const dispatch = useDispatch();
  const selectedVehicleType = useSelector(selectVehicleTypeFilter);

  console.log(selectedVehicleType);

  const handleVehicleTypeChange = (type) => {
    dispatch(setVehicleTypeFilter(type));
  };

  return (
    <div>
      <h3 className={css.vehicle_type_title}>Vehicle type</h3>
      {/* Vehicle Type Filter as List */}
      <ul className={css.vehicle_type_list}>
        {vehicleTypes.map((type) => (
          <li
            key={type.value}
            className={`${css.vehicle_type_item} ${
              selectedVehicleType === type.value ? css.active : ""
            }`}
            onClick={() => handleVehicleTypeChange(type.value)}
          >
            <svg className={css.icon}>
              <use xlinkHref={`${sprite}#${type.icon}`}></use>
            </svg>
            <span>{type.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
