import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { formatDate, formatTime } from '../../utils/helperFunc';

const PickerBasic = ({
  mode,
  isPickerVisible,
  confirmPickerHandler,
  hideDatePickerHandler,
}) => {
  const handleConfirm = date => {
    hideDatePickerHandler();
    confirmPickerHandler(
      mode === 'time'
        ? { timestamp: new Date(date).getTime(), time: formatTime(date) }
        : {
            timestamp: Date.now(),
            date: formatDate(date),
            month: new Date(date).getMonth(),
          },
    );
  };

  return (
    <DateTimePickerModal
      isVisible={isPickerVisible}
      mode={mode || 'date'}
      onConfirm={handleConfirm}
      onCancel={hideDatePickerHandler}
      maximumDate={new Date()}
    />
  );
};

export default PickerBasic;
