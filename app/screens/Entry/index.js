import React from 'react';
import { Button } from 'react-native';

import { CardBasic, Container } from '../../components';
import { Form } from './components';
import { GenericStyles } from '../../utils/GenericStyles';
import { useForm } from 'react-hook-form';
import IconBasic from '../../components/Icon';

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
