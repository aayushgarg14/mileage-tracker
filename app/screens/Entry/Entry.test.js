import React from 'react';
import { render, cleanup, fireEvent, act, store } from '../../utils/test-utils';
import AddEntryScreen from './index';

afterEach(() => {
  cleanup();
  store.clearActions();
});

it('renders', () => {
  render(<AddEntryScreen />);
});

describe('Testing Invalid Inputs', () => {
  it('shows empty input error messages', async () => {
    const { getByTestId, queryByTestId } = render(<AddEntryScreen />);
    await act(async () => {
      fireEvent.press(getByTestId('AddEntry.Button'));
    });

    const odometerErrorText = queryByTestId('Odometer.ErrorText');
    const gasErrorText = queryByTestId('Gas.ErrorText');
    const priceErrorText = queryByTestId('Price.ErrorText');

    expect(odometerErrorText.props.children).toEqual('Enter a number');
    expect(gasErrorText.props.children).toEqual('Enter a number');
    expect(priceErrorText.props.children).toEqual('Enter a number');
  });

  it('shows invalid input error messages', async () => {
    const { getByTestId, queryByTestId } = render(<AddEntryScreen />);
    fireEvent.changeText(getByTestId('Odometer.Input'), '1b00');

    await act(async () => {
      fireEvent.press(getByTestId('AddEntry.Button'));
    });

    const odometerErrorText = queryByTestId('Odometer.ErrorText');
    const gasErrorText = queryByTestId('Gas.ErrorText');
    const priceErrorText = queryByTestId('Price.ErrorText');

    expect(odometerErrorText.props.children).toEqual('Not a valid number');
    expect(gasErrorText.props.children).toEqual('Enter a number');
    expect(priceErrorText.props.children).toEqual('Enter a number');
  });
});

describe('Testing Total Cost', () => {
  it('should calculate correct value of cost w.r.t price and gas', async () => {
    const { getByTestId, queryByTestId } = render(<AddEntryScreen />);

    fireEvent.changeText(getByTestId('Gas.Input'), '5');
    fireEvent.changeText(getByTestId('Price.Input'), '105');

    const cost = queryByTestId('Cost.Input');
    expect(cost.props.value).toEqual('525.00');
  });
});

describe('Testing Success Button Press', () => {
  it('should dispatch update', async () => {
    const navigateMock = jest.fn();

    const { getByTestId } = render(
      <AddEntryScreen navigation={{ navigate: navigateMock }} />,
    );
    fireEvent.changeText(getByTestId('Odometer.Input'), '100');
    fireEvent.changeText(getByTestId('Gas.Input'), '5');
    fireEvent.changeText(getByTestId('Price.Input'), '105');

    await act(async () => {
      fireEvent.press(getByTestId('AddEntry.Button'));
    });

    const actions = store.getActions();
    expect(actions.length).toBe(2);
    expect(navigateMock).toBeCalledWith('Home');
  });
});
