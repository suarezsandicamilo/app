//

import { useEffect, useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { Section } from '../models/section';

import { SectionsController } from '../controllers/sections_controller';

import { AppButton } from '../components/app_button';

import { AppHeader } from '../components/app_header';

import { ThemeContext, getColor } from '../colors';

const CreateLessonScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Data
  const [sections, setSections] = useState<Section[]>([]);

  // Form Data
  const [section, setSection] = useState<Section>();

  // Fetch Data
  useEffect(() => {
    (async () => {
      setSections(await SectionsController.all());
    })();
  }, []);

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
    picker: {
      color: getColor(theme, 'body_color'),
    },
    pickerContainer: {
      borderColor: getColor(theme, 'border_color'),
      borderRadius: 4,
      borderWidth: 1,
      marginBottom: 10,
    },
  });

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={getColor(theme, 'primary')} />
        <AppHeader
          text="Crear Lección"
          leftIcon="arrow-back"
          onLeftIconPress={() => navigation.goBack()}
          onRightIconPress={() =>
            setTheme(theme === 'light' ? 'dark' : 'light')
          }
        />
        <View style={styles.form}>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={section}
              onValueChange={(section) => setSection(section)}
            >
              {sections.map((section) => (
                <Picker.Item
                  key={section.id}
                  label={section.name}
                  value={section}
                />
              ))}
            </Picker>
          </View>
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

export { CreateLessonScreen };
