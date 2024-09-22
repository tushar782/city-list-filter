import { createSlice } from '@reduxjs/toolkit';

// Initial state with a list of Indian cities and the search term
const initialState = {
  items: [
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'Delhi' },
    { id: 3, name: 'Bangalore' },
    { id: 4, name: 'Chennai' },
    { id: 5, name: 'Kolkata' },
    { id: 6, name: 'Hyderabad' },
    { id: 7, name: 'Pune' },
    { id: 8, name: 'Ahmedabad' },
    { id: 9, name: 'Jaipur' },
    { id: 10, name: 'Surat' },
  ],
  searchTerm: '', // Holds the search query to filter the cities
};

// Create a slice to manage cities and search term
const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // Action to set the search term when the user types in the search input
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// Export actions and selectors
export const { setSearchTerm } = itemSlice.actions;
export const selectItems = (state) => state.items.items; // Selector to get the list of cities
export const selectSearchTerm = (state) => state.items.searchTerm; // Selector to get the search term

export default itemSlice.reducer;
