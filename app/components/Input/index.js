import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { GenericStyles } from '../../utils/GenericStyles';
import TextBasic from '../Text/Basic';
import styles from './styles';

const InputBasic = ({
  focus,
  disabled,
  keyboardType,
  value,
  bottomText,
  error,
  errorText,
  onBlurHandler,
  label,
  clickInputHandler,
  updateInputHandler,
  containerStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  return (
    <View style={[GenericStyles.f1, containerStyle]}>
      <View
        style={[styles.inputContainer, error && styles.inputContainerError]}>
        <View
          style={[
            styles.labelContainer,
            (focus || isFocused || disabled) && styles.labelContainerFocused,
          ]}>
          <Text
            style={[
              styles.label,
              (focus || isFocused || disabled) && styles.labelFocused,
              error && GenericStyles.redColor,
            ]}>
            {label}
          </Text>
        </View>
        <TextInput
          value={value}
          editable={!disabled}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={onBlurHandler}
          keyboardType={keyboardType}
          blurOnSubmit
          onChangeText={updateInputHandler}
          onPressIn={clickInputHandler}
        />
      </View>
      {bottomText && (
        <View style={[GenericStyles.mt4, GenericStyles.ml4]}>
          <TextBasic text={bottomText} isSmall isLight />
        </View>
      )}
      {error && (
        <View style={[GenericStyles.mt4, GenericStyles.ml4]}>
          <Text style={[GenericStyles.redColor, GenericStyles.fontS]}>
            {errorText}
          </Text>
        </View>
      )}
    </View>
  );
};

export default InputBasic;
