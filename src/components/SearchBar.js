import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/itemSlice';

const SearchBar = () => {
  const dispatch = useDispatch(); // Use Redux's dispatch to send actions

  // Handle changes in the search input
  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value)); // Dispatch action to update the search term in Redux store
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search items..."
        onChange={handleChange} // Calls handleChange on every input change
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
