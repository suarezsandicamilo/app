//

import { useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { AppButton } from '../components/app_button';

import { AppHeader } from '../components/app_header';

import { ThemeContext, getColor } from '../colors';

const CreateTaskScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor(theme, 'body_bg'),
      flex: 1,
    },
    form: {
      margin: 20,
    },
    formTextInput: {
      borderColor: getColor(theme, 'border_color'),
      borderRadius: 4,
      borderWidth: 1,
      height: 40,
      marginBottom: 10,
      padding: 10,
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
        <View style={styles.form}>
          <TextInput
            style={styles.formTextInput}
            placeholder="Nombre"
            placeholderTextColor={getColor(theme, 'body_color')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Descripción"
            placeholderTextColor={getColor(theme, 'body_color')}
          />
          <AppButton text="Enviar" />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { CreateTaskScreen };
