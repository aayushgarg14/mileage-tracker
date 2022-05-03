import React from 'react';
import { View } from 'react-native';
import IconBasic from '../../../components/Icon';
import TextBasic from '../../../components/Text';
import { CircleStyles, GenericStyles } from '../../../utils/GenericStyles';

const ItemContainer = ({ data }) => {
  const Item = ({ item }) => (
    <View
      style={[
        GenericStyles.fdr,
        GenericStyles.jcs,
        GenericStyles.blueBorderColor,
        {
          flex: 1,
          borderLeftWidth: 2,
          paddingLeft: 20,
          marginLeft: 20,
        },
      ]}>
      <View style={GenericStyles.ml16}>
        <TextBasic text={item.title} />
        <View style={GenericStyles.mt4}>
          <TextBasic text={item.day} isSmall isLight />
        </View>
        <View style={[GenericStyles.fdr, GenericStyles.aic, GenericStyles.mt4]}>
          <IconBasic name="speedometer" />
          <View style={GenericStyles.ml4}>
            <TextBasic text={item.odometer} isSmall isLight />
          </View>
        </View>
      </View>
      <TextBasic text={item.displayCost} />
    </View>
  );

  return (
    <View style={{ flexDirection: 'row', flex: 1, height: 100 }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
        }}>
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
