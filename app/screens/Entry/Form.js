import React from 'react';
import { Pressable, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Controller } from 'react-hook-form';

import { GenericStyles } from '../../utils/GenericStyles';
import { IconBasic, InputBasic, PickerBasic } from '../../components';
import { formatDate, getMonth } from '../../utils/helperFunc';
import { inputRules } from '../../utils/data';

const Form = ({
  control,
  values,
  setValue,
  errors,
  isDatePickerVisible,
  toggleDatePickerHandler,
  isTimePickerVisible,
  toggleTimePickerHandler,
}) => {
  const timeline = useSelector(state => state.app.timeline);

  return (
    <View>
      <View style={GenericStyles.fdr}>
        {/* ODOMETER */}
        <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.f1]}>
          <IconBasic
            name="speedometer"
            isBlue
            iconStyle={GenericStyles.mr16}
            fontSize={20}
          />
          <Controller
            name="odometer"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputBasic
                label="Odometer (km)"
                keyboardType="numeric"
                value={value}
                error={errors?.odometer}
                errorText={errors?.odometer?.message}
                bottomText={`Last value: ${
                  timeline?.[0]?.displayLastOdometer || 0
                }`}
                onBlur={onBlur}
                updateInputHandler={onChange}
                testID="Odometer.Input"
                errorTestID="Odometer.ErrorText"
              />
            )}
            rules={{
              ...inputRules,
              validate: value =>
                value > (timeline?.[0]?.lastOdometer || 0) ||
                'It should be greater than last value',
            }}
          />
        </View>
      </View>

      {/* GAS & GAS TYPE */}
      <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.mt16]}>
        <IconBasic
          name="gas"
          isBlue
          iconStyle={GenericStyles.mr16}
          fontSize={20}
        />
        <View style={[GenericStyles.fdr, GenericStyles.f1, GenericStyles.jcs]}>
          {/* GAS */}
          <Controller
            name="gas"
            control={control}
            render={({ field }) => {
              const { onChange, onBlur, value } = field;
              const onChangeHandler = v => {
                const price = values('price');
                if (price) {
                  setValue('cost', (v * price).toFixed(2).toString());
                }

                onChange(v);
              };

              return (
                <InputBasic
                  label="Gas (l)"
                  keyboardType="numeric"
                  value={value}
                  error={errors?.gas}
                  errorText={errors?.gas?.message}
                  onBlur={onBlur}
                  updateInputHandler={onChangeHandler}
                />
              );
            }}
            rules={inputRules}
          />

          {/* GAS TYPE */}
          <Controller
            name="type"
            control={control}
            defaultValue="Regular"
            render={() => (
              <InputBasic
                containerStyle={GenericStyles.ml16}
                label="Gas type"
                value="Regular"
                disabled={true}
              />
            )}
          />
        </View>
      </View>

      {/* PRICE/L & TOTAL COST */}
      <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.mt16]}>
        <IconBasic
          name="currency"
          isBlue
          iconStyle={GenericStyles.mr16}
          fontSize={20}
        />
        <View style={[GenericStyles.fdr, GenericStyles.f1, GenericStyles.jcs]}>
          {/* PRICE/L */}
          <Controller
            name="price"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              const onChangeHandler = v => {
                const gas = values('gas');
                if (gas) {
                  setValue('cost', (v * gas).toFixed(2).toString());
                }

                onChange(v);
              };

              return (
                <InputBasic
                  label="Price/L"
                  keyboardType="numeric"
                  value={value}
                  error={errors?.price}
                  errorText={errors?.price?.message}
                  onBlur={onBlur}
                  updateInputHandler={onChangeHandler}
                />
              );
            }}
            rules={inputRules}
          />

          {/* TOTAL COST */}
          <Controller
            name="cost"
            control={control}
            render={({ field: { value } }) => (
              <InputBasic
                containerStyle={GenericStyles.ml16}
                label="Total cost"
                value={value}
                disabled={true}
              />
            )}
            rules={inputRules}
          />
        </View>
      </View>

      {/* CALENDAR */}
      <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.mt16]}>
        <IconBasic
          name="calendar"
          iconStyle={GenericStyles.mr16}
          isBlue
          fontSize={20}
        />
        <View style={[GenericStyles.fdr, GenericStyles.f1, GenericStyles.jcs]}>
          {/* DATE */}
          <Controller
            name="date"
            control={control}
            defaultValue={{
              timestamp: Date.now(),
              date: formatDate('now', 'YYYY-MM-DD'),
              month: getMonth(),
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <Pressable
                  style={[GenericStyles.f1, GenericStyles.fdr]}
                  onPress={toggleDatePickerHandler}>
                  <InputBasic
                    label="Date"
                    focus={true}
                    disabled={true}
                    pointerEvents="none"
                    value={value?.date || formatDate('now', 'YYYY-MM-DD')}
                    error={errors?.date}
                    errorText={errors?.date?.message}
                  />
                </Pressable>
                <PickerBasic
                  isPickerVisible={isDatePickerVisible}
                  hideDatePickerHandler={toggleDatePickerHandler}
                  confirmPickerHandler={onChange}
                />
              </>
            )}
          />

          {/* TIME */}
          <Controller
            name="time"
            control={control}
            defaultValue={{
              timestamp: Date.now(),
              time: formatDate('now', 'hh:mm A'),
            }}
            render={({ field: { onChange, value } }) => {
              return (
                <>
                  <Pressable
                    style={[GenericStyles.f1, GenericStyles.fdr]}
                    onPress={toggleTimePickerHandler}>
                    <InputBasic
                      containerStyle={GenericStyles.ml16}
                      label="Time"
                      focus={true}
                      disabled={true}
                      value={value?.time || formatDate('now', 'hh:mm A')}
                      error={errors?.time}
                      errorText={errors?.time?.message}
                    />
                  </Pressable>
                  <PickerBasic
                    mode="time"
                    isPickerVisible={isTimePickerVisible}
                    hideDatePickerHandler={toggleTimePickerHandler}
                    confirmPickerHandler={onChange}
                  />
                </>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Form;
