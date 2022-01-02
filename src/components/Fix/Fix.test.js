import { render } from '@testing-library/react';
import Fix from './Fix';

import { BrowserRouter } from 'react-router-dom';

const MockFix = () => {
  return (
    <BrowserRouter>
      <Fix />
    </BrowserRouter>
  );
};

describe('Fix Tests - render', () => {
  it('snapshot', () => {
    const tree = render(<MockFix />);

    expect(tree).toMatchSnapshot();
  });

  it('render without crashing', () => {
    render(<MockFix />);
  });
});
