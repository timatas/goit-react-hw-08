import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return filter
      ? contacts.filter(
          (item) =>
            item.name.toLowerCase().includes(filter.toLowerCase()) ||
            item.number.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  }
);
//=================================
// export const selectFilteredContacts = (state) => {
//   console.log(selectFilteredContacts);

//   const contactItem = selectContacts(state); =contacts в createSelector
//   const filterValue = selectFilter(state); =filter в createSelector

//   return filterValue
//     ? contactItem.filter((item) =>
//         item.name.toLowerCase().includes(filterValue.toLowerCase())
//       )
//     : contactItem;
// };
