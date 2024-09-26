import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import CamperCard from "../Camper/CamperCard";
import css from "./CampersList.module.css";

export default function CampersList() {
  const campers = useSelector(selectCampers);
  //   console.log(campers);

  return (
    <>
      <ul className={css.camp_list}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </>
  );
}
