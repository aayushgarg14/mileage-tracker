import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigate } from '../../navigation/RootNavigation';

const TimelineScreen = () => {
  return (
    <SafeAreaView>
      <Text>This is my Timeline Screen</Text>
      <TouchableOpacity onPress={() => navigate('AddEntry')}>
        <Text>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TimelineScreen;
