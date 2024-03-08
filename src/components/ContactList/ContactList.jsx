import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/selectors.js";

export const ContactList = () => {
  const contactItem = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.list}>
        {contactItem.map((item) => (
          <Contact key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
//=======
