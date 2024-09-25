import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import Camper from "../Camper/Camper";

export default function CampersList() {
  const campers = useSelector(selectCampers);
  //   console.log(campers);

  return (
    <>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    </>
  );
}
