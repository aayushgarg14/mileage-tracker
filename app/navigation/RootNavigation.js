import * as React from 'react';

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () => {
  /** In case of deeplinking, there is not screen to go back to hence navigating to home page */
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  } else {
    navigate('Home');
  }
  return true;
};

export { goBack, navigate };
