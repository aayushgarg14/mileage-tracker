import React from 'react';
import { View } from 'react-native';

import { IconBasic, TextBasic } from '../../../components';
import { CircleStyles, GenericStyles } from '../../../utils/GenericStyles';
import styles from './styles';

const ItemContainer = ({ data }) => {
  const Item = ({ item }) => (
    <View style={styles.item}>
      <View style={GenericStyles.ml16}>
        <TextBasic text={item.title} />
        <View style={GenericStyles.mt4}>
          <TextBasic text={item.displayDate} isSmall isLight />
        </View>
        <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.mt8]}>
          <IconBasic name="speedometer" color="#FFF" />
          <View style={GenericStyles.ml4}>
            <TextBasic text={item.displayOdometer} isSmall isLight />
          </View>
        </View>
      </View>
      <TextBasic text={item.displayCost} />
    </View>
  );

  return (
    <View style={styles.itemContainer}>
      <View style={styles.dotContainer}>
        <View
          style={[
            CircleStyles(40).circle,
            GenericStyles.fc,
            GenericStyles.blueBGColor,
          ]}>
          <IconBasic name="gas" fontSize={24} color="#FFF" />
        </View>
      </View>
      <Item item={data} />
    </View>
  );
};

export default ItemContainer;
