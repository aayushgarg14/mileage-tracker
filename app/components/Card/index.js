import React from 'react';
import { Card } from 'react-native-elements';
import {
  CircleStyles,
  DimensionsStyles,
  GenericStyles,
} from '../../utils/GenericStyles';

import styles from './styles';

const CardBasic = ({
  isCenter,
  isCircle,
  size,
  cardContainerStyle,
  cardWrapperStyle,
  children,
}) => {
  const { circle } = CircleStyles(size);
  const { dimensions } = DimensionsStyles(size, size);

  return (
    <Card
      containerStyle={[
        styles.cardBasicContainer,
        isCircle && circle,
        isCenter && GenericStyles.fc,
        size && dimensions,
        cardContainerStyle,
      ]}
      wrapperStyle={cardWrapperStyle}>
      {children}
    </Card>
  );
};

export default CardBasic;
