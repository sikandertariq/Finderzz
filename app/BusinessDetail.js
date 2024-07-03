// BusinessDetail.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BusinessDetail({ route }) {
  const navigation = useNavigation();
  const { business } = route.params;

  return (
    <View>
      <Text>{business.name}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
