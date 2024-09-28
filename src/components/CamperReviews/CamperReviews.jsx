import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import css from "./CamperReviews.module.css";
import sprite from "../../img/symbol-defs.svg";
import CampervanBookingForm from "../CampervanBookingForm/CampervanBookingForm";

export default function CamperReviews() {
  const { reviews = [] } = useSelector(selectCamper);

  return (
    <div>
      <div className={css.block_container}>
        <div>
          <ul className={css.camper_reviews}>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <li className={css.review_item} key={index}>
                  <div className={css.ava_name_container}>
                    <div className={css.avatar}>
                      {review.reviewer_name.charAt(0)}
                    </div>
                    <div className={css.reviewer_info}>
                      <p className={css.reviewer_name}>
                        {review.reviewer_name}
                      </p>

                      <div className={css.reviewer_rating}>
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg
                            key={i}
                            className={css.star_icon}
                            style={{
                              fill:
                                i < review.reviewer_rating
                                  ? "#ffc531"
                                  : "#f2f4f7",
                            }}
                          >
                            <use xlinkHref={`${sprite}#icon-Rating`}></use>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className={css.review_comment}>{review.comment}</p>
                </li>
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </ul>
        </div>
        <CampervanBookingForm />
      </div>
    </div>
  );
}
