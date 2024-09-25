import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={css.background}>
      <section className={css.homeSection}>
        <h1 className={css.homeTitle}>Campers of your dreams</h1>
        <h3 className={css.homeMotto}>
          You can find everything you want in our catalog
        </h3>
        <button className={css.viewBbtn} onClick={handleClick}>
          View Now
        </button>
      </section>
    </div>
  );
}
