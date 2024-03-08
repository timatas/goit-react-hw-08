import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    newSearch: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { newSearch } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

//  extraReducers: (builder) =>
//     builder
//       .addCase(changeFilter.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(changeFilter.fulfilled, (state, action) => {
//         state.loading = false;
//         state.name = action.payload;
//       })
//       .addCase(changeFilter.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       }),
