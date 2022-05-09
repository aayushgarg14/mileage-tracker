import React from 'react';
import { SectionList } from 'react-native';
import { useSelector } from 'react-redux';

import { Container, EmptyBasic, FabBasic } from '../../components';
import { GenericStyles } from '../../utils/GenericStyles';
import { ItemContainer, ItemHeader } from './components';

const TimelineScreen = ({ navigation }) => {
  const timeline = useSelector(state => state.app.timeline);

  const renderBottomChild = () => (
    <FabBasic
      onPress={() => navigation.navigate('AddEntry')}
      testID="Timeline.Button"
    />
  );

  const renderEmpty = () => <EmptyBasic />;

  const renderItem = ({ item }) => {
    return <ItemContainer data={item} />;
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <ItemHeader title={title} />
  );

  const renderMainChild = () => (
    <SectionList
      sections={timeline}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      ListEmptyComponent={renderEmpty}
    />
  );

  return (
    <Container
      mainChildStyle={GenericStyles.phMain}
      mainChild={renderMainChild()}
      bottomChild={renderBottomChild()}
    />
  );
};

export default TimelineScreen;
