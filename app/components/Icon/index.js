import React from 'react';
import { Icon } from 'react-native-elements';

import { StyleConstants } from '../../utils/GenericStyles';

const IconBasic = ({
  name,
  fontSize,
  isBlue,
  color,
  onPress,
  iconStyle,
  ...props
}) => {
  const type =
    (name === 'add' && 'material') ||
    (name === 'arrowBack' && 'material') ||
    (name === 'arrowDown' && 'material') ||
    (name === 'calendar' && 'antdesign') ||
    (name === 'check' && 'material') ||
    (name === 'checked' && 'material') ||
    (name === 'currency' && 'material-community') ||
    (name === 'dot' && 'material') ||
    (name === 'empty' && 'material') ||
    (name === 'gas' && 'material') ||
    (name === 'home' && 'antdesign') ||
    (name === 'menu' && 'material') ||
    (name === 'opacity' && 'material') ||
    (name === 'other' && 'material-community') ||
    (name === 'speedometer' && 'material-community') ||
    (name === 'timeline' && 'material') ||
    (name === 'trend' && 'material') ||
    (name === 'unchecked' && 'material');

  const iconName =
    (name === 'add' && 'add') ||
    (name === 'arrowBack' && 'arrow-back') ||
    (name === 'arrowDown' && 'keyboard-arrow-down') ||
    (name === 'calendar' && 'calendar') ||
    (name === 'check' && 'check') ||
    (name === 'checked' && 'radio-button-checked') ||
    (name === 'currency' && 'currency-inr') ||
    (name === 'dot' && 'stop-circle') ||
    (name === 'empty' && 'hourglass-empty') ||
    (name === 'gas' && 'local-gas-station') ||
    (name === 'home' && 'home') ||
    (name === 'menu' && 'menu') ||
    (name === 'opacity' && 'opacity') ||
    (name === 'other' && 'cash-100') ||
    (name === 'speedometer' && 'speedometer') ||
    (name === 'timeline' && 'timeline') ||
    (name === 'trend' && 'trending-up') ||
    (name === 'unchecked' && 'radio-button-unchecked');

  return (
    <Icon
      name={iconName}
      type={type}
      size={fontSize || 14}
      color={
        color ||
        (isBlue && StyleConstants.color.$BLUE) ||
        StyleConstants.color.$GREY
      }
      style={iconStyle}
      onPress={onPress}
      {...props}
    />
  );
};

export default IconBasic;
