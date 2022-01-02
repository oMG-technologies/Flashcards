import { render } from '@testing-library/react';
import NotFound from './NotFound';

import { BrowserRouter } from 'react-router-dom';

const MockNotFound = () => {
  return (
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
};

describe('NotFound Tests - render', () => {
  it('snapshot', () => {
    const tree = render(<MockNotFound />);

    expect(tree).toMatchSnapshot();
  });

  it('render without crashing', () => {
    render(<MockNotFound />);
  });
});
