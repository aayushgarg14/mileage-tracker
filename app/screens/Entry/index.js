import React from 'react';

import Form from './Form';
import { CardBasic, Container, IconBasic } from '../../components';
import { GenericStyles } from '../../utils/GenericStyles';
import useEntry from './useEntry';

const AddEntryScreen = ({ navigation }) => {
  const {
    formData: { control, handleSubmit, getValues, setValue, errors },
    isDatePickerVisible,
    isTimePickerVisible,
    submitHandler,
    toggleDatePickerHandler,
    toggleTimePickerHandler,
  } = useEntry(navigation);

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
        testID="AddEntry.Button"
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
