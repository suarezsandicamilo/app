//

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/home_screen';

import { PathScreen } from './src/screens/path_screen';

import { SectionScreen } from './src/screens/section_screen';

import { AdminScreen } from './src/screens/admin_screen';

import { CreateSectionScreen } from './src/screens/create_section_screen';

import { CreateLessonScreen } from './src/screens/create_lesson_screen';

import { CreateTaskScreen } from './src/screens/create_task_screen';

import { DataScreen } from './src/screens/data_screen';

const Stack = createNativeStackNavigator();

const App = () => {
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
        <Stack.Screen
          name="CreateSection"
          component={CreateSectionScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateLesson"
          component={CreateLessonScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Data"
          component={DataScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
