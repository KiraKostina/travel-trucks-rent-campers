import css from "./SearchBar.module.css";
import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import { getCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  setEquipmentFilter,
  setLocationFilter,
  setVehicleTypeFilter,
} from "../../redux/filters/slice";
import {
  selectFilters,
  selectLocationFilter,
  selectVehicleTypeFilter,
} from "../../redux/filters/selectors";
import { resetCampers } from "../../redux/campers/slice";

export default function SearchBar() {
  const dispatch = useDispatch();
  // const filters = useSelector(selectFilters);
  const locationFilter = useSelector(selectLocationFilter);
  const vehichleTypeFilter = useSelector(selectVehicleTypeFilter);

  // const handleEquipmentFilterChange = (equipment) => {
  //   dispatch(setEquipmentFilter(equipment));
  // };
  const handleEquipmentChange = (e) => {
    const { name, checked } = e.target;
    let updatedEquipment = [...filters.equipment];

    if (checked) {
      updatedEquipment.push(name); // Добавить в фильтр
    } else {
      updatedEquipment = updatedEquipment.filter((item) => item !== name); // Удалить из фильтра
    }

    dispatch(setEquipmentFilter(updatedEquipment));
  };

  const handleSearch = () => {
    dispatch(resetCampers());
    // dispatch(resetFilters());
    dispatch(
      getCampers({
        page: 1,
        limit: 4,
        filters: {
          locationFilter: locationFilter || "",
          vehichleTypeFilter: vehichleTypeFilter || "",
        },
      })
    );
  };

  // return (
  //   <div className={css.filters_container}>
  //     <h3>Filters</h3>

  //     {/* Location Filter */}
  //     <input
  //       type="text"
  //       placeholder="Enter location"
  //       value={filters.location}
  //       onChange={handleLocationChange}
  //     />

  //     {/* Vehicle Type Filter */}
  //     <select value={filters.form} onChange={handleVehicleTypeChange}>
  //       <option value="">Select Vehicle Type</option>
  //       <option value="alcove">Alcove</option>
  //       <option value="fullyIntegrated">FullyIntegrated</option>
  //       <option value="paneltrack">Paneltrack</option>
  //       <option value="van">Van</option>
  //     </select>

  //     {/* Equipment Filters */}
  //     <div>
  //       <label>
  //         <input
  //           type="checkbox"
  //           name="AC"
  //           checked={filters.equipment.includes("AC")}
  //           onChange={handleEquipmentChange}
  //         />
  //         Air Conditioning
  //       </label>
  //       <label>
  //         <input
  //           type="checkbox"
  //           name="bathroom"
  //           checked={filters.equipment.includes("bathroom")}
  //           onChange={handleEquipmentChange}
  //         />
  //         Bathroom
  //       </label>
  //       <label>
  //         <input
  //           type="checkbox"
  //           name="kitchen"
  //           checked={filters.equipment.includes("kitchen")}
  //           onChange={handleEquipmentChange}
  //         />
  //         Kitchen
  //       </label>
  //       {/* Добавьте остальные характеристики */}
  //     </div>

  //     {/* <button onClick={handleResetFilters}>Reset Filters</button> */}
  //   </div>
  // );

  return (
    <div>
      <div className={css.search_bar_panel}>
        <LocationFilter />
        <h3 className={css.filter_title}>Filters</h3>
        {/* <EquipmentFilter /> */}
        <VehicleTypeFilter />
        <button className={css.searchBbtn} type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
