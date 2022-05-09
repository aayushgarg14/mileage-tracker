import React from 'react';
import { render, fireEvent } from '../../utils/test-utils';
import TimelineScreen from './index';

jest.mock('@react-navigation/native', () => ({
  useIsFocused: jest.fn(),
}));

it('renders', () => {
  render(<TimelineScreen />);
});

it('navigates to the AddEntryScreen', () => {
  const navigateMock = jest.fn();
  const { toJSON, getByTestId } = render(
    <TimelineScreen navigation={{ navigate: navigateMock }} />,
  );

  fireEvent.press(getByTestId('Timeline.Button'));

  expect(navigateMock).toBeCalledWith('AddEntry');
  expect(toJSON()).toMatchSnapshot();
});
