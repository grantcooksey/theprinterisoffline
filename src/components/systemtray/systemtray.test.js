import React from 'react';
import { render } from '@testing-library/react';
import SystemTray from './systemtray';

jest.mock('@react95/icons', () => 'icons')

test('renders systemtray', () => {
  render(<SystemTray />);
});
