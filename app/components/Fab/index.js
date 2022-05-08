import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-elements';
import { StyleConstants } from '../../utils/GenericStyles';
import IconBasic from '../Icon';

const FabBasic = ({ onPress }) => {
  return (
    <FAB
      color={StyleConstants.color.$BLUE}
      style={styles.container}
      icon={<IconBasic name="add" fontSize={24} color="white" />}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default FabBasic;
