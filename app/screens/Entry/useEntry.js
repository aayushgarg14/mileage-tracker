import { useState } from 'react';

import { StyleConstants } from '../../utils/GenericStyles';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateHomeAction, updateTimelineAction } from '../../store/app/action';
import { formatDate, getDateFromNow } from '../../utils/helperFunc';
import { goBack } from '../../navigation/RootNavigation';

const useEntry = () => {
  const dispatch = useDispatch();
  const home = useSelector(state => state.app.home);
  const timeline = useSelector(state => state.app.timeline);
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const submitHandler = inputData => {
    const avgCons = timeline?.[0]?.lastOdometer
      ? (parseFloat(inputData.odometer, 10) - timeline[0].lastOdometer) /
        parseFloat(inputData.gas, 10)
      : 0;

    dispatch(
      updateHomeAction({
        gas: {
          ...home.gas,
          data: home.gas.data.map(each =>
            each.type === 'price'
              ? {
                  ...each,
                  value: parseFloat(inputData.price, 10),
                  displayValue: inputData.price,
                  iconColor:
                    parseFloat(inputData.price, 10) > each.value
                      ? StyleConstants.color.$GREEN
                      : StyleConstants.color.$RED,
                }
              : each.type === 'lastCons'
              ? {
                  ...each,
                  value: avgCons,
                  displayValue: avgCons.toString(),
                  iconColor:
                    avgCons > each.value
                      ? StyleConstants.color.$GREEN
                      : StyleConstants.color.$RED,
                }
              : each.type === 'avgCons'
              ? {
                  ...each,
                  value: each.value ? (each.value + avgCons) / 2 : avgCons,
                  displayValue: each.value
                    ? (each.value + avgCons) / 2
                    : avgCons.toString(),
                }
              : each.type === 'lastUpdate'
              ? {
                  ...each,
                  lastUpdateDate: inputData.date.date,
                  name: `${formatDate(
                    inputData.date.date,
                    'YYYY-DD-MM',
                  )}•${getDateFromNow(inputData.date.date)}`,
                }
              : each,
          ),
        },
        entries: {
          ...home.entries,
          data: [
            {
              icon: 'gas',
              iconColor: StyleConstants.color.$BLUE,
              heading: formatDate(inputData.date.date, 'DD MMMM YYYY'),
              displayValue: inputData.cost,
              name: 'Refueling',
              initials: 'Rs.',
              initial: 'pre',
            },
            ...home.entries?.data?.slice(0, 1),
          ],
        },
      }),
    );

    dispatch(
      updateTimelineAction({
        title: formatDate(inputData.date.timestamp, 'MMM YYYY'),
        key: inputData.date.month,
        lastPrice: parseFloat(inputData.price, 10),
        totalCost:
          inputData.date.month === timeline?.[0]?.key
            ? timeline[0].totalCost + parseFloat(inputData.cost, 10)
            : parseFloat(inputData.cost, 10),
        lastUpdateDate: inputData.date.date,
        lastOdometer: parseFloat(inputData.odometer, 10),
        displayLastOdometer: `${inputData.odometer} km`,
        data: [
          {
            ...inputData,
            title: 'Refueling',
            displayCost: `Rs. ${inputData.cost}`,
            price: parseFloat(inputData.price, 10),
            cost: parseFloat(inputData.cost, 10),
            odometer: parseFloat(inputData.odometer, 10),
            displayOdometer: `${inputData.odometer} km`,
            displayDate: formatDate(inputData.date.date, 'dddd, DD'),
            id: Date.now(),
          },
        ],
      }),
    );

    goBack();
  };

  const toggleDatePickerHandler = () => {
    setDatePickerVisible(prev => !prev);
  };

  const toggleTimePickerHandler = () => {
    setTimePickerVisible(prev => !prev);
  };

  return {
    formData: { control, handleSubmit, getValues, setValue, errors },
    isDatePickerVisible,
    isTimePickerVisible,
    submitHandler,
    toggleDatePickerHandler,
    toggleTimePickerHandler,
  };
};

export default useEntry;
