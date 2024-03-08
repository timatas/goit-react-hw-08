import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "../redux/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      //===
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      //==

      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

// export const { fetchPending, fetchSuccess, fetchError } = contactsSlice.actions;

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
//******************
//  reducers: {
//     fetchPending(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchSuccess(state, action) {
//       state.loading = false;
//       state.error = null;
//       state.items.push(...action.payload);
//     },
//     fetchError(state) {
//       state.loading = false;
//       state.error = true;
//     },
//   },
