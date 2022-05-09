import { home } from '../utils/data';
import appReducer from './app/reducer';

describe('INITIAL_STATE', () => {
  it('is correct for timeline', () => {
    const action = { type: 'UPDATE_TIMELINE' };
    const initialState = {
      home: home,
      timeline: [],
    };

    expect(appReducer(undefined, action)).toEqual(initialState);
  });

  it('is correct for home', () => {
    const action = { type: 'UPDATE_HOME' };
    const initialState = {
      home: home,
      timeline: [],
    };

    expect(appReducer(undefined, action)).toEqual(initialState);
  });
});
