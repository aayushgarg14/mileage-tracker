import React from 'react';

import { Container, FabBasic } from '../../components';
import { navigate } from '../../navigation/RootNavigation';
import { GenericStyles } from '../../utils/GenericStyles';
import { Main } from './components';

const HomeScreen = () => {
  const renderBottomChild = () => {
    return <FabBasic onPress={() => navigate('AddEntry')} />;
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
