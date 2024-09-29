import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import { selectCampers, selectIsLoading } from "../../redux/campers/selectors";
import CamperCard from "../Camper/CamperCard";
import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";

export default function CampersList() {
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <div className={css.camperlist_container}>
        <ul className={css.camp_list}>
          {campers.length > 0 ? (
            campers.map((camper) => (
              <li key={camper.id}>
                <CamperCard camper={camper} />
              </li>
            ))
          ) : (
            <p>No campers found.</p>
          )}
        </ul>
      </div>
    </>
  );
}
