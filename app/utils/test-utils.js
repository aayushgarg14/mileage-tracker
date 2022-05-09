import React from 'react';
import { render as rntlRender } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { store as myStore } from '../store';

const mockStore = configureStore();
const store = mockStore(myStore.getState());

function render(ui, options) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rntlRender(ui, { wrapper: Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { render, store };
