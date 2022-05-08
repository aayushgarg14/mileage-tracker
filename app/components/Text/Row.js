import React from 'react';
import { View } from 'react-native';
import { GenericStyles } from '../../utils/GenericStyles';
import IconBasic from '../Icon';
import TextBasic from './Basic';

const TextRow = ({ data }) => (
  <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.jcs]}>
    <View style={[GenericStyles.fdr, GenericStyles.aic]}>
      {data.icon ? (
        <IconBasic
          name={data.icon}
          color={data.iconColor}
          iconStyle={GenericStyles.mr8}
        />
      ) : null}
      {data.initial === 'pre' ? <TextBasic text={data.initials} /> : null}
      <TextBasic text={data.displayValue} />
      {data.initial === 'post' ? (
        <View style={GenericStyles.ml4}>
          <TextBasic text={data.initials} isSmall isLight />
        </View>
      ) : null}
    </View>
    <TextBasic text={data.name} isSmall isLight />
  </View>
);

export default TextRow;
