import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigate } from '../../navigation/RootNavigation';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>This is my Home Screen</Text>
      <TouchableOpacity onPress={() => navigate('AddEntry')}>
        <Text>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
