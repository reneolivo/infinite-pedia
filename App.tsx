import { Provider } from '@ant-design/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import { antThemeOverrides } from './constants/antThemeOverrides';
import { InfinitePediaScreensType } from './types/InfinitePediaScreensType';
import { BlueprintsListScreen } from './screens/BlueprintsListScreen';
import { BlueprintDetailsScreen } from './screens/BlueprintDetailsScreen';

const Stack = createNativeStackNavigator<InfinitePediaScreensType>();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Font.loadAsync(
      'antoutline',
      require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    )
      .then(() => setIsReady(true));
  }, []);

  return (
    <Provider theme={antThemeOverrides}>
      {!isReady
        ? <Text>Loading...</Text>
        : renderNavigation()}
    </Provider>
  );

  function renderNavigation() {
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
}



