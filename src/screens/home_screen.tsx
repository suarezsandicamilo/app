//

import { useState } from 'react';

import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from '@rneui/base';

import { AdminScreen } from './admin_screen';

import { SectionScreen } from './section_screen';

import { Section } from '../models';

import { SectionsController } from '../controllers';

import { useEffectAsync } from '../hooks';

import { getColor } from '../colors';

const Tab = createBottomTabNavigator();

// const Empty = () => {
//   const styles = StyleSheet.create({
//     container: {
//       margin: 20,
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <ActivityIndicator color={getColor('primary')} size="large" />
//     </View>
//   );
// };

const HomeScreen = () => {
  const [done, setDone] = useState(false);

  const [sections, setSections] = useState<Section[]>([]);

  useEffectAsync(async () => {
    setSections(await SectionsController.all());

    setDone(true);
  }, []);

  let navigator = <></>;

  if (done) {
    navigator = (
      <Tab.Navigator>
        <Tab.Screen
          name="Section"
          component={SectionScreen}
          initialParams={{
            section: sections[0],
          }}
          options={{
            title: 'Sección',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Admin"
          component={AdminScreen}
          options={{
            title: 'Administrador',
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" color={color} size={size} />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    );
  }

  return navigator;
};

export { HomeScreen };
