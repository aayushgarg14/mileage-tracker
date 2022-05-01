import React from 'react';
import { View } from 'react-native';
import { Controller } from 'react-hook-form';
import { GenericStyles } from '../../../utils/GenericStyles';
import { InputBasic } from '../../../components';
import IconBasic from '../../../components/Icon';

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
        <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.f1]}>
          <IconBasic
            name="speedometer"
            iconStyle={GenericStyles.mr16}
            fontSize={20}
          />
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
      </View>

      {/* GAS & GAS TYPE */}
      <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.mt16]}>
        <IconBasic name="gas" iconStyle={GenericStyles.mr16} fontSize={20} />
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
      </View>

      {/* PRICE/L & TOTAL COST */}
      <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.mt16]}>
        <IconBasic
          name="currency"
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
    </View>
  );
};

export default Form;
