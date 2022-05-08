import { StyleConstants } from './GenericStyles';

const inputRules = {
  required: {
    value: true,
    message: 'Enter a number',
  },
  pattern: {
    value: /^\d+(\.\d+)?$/,
    message: 'Not a valid number',
  },
};

const home = {
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
        id: 1,
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
            icon: 'other',
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
        id: 2,
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
            icon: 'other',
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
};

export { inputRules, home };
