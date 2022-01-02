import { render } from '@testing-library/react';
import Loaded from './Loaded';

import { BrowserRouter } from 'react-router-dom';

const MockLoaded = () => {
  return (
    <BrowserRouter>
      <Loaded />
    </BrowserRouter>
  );
};

describe('Loaded Tests - render', () => {
  it('snapshot', () => {
    const tree = render(<MockLoaded />);

    expect(tree).toMatchSnapshot();
  });

  it('render without crashing', () => {
    render(<MockLoaded />);
  });
});
