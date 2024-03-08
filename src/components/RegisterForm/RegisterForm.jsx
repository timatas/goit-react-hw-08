import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  password: Yup.string()
    .min(8, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

export const RegisterForm = () => {
  const nameId = useId();
  const passwordId = useId();
  const emailId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(e.target.elements.email.value);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Login is success!");
      })
      .catch(() => {
        toast.error("Login is error!");
      });

    form.reset();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={ContactFormSchema}
      onSubmit={(value, actions) => {
        dispatch(register({ id: nanoid(3), ...value }));
        actions.resetForm();
      }}
    >
      <Form className={css.form} onSubmit={handleSubmit} autoComplete="on">
        <div className={css.formGroup}>
          <label htmlFor={nameId}>Username</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={emailId}>Email</label>
          <Field type="email" name="email" id={emailId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={passwordId}>Password</label>
          <Field type="password" name="password" id={passwordId} />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};
//========
// return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
