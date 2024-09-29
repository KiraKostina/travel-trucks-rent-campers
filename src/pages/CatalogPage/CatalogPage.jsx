import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import FiltersDraft from "../../components/черновик/FiltersDraft";
import { getCampers } from "../../redux/campers/operations";
import {
  selectCampers,
  selectIsLoading,
  selectTotalCampers,
} from "../../redux/campers/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  // console.log(campers);
  // console.log(filters);
  const totalCampers = useSelector(selectTotalCampers);
  // console.log(totalCampers);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    dispatch(getCampers({ filters, page: currentPage, limit }));
  }, [dispatch, currentPage, filters]);

  const canLoadMore = campers.length < totalCampers;

  const handleLoadMore = () => {
    if (canLoadMore && !isLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <div className={css.catalog_container}>
        <SearchBar />
        <div className={css.list_and_button}>
          <CampersList />

          {isLoading && currentPage === 1 && <Loader />}

          {canLoadMore && (
            <button
              onClick={handleLoadMore}
              className={css.load_more_button}
              disabled={isLoading}
            >
              Load more
            </button>
          )}

          {isLoading && currentPage > 1 && <Loader />}
        </div>
      </div>
    </div>
  );
}
