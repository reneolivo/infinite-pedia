import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { InfinitePediaScreensType } from './types/InfinitePediaScreensType';
import { BlueprintsListScreen } from './screens/BlueprintsListScreen';
import { BlueprintDetailsScreen } from './screens/BlueprintDetailsScreen';

const Stack = createNativeStackNavigator<InfinitePediaScreensType>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="Home"
          component={BlueprintsListScreen}
        />
        <Stack.Screen
          name="Blueprint Details"
          component={BlueprintDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



