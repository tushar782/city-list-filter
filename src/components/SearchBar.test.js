import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from './SearchBar';
import { setSearchTerm } from '../redux/itemSlice';

const mockStore = configureStore([]);

describe('SearchBar', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      items: { searchTerm: '' }
    });
  });

  it('renders search input', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    // Assert input field is rendered
    const input = screen.getByPlaceholderText('Search items...');
    expect(input).toBeInTheDocument();
  });

  it('dispatches search term on input change', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search items...');
    fireEvent.change(input, { target: { value: 'Nagpur' } });

    // Check if the setSearchTerm action was dispatched
    const actions = store.getActions();
    expect(actions[0]).toEqual(setSearchTerm('Nagpur'));
  });
});
