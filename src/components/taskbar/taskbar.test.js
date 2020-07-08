import React from 'react';
import { render } from '@testing-library/react';
import TaskBar from './taskbar';

jest.mock('@react95/icons', () => 'icons')

test('renders taskbar', () => {
  render(<TaskBar />);
});