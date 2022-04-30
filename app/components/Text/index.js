import React from 'react';
import { Text } from 'react-native';
import { GenericStyles } from '../../utils/GenericStyles';
import styles from './styles';

const TextBasic = ({
  isBold,
  isLarge,
  isSmall,
  text,
  numberOfLines,
  onPress,
  textStyle,
}) => (
  <Text
    maxFontSizeMultiplier={1}
    numberOfLines={numberOfLines}
    onPress={onPress}
    style={[
      styles.textContainer,
      isBold && GenericStyles.bold,
      isLarge && GenericStyles.fontL,
      isSmall && GenericStyles.fontS,
      textStyle,
    ]}>
    {text}
  </Text>
);

export default TextBasic;
