import React from 'react';
import { Text } from 'react-native';
import { GenericStyles } from '../../utils/GenericStyles';
import styles from './styles';

const TextBasic = ({
  isBold,
  isLarge,
  isLight,
  isBlue,
  isSmall,
  isSmaller,
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
      isSmaller && GenericStyles.fontXS,
      isLight && GenericStyles.lightColor,
      isBlue && GenericStyles.blueColor,
      textStyle,
    ]}>
    {text}
  </Text>
);

export default TextBasic;
