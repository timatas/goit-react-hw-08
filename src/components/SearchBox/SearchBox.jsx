import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newSearch } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/selectors";
import css from "../SearchBox/SearchBox.module.css";

export const SearchBox = () => {
  const filterId = useId();
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <br />
      <input
        type="text"
        id={filterId}
        value={filterValue}
        onChange={(e) => dispatch(newSearch(e.target.value))}
      />
    </div>
  );
};
