import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Controller } from 'react-hook-form';

import { GenericStyles } from '../../utils/GenericStyles';
import { IconBasic, InputBasic, PickerBasic } from '../../components';
import { formatDate, formatTime } from '../../utils/helperFunc';
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
                value={value}
                error={errors?.odometer}
                errorText={errors?.odometer?.message}
                // bottomText={`Last value: ${
                //   timeline?.[0]?.displayLastOdometer || 0
                // }`}
                onBlur={onBlur}
                updateInputHandler={onChange}
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
              date: formatDate(Date.now()),
              month: new Date().getMonth(),
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputBasic
                  label="Date"
                  focus={true}
                  disabled={true}
                  value={value?.date || formatDate(Date.now())}
                  error={errors?.price}
                  errorText={errors?.price?.message}
                  onBlur={onBlur}
                  clickInputHandler={toggleDatePickerHandler}
                />
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
              time: formatTime(Date.now()),
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <InputBasic
                  containerStyle={GenericStyles.ml16}
                  label="Time"
                  focus={true}
                  disabled={true}
                  value={value?.time || formatTime(Date.now())}
                  error={errors?.price}
                  errorText={errors?.price?.message}
                  onBlur={onBlur}
                  clickInputHandler={toggleTimePickerHandler}
                />
                <PickerBasic
                  mode="time"
                  isPickerVisible={isTimePickerVisible}
                  hideDatePickerHandler={toggleTimePickerHandler}
                  confirmPickerHandler={onChange}
                />
              </>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Form;
