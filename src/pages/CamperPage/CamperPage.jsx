import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CamperDetailedInfo from "../../components/CamperDetailedInfo/CamperDetailedInfo";
import { getCamperById } from "../../redux/campers/operations";
import { selectCamper, selectCampers } from "../../redux/campers/selectors";

export default function CamperPage() {
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [id]);
  console.log(camper);
  return (
    <div>
      <CamperDetailedInfo camper={camper} />
    </div>
  );
}
