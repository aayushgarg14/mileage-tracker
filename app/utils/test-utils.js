import React from 'react';
import { render as rntlRender } from '@testing-library/react-native';
import { Provider } from 'react-redux';
// Import your own reducer
import { store as myStore } from '../store/index';

function render(
  ui,
  { preloadedState, store = myStore, ...renderOptions } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rntlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react-native';
// override render method
export { render };
