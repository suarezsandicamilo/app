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

import { Lesson } from '../models/lesson';

import { Task } from '../models/task';

import { SectionsController } from '../controllers/sections_controller';

import { LessonsController } from '../controllers/lessons_controller';

import { TasksController } from '../controllers/tasks_controller';

import { AppButton } from '../components/app_button';

import { AppHeader } from '../components/app_header';

import { ThemeContext, getColor } from '../colors';

const CreateTaskScreen = ({ navigation }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Data
  const [sections, setSections] = useState<Section[]>([]);

  const [lessons, setLessons] = useState<Lesson[]>([]);

  // Form Data
  const [section, setSection] = useState<Section>();

  const [lesson, setLesson] = useState<Lesson>();

  const [task, setTask] = useState<Partial<Task>>({});

  const update = (key: keyof Task, value: any) => {
    setTask((task) => ({
      ...task,
      [key]: value,
    }));
  };

  // Fetch Data
  useEffect(() => {
    (async () => {
      setSections(await SectionsController.all());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (section != null) {
        setLessons(await LessonsController.allOf(section));
      }
    })();
  }, [section]);

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
    requiredFormTextInput: {
      borderColor: getColor(theme, 'danger'),
      borderWidth: 1,
    },
  });

  const getTextInputStyle = (key: keyof Task) => {
    const value = task[key];

    if (typeof value === 'string') {
      if (value.length > 0) {
        return [styles.formTextInput];
      }

      return [styles.formTextInput, styles.requiredFormTextInput];
    }

    return [styles.formTextInput];
  };

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={getColor(theme, 'primary')} />
        <AppHeader
          text="Crear Tarea"
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
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={lesson}
              onValueChange={(lesson) => setLesson(lesson)}
            >
              {lessons.map((lesson) => (
                <Picker.Item
                  key={lesson.id}
                  label={lesson.name}
                  value={lesson}
                />
              ))}
            </Picker>
          </View>
          <TextInput
            style={getTextInputStyle('name')}
            placeholder="Nombre"
            placeholderTextColor={getColor(theme, 'body_color')}
            onChangeText={(text) => update('name', text)}
          />
          <TextInput
            style={getTextInputStyle('description')}
            placeholder="Descripción"
            placeholderTextColor={getColor(theme, 'body_color')}
            onChangeText={(text) => update('description', text)}
          />
          <AppButton
            text="Enviar"
            onPress={() => {
              const name = task.name ?? '';
              const description = task.description ?? '';

              update('name', name);
              update('description', description);

              if (name.length > 0 && description.length > 0) {
                TasksController.add(lesson, {
                  name,
                  description,
                });

                navigation.goBack();
              }
            }}
          />
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export { CreateTaskScreen };
