import React from 'react';

import { Container, FabBasic } from '../../components';
import { navigate } from '../../navigation/RootNavigation';
import { GenericStyles } from '../../utils/GenericStyles';
import { Main } from './components';
import useHome from './useHome';

const HomeScreen = () => {
  const { home } = useHome();

  const renderBottomChild = () => {
    return <FabBasic onPress={() => navigate('AddEntry')} />;
  };

  const renderMainChild = () => {
    return <Main home={home} />;
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
