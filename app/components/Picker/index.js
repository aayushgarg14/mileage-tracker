import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useSelector } from 'react-redux';
import { formatDate, getMonth, getTimestamp } from '../../utils/helperFunc';

const PickerBasic = ({
  mode,
  isPickerVisible,
  confirmPickerHandler,
  hideDatePickerHandler,
}) => {
  const timeline = useSelector(state => state.app.timeline);

  const handleConfirm = date => {
    hideDatePickerHandler();
    confirmPickerHandler(
      mode === 'time'
        ? { timestamp: getTimestamp(date), time: formatDate(date, 'hh:mm a') }
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
      minimumDate={
        timeline?.[0]?.lastUpdateDate
          ? new Date(timeline[0].lastUpdateDate)
          : null
      }
      maximumDate={new Date()}
    />
  );
};

export default PickerBasic;
