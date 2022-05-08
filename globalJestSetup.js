import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock.js';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Silence the warning Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Cannot read property 'catch' of undefined. This mock will bypasses redux-persist
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-native/Libraries/LogBox/LogBox');
