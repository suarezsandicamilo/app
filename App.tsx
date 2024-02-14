//

import { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/home_screen';

import { PathScreen } from './src/screens/path_screen';

import { AdminScreen } from './src/screens/admin_screen';

import { SectionScreen } from './src/screens/section_screen';

import { DataController } from './src/controllers/data_controller';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    (async () => {
      // NOTE: IF DEVELOPMENT
      await DataController.clear('sections');

      await DataController.start(true);
    })();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Path"
          component={PathScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Admin"
          component={AdminScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Section"
          component={SectionScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
