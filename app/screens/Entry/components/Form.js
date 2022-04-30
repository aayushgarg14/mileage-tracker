import React from 'react';
import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import { GenericStyles } from '../../../utils/GenericStyles';
import { InputBasic } from '../../../components';

const inputRules = {
  required: {
    value: true,
    message: 'Enter a number',
  },
  pattern: {
    value: /^\d+(\.\d+)?$/,
    message: 'Not a valid number',
  },
};

const Form = ({ control, values, setValue, errors }) => {
  return (
    <View>
      <View style={GenericStyles.fdr}>
        {/* ODOMETER */}
        <Controller
          name="odometer"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBasic
              label="Odometer (mi)"
              value={value}
              error={errors?.odometer}
              errorText={errors?.odometer?.message}
              onBlur={onBlur}
              updateInputHandler={onChange}
            />
          )}
          rules={inputRules}
        />
      </View>

      {/* GAS & GAS TYPE */}
      <View style={[GenericStyles.fdr, GenericStyles.jcs, GenericStyles.mt16]}>
        {/* GAS */}
        <Controller
          name="gas"
          control={control}
          render={({ field }) => {
            const { onChange, onBlur, value } = field;
            const onChangeHandler = v => {
              const price = values('price');
              if (price) {
                setValue('cost', (v * price).toString());
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

      {/* PRICE/L & TOTAL COST */}
      <View style={[GenericStyles.fdr, GenericStyles.jcs, GenericStyles.mt16]}>
        {/* PRICE/L */}
        <Controller
          name="price"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            const onChangeHandler = v => {
              const gas = values('gas');
              if (gas) {
                setValue('cost', (v * gas).toString());
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
  );
};

export default Form;
