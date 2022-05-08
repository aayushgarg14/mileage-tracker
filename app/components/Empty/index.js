import React from 'react';
import { GenericStyles } from '../../utils/GenericStyles';
import IconBasic from '../Icon';
import TextBasic from '../Text/Basic';

const EmptyBasic = () => (
  <>
    <IconBasic name="empty" fontSize={36} iconStyle={GenericStyles.mb16} />
    <TextBasic
      text="No data available"
      // eslint-disable-next-line react-native/no-inline-styles
      textStyle={{ textAlign: 'center' }}
      isLight
    />
  </>
);

export default EmptyBasic;
