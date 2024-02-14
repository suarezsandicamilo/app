//

import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

import { Button } from '@rneui/base';

import { useTheme } from '../colors';

const HomeScreen = ({ navigation }: any) => {
  const { getColor } = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: getColor('primary'),
      borderRadius: 4,
      margin: 80,
      padding: 20,
    },
    buttonText: {
      color: getColor('white'),
      textTransform: 'uppercase',
    },
    container: {
      backgroundColor: getColor('body_bg'),
      flex: 1,
      justifyContent: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={getColor('primary')} />
      <Button
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate('Path');
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Button>
      <Button
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate('Admin');
        }}
      >
        <Text style={styles.buttonText}>Administrador</Text>
      </Button>
    </SafeAreaView>
  );
};

export { HomeScreen };
