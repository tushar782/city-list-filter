import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectSearchTerm } from '../redux/itemSlice';
import Item from './Item';

const ITEMS_PER_PAGE = 3; // Limit items per page for pagination

const ItemList = () => {
  const items = useSelector(selectItems); // Get the list of items from the Redux store
  const searchTerm = useSelector(selectSearchTerm); // Get the search term from the Redux store
  const [currentPage, setCurrentPage] = useState(1); // Track the current page number

  // useMemo ensures the filtered list of items is recalculated only when items or searchTerm change
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter items based on the search term
    );
  }, [items, searchTerm]); // Re-run the filter function only when items or searchTerm change

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem); // Show only items for the current page

  // Function to change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ul className="item-list">
        {/* If there are filtered items, display them, otherwise show a message */}
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <Item key={item.id} name={item.name} /> // Display the item (memoized)
          ))
        ) : (
          <p>No items found.</p>
        )}
      </ul>

      {/* Pagination buttons */}
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filteredItems.length / ITEMS_PER_PAGE) }, // Create pagination based on total filtered items
          (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ItemList;
