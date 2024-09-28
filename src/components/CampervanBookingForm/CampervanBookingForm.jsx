import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./CampervanBookingForm.module.css";
import toast from "react-hot-toast";
import clsx from "clsx";

const validationBookingSchema = Yup.object({
  name: Yup.string().max(32, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  bookingdate: Yup.date()
    .min(new Date(), "You can't select a past date")
    .typeError("please enter a valid date")
    .required("Required"),
  comment: Yup.string().min(3, "Too Short!").max(64, "Too Long!"),
});

const handleSubmit = (values, actions) => {
  toast.success("You booked a camper successfully!");
  actions.resetForm();
};

export default function CampervanBookingForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        bookingdate: "",
        comment: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationBookingSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form} autoComplete="off">
          <h3 className={css.form_title}>Book your campervan now</h3>
          <p className={css.form_text}>
            Stay connected! We are always ready to help you.
          </p>
          <div className={css.formContainer}>
            <Field
              //   className={css.form_field}
              className={clsx(css.user_info_input, {
                [css["input_error"]]: errors.name && touched.name,
              })}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css["error-message"]}
            />

            <Field
              //   className={css.form_field}
              className={clsx(css.user_info_input, {
                [css["input_error"]]: errors.email && touched.email,
              })}
              type="text"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css["error-message"]}
            />

            <Field
              //   className={css.form_field}
              className={clsx(css.user_info_input, {
                [css["input_error"]]: errors.date && touched.date,
              })}
              type="date"
              name="bookingdate"
              placeholder="Booking date*"
            />
            <ErrorMessage
              name="bookingdate"
              component="span"
              className={css["error-message"]}
            />

            <Field
              //   className={css.form_field}
              className={clsx(css.user_info_input_textarea, {
                [css["input_error"]]: errors.comment && touched.comment,
              })}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage name="comment" component="span" />
          </div>
          <button className={css.sendBtn} type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}
