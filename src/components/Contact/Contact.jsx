import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import DeleteIcon from "@mui/icons-material/Delete";

export const Contact = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className={css.contactCard}>
        <div className={css.contactInfo}>
          <p>
            <BsFillPersonFill />
            {item.name}
          </p>
          <p>
            <BsFillTelephoneFill />
            {item.number}
          </p>
        </div>
        <button
          onClick={() => dispatch(deleteContact(item.id))}
          className={css.btnDelete}
        >
          <DeleteIcon />
          Delete
        </button>
      </div>
    </li>
  );
};
