import React from 'react';
import { StatusBar, View } from 'react-native';

import TextBasic from '../Text';

import styles from './styles';
import { StyleConstants } from '../../utils/GenericStyles';

const Container = ({
  text,
  mainChild,
  bottomChild,
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
          backgroundColor={StyleConstants.color.$PRIMARY}
          barStyle="light-content"
        />
      </View>
      <View style={styles.headerContainer}>
        <TextBasic text={text} isBold isLarge />
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
