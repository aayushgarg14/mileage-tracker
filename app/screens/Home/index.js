import React from 'react';

import { Container, FabBasic } from '../../components';
import { GenericStyles } from '../../utils/GenericStyles';
import { Main } from './components';

const HomeScreen = ({ navigation }) => {
  const renderBottomChild = () => {
    return (
      <FabBasic
        onPress={() => navigation.navigate('AddEntry')}
        testID="Home.Button"
      />
    );
  };

  const renderMainChild = () => {
    return <Main />;
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
