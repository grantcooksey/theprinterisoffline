import React from 'react';
import { render } from '@testing-library/react';
import Menu from './menu';

jest.mock('@react95/icons', () => 'icons')

test('renders menu', () => {
  render(<Menu />);
});