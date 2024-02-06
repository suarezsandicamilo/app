//

import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

import { Button } from '@rneui/base';

import * as colors from '../colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.getColor('primary'),
    borderRadius: 4,
    margin: 80,
    padding: 20,
  },
  buttonText: {
    color: colors.getColor('white'),
    textTransform: 'uppercase',
  },
  container: {
    backgroundColor: colors.getColor('body_bg'),
    flex: 1,
    justifyContent: 'center',
  },
});

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.getColor('primary')} />
      <Button
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate('Path');
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Button>
    </SafeAreaView>
  );
};

export { HomeScreen };
