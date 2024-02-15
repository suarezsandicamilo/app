//

import { useState } from 'react';

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { AppHeader } from '../components/app_header';

import { ThemeContext, getColor } from '../colors';

const CreateTaskScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const styles = StyleSheet.create({
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
          text="Crear Tarea"
          leftIcon="arrow-back"
          onLeftIconPress={() => {
            navigation.goBack();
          }}
          onRightIconPress={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { CreateTaskScreen };
