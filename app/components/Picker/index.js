import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { formatDate, getMonth, getTimestamp } from '../../utils/helperFunc';

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
        ? { timestamp: getTimestamp(date), time: formatDate('now', 'hh:mm a') }
        : {
            timestamp: getTimestamp(date),
            date: formatDate(date, 'YYYY-MM-DD'),
            month: getMonth(date),
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
