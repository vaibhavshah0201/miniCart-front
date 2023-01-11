import React from 'react';
import {Button, Text, View} from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailScreen;
