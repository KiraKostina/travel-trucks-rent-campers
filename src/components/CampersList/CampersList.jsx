import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectIsLoading,
  selectTotalCampers,
} from "../../redux/campers/selectors";
import CamperCard from "../Camper/CamperCard";
import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  // console.log(campers);
  const isLoading = useSelector(selectIsLoading);

  const totalCampers = useSelector(selectTotalCampers);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    dispatch(getCampers({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  // const totalPages = Math.ceil(totalCampers / itemsPerPage);
  const canLoadMore = campers.length < totalCampers;

  const handleLoadMore = () => {
    if (canLoadMore && !isLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <ul className={css.camp_list}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
      {canLoadMore && !isLoading && (
        <button
          onClick={handleLoadMore}
          className={css.load_more_button}
          disabled={isLoading}
        >
          Load more
        </button>
      )}
    </>
  );
}
