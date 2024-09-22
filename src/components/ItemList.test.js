import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

describe('ItemList', () => {
  const items = [
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'Delhi' },
  ];

  it('renders a list of cities', () => {
    render(<ItemList items={items} searchTerm="" />);

    // Assert that city names are rendered
    expect(screen.getByText('Mumbai')).toBeInTheDocument();
    expect(screen.getByText('Delhi')).toBeInTheDocument();
  });

  it('filters the list of cities based on searchTerm', () => {
    render(<ItemList items={items} searchTerm="Delhi" />);

    // Ensure only 'Delhi' is rendered based on the search term
    expect(screen.getByText('Delhi')).toBeInTheDocument();
    expect(screen.queryByText('Mumbai')).not.toBeInTheDocument();
  });

  it('shows no cities found if no match', () => {
    render(<ItemList items={items} searchTerm="Pune" />);

    // Assert that no cities are found
    expect(screen.getByText('No cities found.')).toBeInTheDocument();
  });
});
