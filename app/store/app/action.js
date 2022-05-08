export const updateHomeAction = data => {
  return {
    type: 'UPDATE_HOME',
    payload: data,
  };
};

export const updateTimelineAction = data => {
  return {
    type: 'UPDATE_TIMELINE',
    payload: data,
  };
};
