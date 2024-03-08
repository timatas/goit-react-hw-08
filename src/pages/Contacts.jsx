import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { fetchContacts } from "../redux/operations";
import { selectIsLoading } from "../redux/selectors";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Phonebook</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
