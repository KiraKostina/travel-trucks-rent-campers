import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getCampers } from "../../redux/campers/operations";
import { selectIsLoading } from "../../redux/campers/selectors";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <div className={css.catalog_container}>
        <SearchBar />
        <CampersList />
      </div>
    </div>
  );
}
