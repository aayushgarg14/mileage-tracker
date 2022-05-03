import React from 'react';
import { View } from 'react-native';
import IconBasic from '../../../components/Icon';
import TextBasic from '../../../components/Text';
import { GenericStyles, StyleConstants } from '../../../utils/GenericStyles';

const ItemHeader = ({ title }) => (
  <View style={{ flexDirection: 'row', flex: 1, height: 40 }}>
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        left: 11,
        top: -2,
      }}>
      <IconBasic name="dot" fontSize={20} color={StyleConstants.color.$BLUE} />
    </View>
    <View
      style={[
        GenericStyles.fdr,
        GenericStyles.jcs,
        // GenericStyles.aic,
        GenericStyles.blueBorderColor,
        {
          flex: 1,
          borderLeftWidth: 2,
          paddingLeft: 20,
          marginLeft: 20,
        },
      ]}>
      <View style={GenericStyles.ml16}>
        <TextBasic text={title} isBold isSmall isBlue />
      </View>
    </View>
  </View>
);

export default ItemHeader;
