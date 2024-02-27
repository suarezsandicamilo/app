//

import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { AppButton, AppHeader } from '../components';

import { getColor } from '../colors';

const AdminScreen = ({ navigation }: any) => {
  const styles = StyleSheet.create({
    buttonsContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
    },
    container: {
      backgroundColor: getColor('body_bg'),
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={getColor('primary')} />
      <AppHeader
        text="Administrador"
        leftIcon="arrow-back"
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.buttonsContainer}>
        <AppButton
          text="Crear Sección"
          onPress={() => navigation.navigate('CreateSection')}
        />
        <AppButton
          text="Crear Lección"
          onPress={() => navigation.navigate('CreateLesson')}
        />
        <AppButton
          text="Crear Tarea"
          onPress={() => navigation.navigate('CreateTask')}
        />
        <AppButton text="Datos" onPress={() => navigation.navigate('Data')} />
      </View>
    </SafeAreaView>
  );
};

export { AdminScreen };
