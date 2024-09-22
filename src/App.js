import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <h1>Item Filter</h1>
      <SearchBar /> {/* Search input component */}
      <ItemList />  {/* List of items (filtered and paginated) */}
    </div>
  );
}

export default App;
