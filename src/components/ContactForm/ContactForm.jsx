import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/operations";
import { useDispatch } from "react-redux";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
export const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactFormSchema}
      onSubmit={(value, actions) => {
        dispatch(addContact({ id: nanoid(3), ...value }));
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formGroup}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={numberId}>Number</label>
          <Field type="number" name="number" id={numberId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
