import { formatDayjs } from '../../utils/helperFunc';

const INITIAL_STATE = {
  timeline: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  console.log('action', action, state);
  switch (action.type) {
    case 'UPDATE_LIST':
      let updatedData = '';
      const newObj = {
        title: formatDayjs(action.payload?.date?.timestamp, 'MMM YYYY'),
        key: action.payload?.date?.month,
        data: [action.payload],
      };

      if (state.timeline.length) {
        const myIndex = state.timeline.findIndex(
          item => item.key === action.payload?.date?.month,
        );
        if (myIndex !== -1) {
          updatedData = [
            ...state.timeline.slice(0, myIndex),
            newObj,
            ...state.timeline.slice(myIndex + 1),
          ];
        }
      } else {
        updatedData = [...state.timeline, newObj];
      }

      console.log('updatedData', updatedData);

      return { state, timeline: updatedData };
    default:
      return state;
  }
};

export default appReducer;
