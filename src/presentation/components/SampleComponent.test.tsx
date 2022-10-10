import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { SampleComponent } from './SampleComponent';

describe('SampleComponent.tsx', () => {
  test('render SampleComponent', () => {
    render(<SampleComponent />);
    expect(screen.getByText('Sample Component')).toBeInTheDocument();
  });
});
