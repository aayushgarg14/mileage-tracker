import React from 'react';
import { View } from 'react-native';

import { IconBasic, TextBasic } from '../../../components';
import { GenericStyles, StyleConstants } from '../../../utils/GenericStyles';
import styles from './styles';

const ItemHeader = ({ title }) => (
  <View style={styles.itemHeaderContainer}>
    <View style={styles.itemHeaderDotContainer}>
      <IconBasic name="dot" fontSize={20} color={StyleConstants.color.$BLUE} />
    </View>
    <View style={styles.itemHeader}>
      <View style={GenericStyles.ml16}>
        <TextBasic text={title} isBold isSmall isBlue />
      </View>
    </View>
  </View>
);

export default ItemHeader;
