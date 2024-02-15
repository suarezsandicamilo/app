//

import { useState } from 'react';

import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { AppHeader } from '../components/app_header';

import { AppButton } from '../components/app_button';

import { ThemeContext, getColor } from '../colors';

const AdminScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const styles = StyleSheet.create({
    buttonsContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
    },
    container: {
      backgroundColor: getColor(theme, 'body_bg'),
      flex: 1,
    },
  });

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={getColor(theme, 'primary')} />
        <AppHeader
          text="Administrador"
          leftIcon="arrow-back"
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          onRightIconPress={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
        <View style={styles.buttonsContainer}>
          <AppButton
            text="Crear Sección"
            onPress={() => {
              navigation.navigate('CreateSection');
            }}
          />
          <AppButton
            text="Crear Lección"
            onPress={() => {
              navigation.navigate('CreateLesson');
            }}
          />
          <AppButton
            text="Crear Tarea"
            onPress={() => {
              navigation.navigate('CreateTask');
            }}
          />
          <AppButton
            text="Datos"
            onPress={() => {
              navigation.navigate('Data');
            }}
          />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { AdminScreen };
