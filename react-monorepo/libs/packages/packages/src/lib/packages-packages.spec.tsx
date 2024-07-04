import { render } from '@testing-library/react';

import PackagesPackages from './packages-packages';

describe('PackagesPackages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesPackages />);
    expect(baseElement).toBeTruthy();
  });
});
