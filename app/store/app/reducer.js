const INITIAL_STATE = {
  list: [{ title: 'May 2021', key: 'may', data: [] }],
};

const appReducer = (state = INITIAL_STATE, action) => {
  console.log('action', action, state);
  switch (action.type) {
    case 'UPDATE_LIST':
      const updatedData = state.list.map(item => {
        console.log('item', item);
        return item.key === action.payload.month
          ? { ...item, data: [...item.data, action.payload] }
          : item;
      });

      console.log('updatedData', updatedData);

      return { state, list: updatedData };
    default:
      return state;
  }
};

export default appReducer;
