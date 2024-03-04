//

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CreateLessonScreen,
  CreateSectionScreen,
  CreateTaskScreen,
  DataScreen,
  HomeScreen,
  LessonScreen,
  SectionScreen,
} from './src/screens';

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
        <Stack.Screen name="Section" component={SectionScreen} />
        <Stack.Screen
          name="Lesson"
          component={LessonScreen}
          options={{
            title: 'Lección',
          }}
        />
        <Stack.Screen
          name="CreateSection"
          component={CreateSectionScreen}
          options={{
            title: 'Crear Sección',
          }}
        />
        <Stack.Screen
          name="CreateLesson"
          component={CreateLessonScreen}
          options={{
            title: 'Crear Lección',
          }}
        />
        <Stack.Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{
            title: 'Crear Tarea',
          }}
        />
        <Stack.Screen
          name="Data"
          component={DataScreen}
          options={{
            title: 'Datos',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
