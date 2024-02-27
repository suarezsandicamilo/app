//

import { useState } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { Section } from '../models';

import { SectionsController } from '../controllers';

import { AppButton, AppHeader } from '../components';

import { getColor } from '../colors';

const CreateSectionScreen = ({ navigation }: any) => {
  // Form Data
  const [section, setSection] = useState<Partial<Section>>({});

  const update = (key: keyof Section, value: any) => {
    setSection((section) => ({
      ...section,
      [key]: value,
    }));
  };

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
    requiredFormTextInput: {
      borderColor: getColor('danger'),
      borderWidth: 1,
    },
  });

  const getTextInputStyle = (key: keyof Section) => {
    const value = section[key];

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
        text="Crear Sección"
        leftIcon="arrow-back"
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.form}>
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
            const name = section.name ?? '';
            const description = section.description ?? '';

            update('name', name);
            update('description', description);

            if (name.length > 0 && description.length > 0) {
              SectionsController.add({
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

export { CreateSectionScreen };
