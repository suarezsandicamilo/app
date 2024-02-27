//

import { useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { Lesson, Section } from '../models';

import { LessonsController, SectionsController } from '../controllers';

import { AppButton, AppHeader } from '../components';

import { useEffectAsync } from '../hooks';

import { getColor } from '../colors';

const CreateLessonScreen = ({ navigation }: any) => {
  // Data
  const [sections, setSections] = useState<Section[]>([]);

  // Form Data
  const [section, setSection] = useState<Section>();

  const [lesson, setLesson] = useState<Partial<Lesson>>({});

  const update = (key: keyof Lesson, value: any) => {
    setLesson((lessson) => ({
      ...lessson,
      [key]: value,
    }));
  };

  // Fetch Data
  useEffectAsync(async () => {
    setSections(await SectionsController.all());
  }, []);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor('body_bg'),
      flex: 1,
    },
    form: {
      margin: 20,
    },
    formTextInput: {
      borderColor: getColor('border_color'),
      borderRadius: 4,
      borderWidth: 1,
      height: 40,
      marginBottom: 10,
      padding: 10,
    },
    picker: {
      color: getColor('body_color'),
    },
    pickerContainer: {
      borderColor: getColor('border_color'),
      borderRadius: 4,
      borderWidth: 1,
      marginBottom: 10,
    },
    requiredFormTextInput: {
      borderColor: getColor('danger'),
      borderWidth: 1,
    },
  });

  const getTextInputStyle = (key: keyof Lesson) => {
    const value = lesson[key];

    if (typeof value === 'string') {
      if (value.length > 0) {
        return [styles.formTextInput];
      }

      return [styles.formTextInput, styles.requiredFormTextInput];
    }

    return [styles.formTextInput];
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={getColor('primary')} />
      <AppHeader
        text="Crear Lección"
        leftIcon="arrow-back"
        onLeftIconPress={() => navigation.goBack()}
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
          style={getTextInputStyle('name')}
          placeholder="Nombre"
          placeholderTextColor={getColor('body_color')}
          onChangeText={(text) => update('name', text)}
        />
        <TextInput
          style={getTextInputStyle('description')}
          placeholder="Descripción"
          placeholderTextColor={getColor('body_color')}
          onChangeText={(text) => update('description', text)}
        />
        <AppButton
          text="Enviar"
          onPress={() => {
            const name = lesson.name ?? '';
            const description = lesson.description ?? '';

            update('name', name);
            update('description', description);

            if (name.length > 0 && description.length > 0) {
              LessonsController.add(section, {
                name,
                description,
              });

              navigation.goBack();
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export { CreateLessonScreen };
