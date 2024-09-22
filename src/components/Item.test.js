import { render, screen } from '@testing-library/react';
import Item from './Item';

describe('Item', () => {
  it('renders the item name', () => {
    render(<Item name="Nagpur" />);

    // Assert that the item name is rendered
    expect(screen.getByText('Nagpur')).toBeInTheDocument();
  });
});
