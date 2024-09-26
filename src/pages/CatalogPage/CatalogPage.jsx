import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import Loader from "../../components/Loader/Loader";
import { getCampers } from "../../redux/campers/operations";
import { selectIsLoading } from "../../redux/campers/selectors";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <Loader />}
      <CampersList />
    </div>
  );
}
