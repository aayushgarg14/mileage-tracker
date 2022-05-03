import React from 'react';

import { CardBasic, Container } from '../../components';
import { Form } from './components';
import { GenericStyles } from '../../utils/GenericStyles';
import { useForm } from 'react-hook-form';
import IconBasic from '../../components/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { updateListAction } from '../../store/app/action';

const AddEntryScreen = () => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.app.list);
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  console.log('list', list);

  const submitHandler = data => {
    console.log(data);
    dispatch(
      updateListAction({
        heading: 'Refueling',
        displayPrice: `Rs. ${data.cost}`,
        price: parseInt(data.cost, 10),
        day: 'Monday, 02',
        date: '2021-05-02',
        month: 'may',
        id: new Date().getTime(),
      }),
    );
  };

  const renderMainChild = () => {
    return (
      <CardBasic>
        <Form
          control={control}
          values={getValues}
          setValue={setValue}
          register={register}
          errors={errors}
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
