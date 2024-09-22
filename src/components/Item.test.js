import { render, screen } from '@testing-library/react';
import Item from './Item';

describe('Item', () => {
  it('renders the item name', () => {
    render(<Item name="Mumbai" />);

    // Assert that the item name is rendered
    expect(screen.getByText('Mumbai')).toBeInTheDocument();
  });
});
