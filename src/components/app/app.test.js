import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

jest.mock('@react95/icons', () => 'icons')

test('renders app', () => {
  render(<App />);
});
