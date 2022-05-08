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
    const dateObj = new Date(date);
    hideDatePickerHandler();
    confirmPickerHandler(
      mode === 'time'
        ? { timestamp: dateObj.getTime(), time: formatTime(date) }
        : {
            timestamp: dateObj.getTime(),
            date: formatDate(date),
            month: dateObj.getMonth(),
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
