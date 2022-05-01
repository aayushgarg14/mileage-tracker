import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FAB } from 'react-native-elements';

import { CardBasic, Container, FabBasic } from '../../components';
import IconBasic from '../../components/Icon';
import TextBasic from '../../components/Text';
import { navigate } from '../../navigation/RootNavigation';
import { GenericStyles, StyleConstants } from '../../utils/GenericStyles';

const data = {
  gas: {
    heading: 'Gas',
    icon: 'gas',
    data: [
      {
        id: 1,
        icon: 'opacity',
        name: 'Average fuel consumption',
        iconColor: StyleConstants.color.$BLUE,
        value: '6.458',
        initials: 'mi/l',
        postInitial: true,
      },
      {
        id: 2,
        icon: 'trend',
        name: 'Last fuel consumption',
        value: '6.894',
        initials: 'mi/l',
        postInitial: true,
      },
      {
        id: 3,
        icon: 'trend',
        iconColor: StyleConstants.color.$RED,
        name: 'Last fuel price',
        value: '1.419',
        initials: '$',
        preInitial: true,
      },
    ],
  },
};

const HomeScreen = () => {
  const renderBottomChild = () => {
    return <FabBasic onPress={() => navigate('AddEntry')} />;
  };

  const renderMainChild = () => {
    return (
      <View>
        {Object.keys(data).map(each => (
          <Fragment>
            <CardBasic
              cardContainerStyle={[GenericStyles.asc, GenericStyles.mb16]}
              cardWrapperStyle={GenericStyles.fdr}
              isCenter>
              <IconBasic
                name={data[each].icon}
                color={StyleConstants.color.$BLUE}
              />
              <View style={GenericStyles.ml4}>
                <TextBasic text={data[each].heading} />
              </View>
            </CardBasic>
            <CardBasic>
              {data[each].data.map((item, index) => (
                <Fragment key={item.id}>
                  <View
                    style={[
                      GenericStyles.fdr,
                      GenericStyles.aic,
                      GenericStyles.jcs,
                    ]}>
                    <View style={[GenericStyles.fdr, GenericStyles.aic]}>
                      <IconBasic
                        name={item.icon}
                        color={item.iconColor}
                        iconStyle={GenericStyles.mr4}
                      />
                      <TextBasic text={item.value} />
                      <View style={GenericStyles.ml4}>
                        <TextBasic text={item.initials} isSmall isLight />
                      </View>
                    </View>
                    <TextBasic text={item.name} isSmall isLight />
                  </View>
                  {data[each].data.length - 1 > index ? (
                    <View style={GenericStyles.mb16} />
                  ) : null}
                </Fragment>
              ))}
            </CardBasic>
          </Fragment>
        ))}
      </View>
    );
  };

  return (
    <Container
      mainChildStyle={GenericStyles.phMain}
      mainChild={renderMainChild()}
      bottomChild={renderBottomChild()}
    />
  );
};

export default HomeScreen;
