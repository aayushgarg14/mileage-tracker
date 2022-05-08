import { StyleConstants } from '../../utils/GenericStyles';

const INITIAL_STATE = {
  home: {
    gas: {
      title: 'Gas',
      icon: 'gas',
      data: [
        {
          id: 1,
          icon: 'opacity',
          type: 'avgCons',
          name: 'Average fuel consumption',
          iconColor: StyleConstants.color.$BLUE,
          value: 0,
          displayValue: '0',
          initials: 'km/l',
          initial: 'post',
        },
        {
          id: 2,
          icon: 'trend',
          type: 'lastCons',
          name: 'Last fuel consumption',
          iconColor: StyleConstants.color.$BLUE,
          value: 0,
          displayValue: '0',
          initials: 'km/l',
          initial: 'post',
        },
        {
          id: 3,
          icon: 'trend',
          type: 'price',
          name: 'Last fuel price',
          iconColor: StyleConstants.color.$BLUE,
          value: 0,
          displayValue: '0',
          initials: 'Rs.',
          initial: 'pre',
        },
        {
          id: 4,
          type: 'lastUpdate',
          name: '',
        },
      ],
    },
    costs: {
      title: 'Costs',
      icon: 'currency',
      data: [
        {
          title: 'THIS MONTH',
          type: 'curr',
          data: [
            {
              id: 1,
              icon: 'gas',
              iconColor: StyleConstants.color.$BLUE,
              name: 'Gas',
              type: 'gas',
              value: 0,
              displayValue: '0.00',
              initials: 'Rs.',
              initial: 'pre',
            },
            {
              id: 2,
              icon: 'gas',
              iconColor: StyleConstants.color.$BLUE,
              name: 'Other costs',
              type: 'other',
              value: 0,
              displayValue: '0.00',
              initials: 'Rs.',
              initial: 'pre',
            },
          ],
        },
        {
          title: 'PREVIOUS MONTH',
          type: 'prev',
          data: [
            {
              id: 1,
              icon: 'gas',
              iconColor: StyleConstants.color.$BLUE,
              name: 'Gas',
              type: 'gas',
              value: 0,
              displayValue: '0.00',
              initials: 'Rs.',
              initial: 'pre',
            },
            {
              id: 2,
              icon: 'gas',
              iconColor: StyleConstants.color.$BLUE,
              name: 'Other costs',
              type: 'other',
              value: 0,
              displayValue: '0.00',
              initials: 'Rs.',
              initial: 'pre',
            },
          ],
        },
      ],
    },
    entries: {
      title: 'Last entries',
      icon: 'timeline',
      data: [],
    },
  },
  timeline: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  console.log('action', action.payload);
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
