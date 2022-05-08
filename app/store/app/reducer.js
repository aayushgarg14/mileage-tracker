import { home } from '../../utils/data';

const INITIAL_STATE = {
  home: home,
  timeline: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_HOME': {
      let updatedData = action.payload;
      return { ...state, home: { ...state.home, ...updatedData } };
    }
    case 'UPDATE_TIMELINE': {
      let updatedData = state.timeline;

      if (
        state.timeline.length &&
        state.timeline[0].key === action.payload?.key
      ) {
        updatedData = [
          {
            ...action.payload,
            data: [...action.payload.data, ...state.timeline[0].data],
          },
          ...state.timeline.slice(1),
        ];
      } else {
        updatedData = [action.payload, ...state.timeline];
      }

      return { ...state, timeline: updatedData };
    }
    default:
      return state;
  }
};

export default appReducer;
