import React from 'react';
import { FAB } from 'react-native-elements';
import { StyleConstants } from '../../utils/GenericStyles';
import IconBasic from '../Icon';

const FabBasic = ({ onPress }) => {
  return (
    <FAB
      color={StyleConstants.color.$BLUE}
      style={{ alignSelf: 'flex-end', right: 16, bottom: 16 }}
      icon={<IconBasic name="add" fontSize={24} color="white" />}
      onPress={onPress}
    />
  );
};

export default FabBasic;
