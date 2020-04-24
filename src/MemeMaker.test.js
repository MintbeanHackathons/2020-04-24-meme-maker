import React from 'react';
import { render } from '@testing-library/react';
import MemeMaker from './MemeMaker';

test('renders learn react link', () => {
  const { getByText } = render(<MemeMaker />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
