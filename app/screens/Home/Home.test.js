import React from 'react';
import { render, fireEvent } from '../../utils/test-utils';
import HomeScreen from './index';

jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn(),
}));

it('renders', () => {
  render(<HomeScreen />);
});

it('navigates to the AddEntryScreen', () => {
  const navigateMock = jest.fn();
  const { toJSON, getByTestId } = render(
    <HomeScreen navigation={{ navigate: navigateMock }} />,
  );

  fireEvent.press(getByTestId('Home.Button'));

  expect(navigateMock).toBeCalledWith('AddEntry');
  expect(toJSON()).toMatchSnapshot();
});
