import { render } from '@testing-library/react';

import TsLibA from './ts-lib-a';

describe('TsLibA', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TsLibA />);
    expect(baseElement).toBeTruthy();
  });
});
