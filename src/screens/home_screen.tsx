//

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { AppButton } from '../components';

import { getColor } from '../colors';

const HomeScreen = ({ navigation }: any) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: getColor('body_bg'),
      flex: 1,
      justifyContent: 'space-evenly',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={getColor('primary')} />
      <AppButton text="Entrar" onPress={() => navigation.navigate('Path')} />
      <AppButton
        text="Administrador"
        onPress={() => navigation.navigate('Admin')}
      />
    </SafeAreaView>
  );
};

export { HomeScreen };
