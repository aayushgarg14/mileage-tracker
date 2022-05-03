import React, { useState } from 'react';

import { CardBasic, Container } from '../../components';
import { Form } from './components';
import { GenericStyles } from '../../utils/GenericStyles';
import { useForm } from 'react-hook-form';
import IconBasic from '../../components/Icon';
import { useDispatch } from 'react-redux';
import { updateTimelineAction } from '../../store/app/action';
import { formatDayjs } from '../../utils/helperFunc';

const AddEntryScreen = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const [isDatePickerVisible, setDatePickerVisible] = useState();
  const [isTimePickerVisible, setTimePickerVisible] = useState();

  const submitHandler = data => {
    console.log(data);
    dispatch(
      updateTimelineAction({
        ...data,
        title: 'Refueling',
        displayCost: `Rs. ${data.cost}`,
        cost: parseInt(data.cost, 10),
        odometer: parseInt(data.odometer, 10),
        displayOdometer: `${data.odometer} km`,
        displayDate: formatDayjs(data.date.date, 'dddd, DD'),
        id: Date.now(),
      }),
    );
  };

  const toggleDatePickerHandler = () => {
    setDatePickerVisible(prev => !prev);
  };

  const toggleTimePickerHandler = () => {
    setTimePickerVisible(prev => !prev);
  };

  const renderMainChild = () => {
    return (
      <CardBasic>
        <Form
          control={control}
          values={getValues}
          setValue={setValue}
          errors={errors}
          isDatePickerVisible={isDatePickerVisible}
          toggleDatePickerHandler={toggleDatePickerHandler}
          isTimePickerVisible={isTimePickerVisible}
          toggleTimePickerHandler={toggleTimePickerHandler}
        />
      </CardBasic>
    );
  };

  const renderRightHeaderChild = () => {
    return (
      <IconBasic
        name="check"
        color="#FFF"
        fontSize={20}
        onPress={handleSubmit(submitHandler)}
      />
    );
  };

  return (
    <Container
      mainChildStyle={GenericStyles.phMain}
      text="Refueling"
      isBackBtn={true}
      mainChild={renderMainChild()}
      rightHeaderChild={renderRightHeaderChild()}
    />
  );
};

export default AddEntryScreen;
