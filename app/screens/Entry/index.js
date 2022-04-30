import React from 'react';
import { Button } from 'react-native';

import { Container } from '../../components';
import { Form } from './components';
import { GenericStyles } from '../../utils/GenericStyles';
import { useForm } from 'react-hook-form';

const AddEntryScreen = () => {
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = data => console.log(data);

  const renderMainChild = () => {
    return (
      <Form
        control={control}
        values={getValues}
        setValue={setValue}
        register={register}
        errors={errors}
      />
    );
  };

  const renderRightHeaderChild = () => {
    return <Button title="Submit" onPress={handleSubmit(submitHandler)} />;
  };

  return (
    <Container
      mainChildStyle={GenericStyles.phMain}
      text="Refueling"
      mainChild={renderMainChild()}
      rightHeaderChild={renderRightHeaderChild()}
    />
  );
};

export default AddEntryScreen;
