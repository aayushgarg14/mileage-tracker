import React from 'react';
import { StatusBar, View } from 'react-native';

import TextBasic from '../Text/Basic';

import styles from './styles';
import { GenericStyles, StyleConstants } from '../../utils/GenericStyles';
import IconBasic from '../Icon';
import { goBack } from '../../navigation/RootNavigation';

const Container = ({
  text,
  mainChild,
  bottomChild,
  isBackBtn,
  rightHeaderChild,
  mainChildStyle,
}) => {
  const renderContent = () => (
    <View style={styles.contentContainer}>
      <View style={[styles.contentTopContainer, mainChildStyle]}>
        {mainChild}
      </View>
      {bottomChild}
    </View>
  );

  const renderHeader = () => (
    <>
      <View style={styles.statusBarContainer}>
        <StatusBar
          backgroundColor={StyleConstants.color.$DARK}
          barStyle="light-content"
        />
      </View>
      <View style={styles.headerContainer}>
        <View style={[GenericStyles.fdr, GenericStyles.aic]}>
          {isBackBtn ? (
            <IconBasic
              name="arrowBack"
              color="#FFF"
              fontSize={20}
              iconStyle={GenericStyles.mr16}
              onPress={goBack}
            />
          ) : null}
          <TextBasic text={text} isBold isLarge />
        </View>
        {rightHeaderChild}
      </View>
    </>
  );

  return (
    <>
      {renderHeader()}
      {renderContent()}
    </>
  );
};

export default Container;
