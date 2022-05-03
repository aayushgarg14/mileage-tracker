import React from 'react';
import { Icon } from 'react-native-elements';

import { StyleConstants } from '../../utils/GenericStyles';

const IconBasic = ({ name, fontSize, color, onPress, iconStyle }) => {
  const type =
    (name === 'add' && 'material') ||
    (name === 'arrowBack' && 'material') ||
    (name === 'arrowDown' && 'material') ||
    (name === 'check' && 'material') ||
    (name === 'checked' && 'material') ||
    (name === 'currency' && 'material-community') ||
    (name === 'dot' && 'material') ||
    (name === 'gas' && 'material') ||
    (name === 'home' && 'antdesign') ||
    (name === 'unchecked' && 'material') ||
    (name === 'opacity' && 'material') ||
    (name === 'speedometer' && 'material-community') ||
    (name === 'timeline' && 'material') ||
    (name === 'trend' && 'material');

  const iconName =
    (name === 'add' && 'add') ||
    (name === 'arrowBack' && 'arrow-back') ||
    (name === 'arrowDown' && 'keyboard-arrow-down') ||
    (name === 'check' && 'check') ||
    (name === 'checked' && 'radio-button-checked') ||
    (name === 'currency' && 'currency-inr') ||
    (name === 'dot' && 'stop-circle') ||
    (name === 'gas' && 'local-gas-station') ||
    (name === 'home' && 'home') ||
    (name === 'unchecked' && 'radio-button-unchecked') ||
    (name === 'opacity' && 'opacity') ||
    (name === 'speedometer' && 'speedometer') ||
    (name === 'timeline' && 'timeline') ||
    (name === 'trend' && 'trending-up');

  return (
    <Icon
      name={iconName}
      type={type}
      size={fontSize || 14}
      color={color || StyleConstants.color.$GREY}
      style={iconStyle}
      onPress={onPress}
    />
  );
};

export default IconBasic;
