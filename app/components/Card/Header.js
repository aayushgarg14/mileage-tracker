import React from 'react';
import { View } from 'react-native';

import { GenericStyles, StyleConstants } from '../../utils/GenericStyles';
import CardBasic from './Basic';
import IconBasic from '../Icon';
import TextBasic from '../Text/Basic';

const CardHeader = ({ data }) => (
  <CardBasic
    cardContainerStyle={[GenericStyles.asc, GenericStyles.mb16]}
    cardWrapperStyle={[GenericStyles.fdr, GenericStyles.aic]}
    isCenter>
    <IconBasic name={data.icon} color={StyleConstants.color.$BLUE} />
    <View style={GenericStyles.ml4}>
      <TextBasic text={data.title} />
    </View>
  </CardBasic>
);

export default CardHeader;
