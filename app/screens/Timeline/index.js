import React from 'react';
import { SectionList } from 'react-native';
import { useSelector } from 'react-redux';

import { navigate } from '../../navigation/RootNavigation';
import { Container, FabBasic } from '../../components';
import { GenericStyles } from '../../utils/GenericStyles';
import { ItemContainer, ItemHeader } from './components';

const TimelineScreen = () => {
  const list = useSelector(state => state.app.list);
  console.log('list', list);

  const renderBottomChild = () => {
    return <FabBasic onPress={() => navigate('AddEntry')} />;
  };

  const renderItem = ({ item }) => <ItemContainer data={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <ItemHeader title={title} />
  );

  const renderMainChild = () => {
    return (
      <SectionList
        sections={list}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
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

export default TimelineScreen;
